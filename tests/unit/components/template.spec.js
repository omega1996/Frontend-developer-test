import {shallowMount, createLocalVue} from "@vue/test-utils"
import CommentTemplate from "@/components/CommentTemplate.vue"
import router from "@/router"
import parse from "@/components/MarkdownParser";

const localVue = createLocalVue();
localVue.use(router);

localVue.mixin({
    methods: {
        markdown(value) {
            return parse(value)
        }
    }
});

const commentBuilder = function (comment) {
    return Object.assign({
        id: 0,
        reply: 0,
        rating: 0,
        text: "",
        userName: "",
        timeStamp: 0,
        hidden: false,
        level: 0
    }, comment)
};

describe("CommentTemplate.vue", () => {
    test("exists", () => {
        const wrapper = shallowMount(CommentTemplate, {
            localVue
        });
        expect(wrapper.exists()).toBe(true);
    });

    test("shows time", () => {
        let wrapper = shallowMount(CommentTemplate, {
            localVue,
            propsData: {
                comment: commentBuilder(),
                time: 1
            }
        });
        expect(wrapper.vm.timeFromNow).toBe("только что");
        expect(wrapper.find(".comment-body-nav-time").text()).toBe("только что");

        wrapper = shallowMount(CommentTemplate, {
            localVue,
            propsData: {
                comment: commentBuilder(),
                time: 1860000
            }
        });
        expect(wrapper.vm.timeFromNow).toBe("31 минут назад");
        expect(wrapper.find(".comment-body-nav-time").text()).toBe("31 минут назад");

        wrapper = shallowMount(CommentTemplate, {
            localVue,
            propsData: {
                comment: commentBuilder(),
                time: 21600000
            }
        });
        expect(wrapper.vm.timeFromNow).toBe("6 часов назад");
        expect(wrapper.find(".comment-body-nav-time").text()).toBe("6 часов назад");

        wrapper = shallowMount(CommentTemplate, {
            localVue,
            propsData: {
                comment: commentBuilder(),
                time: 86400000
            }
        });
        expect(wrapper.vm.timeFromNow).toBe("1 дней назад");
        expect(wrapper.find(".comment-body-nav-time").text()).toBe("1 дней назад")
    });

    test("levels", () => {
        let wrapper = shallowMount(CommentTemplate, {
            localVue,
            propsData: {
                comment: commentBuilder(),
            }
        });
        expect(wrapper.find(".comment-level-0").exists()).toBeTruthy();
        expect(wrapper.find(".comment-level-1").exists()).not.toBeTruthy();

        wrapper = shallowMount(CommentTemplate, {
            localVue,
            propsData: {
                comment: commentBuilder({level: 1}),
            }
        });
        expect(wrapper.find(".comment-level-1").exists()).toBeTruthy();
        expect(wrapper.find(".comment-level-0").exists()).not.toBeTruthy();
        expect(wrapper.find(".comment-level-2").exists()).not.toBeTruthy()
    });

    test("markdown tags should be shown correctly", () => {
        let wrapper = shallowMount(CommentTemplate, {
            localVue,
            propsData: {
                comment: commentBuilder({text: "---"}),
            }
        });
        expect(wrapper.find("hr").exists()).toBeTruthy();
        expect(wrapper.vm.parsedText).toBe("<hr>");
        expect(wrapper.find("h1").exists()).not.toBeTruthy();

        wrapper = shallowMount(CommentTemplate, {
            localVue,
            propsData: {
                comment: commentBuilder({text: "# Lorem"}),
            }
        });
        expect(wrapper.find("h1").exists()).toBeTruthy();
        expect(wrapper.vm.parsedText).toBe("<h1> Lorem</h1>");
        expect(wrapper.find("h1").element.innerHTML).toBe(" Lorem");
    });

    test("hide comment", () => {
        let wrapper = shallowMount(CommentTemplate, {
            localVue,
            propsData: {
                comment: commentBuilder({rating: -12})
            }
        });
        expect(wrapper.vm.isClosed).toBeTruthy();
        expect(wrapper.find(".comment").exists()).toBeFalsy();
        expect(wrapper.find("button").element.innerHTML.trim()).toBe("Открыть комментарий");

        wrapper = shallowMount(CommentTemplate, {
            localVue,
            propsData: {
                comment: commentBuilder({rating: -9})
            }
        });
        expect(wrapper.vm.isClosed).toBeFalsy();
        expect(wrapper.find(".comment").exists()).toBeTruthy();
    })
});
