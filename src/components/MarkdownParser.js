function parse(value) {
    let regExp = /\*\*\*.*\*\*\*/gi;

    return value.replace(regExp, (matched)=>{
        return '<b>'+matched.slice(3, matched.length-3)+'</b>'
    })
}

export default parse