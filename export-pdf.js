const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 900 });

  await page.goto('http://localhost:3000/resume', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  // Capture screenshot to see what it looks like
  await page.screenshot({ path: 'D:/Documents/Projects/about_me/public/resume-debug.png', fullPage: true });

  // Check computed styles
  const styles = await page.evaluate(() => {
    const body = document.body;
    const bg = getComputedStyle(body).backgroundColor;
    const root = document.querySelector('[class*="resumeRoot"]');
    const rootBg = root ? getComputedStyle(root).backgroundColor : 'N/A';
    const rootW = root ? getComputedStyle(root).width : 'N/A';
    return { bg, rootBg, rootW, bodyOverflow: getComputedStyle(body).overflow };
  });
  console.log('Styles:', JSON.stringify(styles));

  await browser.close();
})();
