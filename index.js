const puppeteer = require("puppeteer");

(async()=>{
    try{
        let movieUrl = "https://experts.shopify.com/";
        let browser = await puppeteer.launch({headless:false});
        let page = await browser.newPage();
        await page.setViewport({width:1270,height:800});
        await page.goto(movieUrl);
        await page.waitForSelector('.OxYET');
        const cards = await page.$$('.OxYET');

        for (let i = 0; i < cards.length; i++){
            await page.goto(movieUrl);
            await page.waitForSelector('.OxYET');
            const cards = await page.$$('.OxYET');

            const service = await cards[i].$('a');
            const serviceName = await service.$eval('span', span => span.innerText);
            await service.click();
        }

    }catch(e){
        console.error(e);
    }
})();