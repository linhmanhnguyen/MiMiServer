const puppeteer = require('puppeteer');
const returnResponseUtil = require('../utils/returnResponse');
const fs = require('fs'); 

class CrawDataController {
  static async getDataInWebSite(req, res) {
    const url = req.body.url;
    const domain = req.body.domain;
    const protocol = req.body.protocol;

    if (!url) {
      return returnResponseUtil.returnResponse(res, 400, false, 'Không tìm thấy url');
    }
    console.log(url);

    try {
      const browser = await puppeteer.launch({ headless: 'new' });
      const page = await browser.newPage();
      await page.goto(url);

      const pageUrls = await page.evaluate((domain, protocol) => {
        const urlArray = Array.from(document.links).filter((link) => link.href.includes(domain) && link.href.includes(protocol)).map((link) => link.href);
        const uniqueUrlArray = [...new Set(urlArray)];
        console.log(uniqueUrlArray);
        return uniqueUrlArray;
      }, domain, protocol);
      
      const site_url_json = { site: url, urls: pageUrls };
      fs.writeFileSync("data.json", JSON.stringify(site_url_json));

      await browser.close();
      returnResponseUtil.returnResponse(res, 200, true, pageUrls);
    } catch (error) {
      console.error(error);
      returnResponseUtil.returnResponse(res, 500, false, "Lỗi server. Vui lòng thử lại sau");
    }
  }
}

module.exports = CrawDataController;
