function parse(value) {
    let regExps = [
        {
            re: /\*{3}((\w)*(\s)*)*\*{3}/gi,
            tagBefore: '<b><i>',
            tagAfter: '</i></b>'
        },
        {
            re: /\*{2}((\w)*(\s)*)*\*{2}/gi,
            tagBefore: '<b>',
            tagAfter: '</b>'
        },
        {
            re: /\*((\w)*(\s)*)*\*/gi,
            tagBefore: '<i>',
            tagAfter: '</i>'
        }
    ];

    for (let regExp of regExps) {
        value = value.replace(regExp.re, (matched, inside) => {
            return regExp.tagBefore + inside + regExp.tagAfter
        });
    }

    return value
}

export default parse