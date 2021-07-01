const puppeteer = require("puppeteer");
let eventName = "Baby Shower";
let name = "Kennedy Martin";
let date = "July 10 5-7PM";
let address = "72 A GK-2 New-Delhi 110019";
let emailAdd = "tebase6577@advew.com";
let password = "kennedy123";

(async () => {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      defaultViewport: null,
      args: ["--start-maximized"],
    });
    let pagesArr = await browser.pages();
    let page = pagesArr[0];
    await page.goto("https://www.greetingsisland.com/invitations");
    //Select design
    await page.waitForSelector(".grid-item.-item-3-thumbs:first-child");
    await page.click(".grid-item.-item-3-thumbs:first-child");
    await page.waitForSelector(".grid-item.item-portrait[data-id='24458']");//.grid-item.item-portrait:first-child
    await page.click(".grid-item.item-portrait[data-id='24458']");
    await page.waitForSelector(".button.-primary.-size-md.-wider");
    await page.click(".button.-primary.-size-md.-wider");

    //Make changes
    await page.waitForSelector("[entity_id='97352']");
    await page.click("[entity_id='97352']");
    await page.keyboard.down("Control");
    await page.keyboard.press("KeyA");
    await page.keyboard.press("Backspace");
    await page.keyboard.up("Control");
    await page.type("[entity_id='97352']",name);
    await page.waitForSelector("[entity_id='97353']");
    await page.click("[entity_id='97353']");
    await page.keyboard.down("Control");
    await page.keyboard.press("KeyA");
    await page.keyboard.press("Backspace");
    await page.keyboard.up("Control");
    await page.type("[entity_id='97353']",date);
    await page.keyboard.press("Enter");
    await page.type("[entity_id='97353']",address);

    //Select how to acess invitation
    await page.click("#finish-button-wrapper a");
    await page.click("[data-tab-name='share']");

    //Fill details
    await page.waitForSelector(".required.name.nourl.langSupported");
    await page.type(".required.name.nourl.langSupported",eventName);
    await page.type("#sc-t2",name);
    await page.click(".datepicker.watch.required.hasDatepicker");
    await page.evaluate(function(){
      $("#Details_WhenDate").datepicker();
      console.log("between");
      $("#Details_WhenDate").datepicker('setDate','07/10/2021');
    });
    await page.click(".button.next.-primary.-size-sm-md.-arrow-next");

    await page.waitForSelector(".name.name-template");
    await page.type(".name.name-template",name);
    await page.waitForSelector(".email.email-template");
    await page.type(".email.email-template",emailAdd);
    await page.click(".button.-secondary.button-add._invisible-sm");
    await page.waitForSelector("#form2Send");
    await page.click("#form2Send");

    //Login
    await page.waitForSelector(".modal-login");
    await page.click(".modal-login");
    await page.waitForSelector(".button.-with-icon.-email.-size-sm-md.-full-width.action-step-2");
    await page.click(".button.-with-icon.-email.-size-sm-md.-full-width.action-step-2");
    await page.waitForSelector(".nospace");
    await page.type(".nospace",emailAdd);
    await page.type("[name='Password']",password);
    await page.waitForSelector(".button.-primary.-size-sm-md.-full-width");
    await page.click(".button.-primary.-size-sm-md.-full-width");

})();

