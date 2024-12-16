//Locaete elemets inside the frames

//const username = await page.frameLocator('.frame-class').getByLabel("username");
//await username.fill('name');
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to a page containing an iframe
  await page.goto('https://example.com'); // Replace with your URL

  // Locate the iframe and interact with it
  const frame = await page.frame({ name: 'iframe-name' }); 
  if (frame) {
    // Interact with elements inside the iframe
    await frame.fill('#input-id', 'Hello, iframe!'); 
    await frame.click('#button-id'); // Replace '#button-id' with the button's selector
  } else {
    console.log('Iframe not found!');
  }

  await browser.close();
})();

//help 
// Replace 'iframe-name' with the iframe's name or use other selectors like `frameLocator` if needed
// Replace '#input-id' with the input field's selector inside the iframe

