import parse from "@/components/MarkdownParser";

describe('markdown parser should parse properly', () => {
    test('bold', () => {
        expect(parse('**Lorem Ipsum**')).toBe('<b>Lorem Ipsum</b>');
    });
    test('italic', () => {
        expect(parse('*Lorem Ipsum*')).toBe('<i>Lorem Ipsum</i>');
        expect(parse('_Lorem Ipsum_')).toBe('<i>Lorem Ipsum</i>');
    });
    test('italic bold', () => {
        expect(parse('***Lorem Ipsum***')).toBe('<b><i>Lorem Ipsum</i></b>');
        expect(parse('**_Lorem Ipsum_**')).toBe('<b><i>Lorem Ipsum</i></b>');
    });
    test('horizontal line', () => {
        expect(parse('---')).toBe('<hr>');
    });
    test('strike', () => {
        expect(parse('~Lorem Ipsum~')).toBe('<s>Lorem Ipsum</s>');
    });
    test('Headers', () => {
        expect(parse('# Header')).toBe('<h1> Header</h1>');
        expect(parse('## Header')).toBe('<h2> Header</h2>');
        expect(parse('### Header')).toBe('<h3> Header</h3>');
        expect(parse('#### Header')).toBe('<h4> Header</h4>');
        expect(parse('##### Header')).toBe('<h5> Header</h5>');
        expect(parse('###### Header')).toBe('<h6> Header</h6>');
    });
    test('monospace', () => {
        expect(parse('`Lorem Ipsum`')).toBe('<span style="background: lightgray">Lorem Ipsum</span>');
    });
    test('links', () => {
        expect(parse('[Lorem Ipsum](http://google.com)')).toBe('<a href="http://google.com">Lorem Ipsum</a>');
    });
    test('images', () => {
        expect(parse('![Lorem Ipsum](http://google.com)')).toBe('<img src="http://google.com" alt="Lorem Ipsum">');
    });
    test('brakes', () => {
        expect(parse('Lorem  Ipsum')).toBe('Lorem<br>Ipsum');
    });
});
