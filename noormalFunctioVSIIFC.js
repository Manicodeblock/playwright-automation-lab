//normal function example 
async function launchBrowser() {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://example.com');
    await browser.close();
  }
  
  launchBrowser(); // Call the function explicitly

  

  //Immediate invoked fucion example 
  (async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://example.com');
    await browser.close();
  })(); // Automatically invoked after definition
//normal function need to call explicitely and IIMF automatic execution once defined and also normal function we can rec all it and 
//IIFM will not able to reuse function   