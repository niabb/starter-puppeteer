const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--start-maximized'],
    defaultViewport: null,
    slowMo: 0,
    ignoreHTTPSErrors: true,
  });

  // When the browser is launched, a first tab/page is already opened. We should use that page.
  // If for any reason no tab is opened, we create one.
  const pages = await browser.pages();
  let page;
  if (pages.length > 0) {
    [page] = pages;
  } else {
    page = await browser.newPage();
  }
  await page.setViewport({ width: 0, height: 0 });
  await page.goto('http://google.fr');
  await page.waitForTimeout(5000);

  await browser.close();
})();
