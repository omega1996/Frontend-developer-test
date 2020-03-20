export default {
    actions: {},
    mutations: {},
    state: {
        article: `
Lorem ipsum dolor sit amet, 
consectetur adipisicing elit. Accusamus asperiores aspernatur, 
assumenda fugit itaque magnam magni quas quibusdam? Ea error 
excepturi illum, ipsa ipsam laborum libero magni maiores necessitatibus nesciunt, 
obcaecati odit officiis optio reprehenderit sequi similique, temporibus. Corporis 
eligendi iure nobis non nostrum odit omnis, quas quia sit totam? Alias aperiam atque 
distinctio ea eaque eos error fuga, illum necessitatibus obcaecati officia, officiis quaerat, 
qui soluta temporibus veniam voluptates? Modi nobis praesentium quas quibusdam voluptatibus. 
Consectetur eaque exercitationem pariatur quos unde! Asperiores autem eius, enim incidunt minima 
necessitatibus nemo quasi quisquam rem repellendus. Cumque explicabo pariatur temporibus vitae voluptate?  
This article also supports markdown! 
As example, you can do your text *italic*, **bold**, or ***italic bold*** as like it works in MD.
you can ~hilit~ highlight your code using backquotes \` like that \`  
you can mark headers by # symbol:
# header 1 
## header 2 
### header 3 
#### header 4 
##### header 5 
###### header 6 
or even use horizontal line
 ---
 
 you can attach [links](google.com) without description (google.com)  
 and images ![images](https://img.icons8.com/cotton/2x/thumb-up.png)
 ---
 ## things that are not supported yet:  
 1. lists and numbered lists  
 2. screening with backslash (\\)  
 3. tables  
 4. footnotes
`
    },
    getters: {
        articleText(state){
            return state.article
        }
    }
}