const puppeteer = require('puppeteer');
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

/*end-to-end-test*/
test('should create an element with text and correct class', async ()=> {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 80
    });
    const page = await browser.newPage();
    await page.goto('file:///C:/Users/akashpal/Projects/js-testing-introduction/index.html');
    await page.click('input#name');
    await page.type('input#name', 'Anna');
    await page.click('input#age');
    await page.type('input#age', '28');
    await page.click('#btnAddUser');
    const finalText = await page.$eval('.user-item', el => el.textContent);
    expect(finalText).toBe('Anna (28 years old)');
}, 10000);