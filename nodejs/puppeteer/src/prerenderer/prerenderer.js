const chromium = require("chrome-aws-lambda");
const puppeteer = require("puppeteer-core");

async function doAsync() {
    const ERROR_MESSAGE_NO_PARAM = "No query parameter given!";
    const ERROR_MESSAGE_INVALID_AUTH = "Invalid authentification!";
    const HEADERS = {
        "Access-Control-Allow-Origin": process.env.ALLOW_ORIGIN || "*",
        "Access-Control-Request-Method": "POST",
    };
    const WAIT_FOR_SELECTOR_TIMEOUT = 10000;
    const WAIT_AFTER_FIRST_NETWORK_IDLE = 2000;
    const PAGE_WRAPPER_ID = "#app-layout";

    const TARGET_URL = "https://nicochannel.jp/kaorin/article/arjoMFQtMVNoqC6RhTRXUe3m";
    console.log("TARGET_URL", TARGET_URL);

    const BROWSER = await puppeteer.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath,
        headless: chromium.headless,
    });

    return new Promise(async (resolve, reject) => {
        let page = await BROWSER.newPage();
        await page.goto(TARGET_URL, { waitUntil: "networkidle0" });
        await new Promise((resolve) => {
            setTimeout(resolve, WAIT_AFTER_FIRST_NETWORK_IDLE);
        });
        page.reload();
        try {
            await page.waitForSelector(PAGE_WRAPPER_ID, {
                timeout: WAIT_FOR_SELECTOR_TIMEOUT,
            });
        } catch (error) {
            console.log("waitForSelector Error:", error);
        }
        const RESULT = await page.content();
        resolve(RESULT);
    }).then((RESULT) => {
        BROWSER.close();

        // Success
        callback(null, {
            statusCode: 200,
            headers: HEADERS,
            body: RESULT,
        });
    });
}

doAsync();