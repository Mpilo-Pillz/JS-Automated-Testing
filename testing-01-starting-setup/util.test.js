const puppeteer = require('puppeteer');
const { generateText, checkAndGenerate } = require('./util');

const date = new Date();
const dateRelationshipStarted = 2019;
const thisYear = date.getFullYear();
const ageOfRelationShip = thisYear - dateRelationshipStarted;

//unit test
test('should output name and age', () => {
    const text = generateText('Mpillz', 29);
    expect(text).toBe('Mpillz (29 years old)');
    const text2 = generateText('H', 30)
    expect(text2).toBe('H (30 years old)');
    const dynamicDate = generateText('Hunadilo', ageOfRelationShip);
    expect(dynamicDate).toBe(`Hunadilo (${ageOfRelationShip} years old)`);
});

test('should output data-less test', () => {
    const text = generateText('', null);
    expect(text).toBe(' (null years old)');
});

// integration Test
test('should generate a valid text output', () => {
    const text = checkAndGenerate('KiloPillz', 16)
    expect(text).toBe('KiloPillz (16 years old)')
});

test('should create an element with text and correct class', async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 80,
        args: ['--window-size=1920,1080']
    })
    const page = await browser.newPage();
    await page.goto('http://127.0.0.1:5500/index.html');

    await page.click('input#age');
    await page.type('input#age', '28');

    await page.click('input#name');
    await page.type('input#name', 'Nomthandazo');

    await page.click('#btnAddUser');

    const finalText = await page.$eval('.user-item', el => el.textContent);
    expect(finalText).toBe('Nomthandazo (28 years old)')

}, 20000)
