const {generateText, checkAndGenerate} =  require('./util');

/* unit test*/
test('should output name and age', () => {
    const text = generateText('Akash', 27);
    expect(text).toBe('Akash (27 years old)');
    const text2 = generateText('Max', 27);
    expect(text2).toBe('Max (27 years old)');
});

test('should outut data-less text', () => {
    const text = generateText('', null);
    expect(text).toBe(' (null years old)')
});

/*intergration test*/
test('should generate a valid text output', () => {
    const text = checkAndGenerate('Akash', 27);
    expect(text).toBe('Akash (27 years old)');
});