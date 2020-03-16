export default {
    actions: {},
    mutations: {},
    state: {
        article: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium aliquam aliquid amet asperiores blanditiis consequuntur cumque dolorum enim eum
            facilis fuga id inventore laboriosam libero modi mollitia neque nobis nulla odit officiis, pariatur
            perspiciatis porro quae quas quasi rem repudiandae sint soluta tempora tempore totam, vero voluptate voluptates?
            Facilis ipsam numquam quisquam rem similique. Ab aperiam cum harum nemo placeat? Asperiores dicta esse id incidunt
            molestiae nemo quis repellat tempore ullam unde! Ab dolorum impedit modi nostrum provident quisquam sint!
            Aliquam architecto at delectus, dicta distinctio dolor doloribus ea error eveniet facilis inventore natus
            nulla porro recusandae sapiente tenetur voluptatum.`
    },
    getters: {
        articleText(state){
            return state.article
        }
    }
}