import puppeteer from "puppeteer";

describe('page start', () => {
    let browser;
    let page;

    //запуск браузера
    beforeEach(async () => {
        browser = await puppeteer.launch({//опции при запуске браузера
            headless: false,//чтобы показывать реальный браузер
            slowMo: 100,
            devtools: true,//чтобы видеть инструменты разработчика
        });

        page = await browser.newPage()
    });

    test('test', async () => {
        await page.goto("http://localhost:9000");

        await page.waitForSelector("body");//этот метод заставит браузер ждать появления селектора body
    });

    //закрыть браузер
    // afterAll(async () => {
    //     await browser.close();
    // });
});