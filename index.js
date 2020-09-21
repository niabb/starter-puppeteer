const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--start-maximized'],
    defaultViewport: null,
    slowMo: 0,
    ignoreHTTPSErrors: true,
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 0, height: 0 });
  await page.goto('http://google.fr');
  await page.waitForTimeout(5000);

  await browser.close();
})();
