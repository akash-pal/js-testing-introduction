const {generateText} =  require('./util');

/* unit test*/
it('should output name and age', () => {
    const text = generateText('Akash', 27);
    expect(text).toBe('Akash (27 years old)');
    const text2 = generateText('Max', 27);
    expect(text2).toBe('Max (27 years old)');
});

it('should outut data-less text', () => {
    const text = generateText('', null);
    expect(text).toBe(' (null years old)')
});