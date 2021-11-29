const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: 'C:\\Users\\admin\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe',
    defaultViewport: {
      width: 1920,
      height: 1080,
    },
    timeout: 3000,
    slowMo: 10,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-features=site-per-process', '--window-size=1400,900'],
  });
  // 新开标签页
  const page = await browser.newPage();
  // 打开指定网址

    await page.goto('https://plogin.m.jd.com/login/login?appid=300&returnurl=https%3A%2F%2Fwq.jd.com%2Fpassport%2FLoginRedirect%3Fstate%3D2217874660%26returnurl%3Dhttps%253A%252F%252Fhome.m.jd.com%252FmyJd%252Fnewhome.action%253Fsceneval%253D2%2526ufc%253D%2526&source=wq_passport', {
            waitUntil: 'networkidle2',   // 等待网络空闲，在跳转加载页面
            waitUntil: 'domcontentloaded'
        })
    await page.waitForTimeout(1000);
    // 输入手机号
    await page.waitForSelector("input[report-eventid=MLoginRegister_SMSPhoneInput]")
    await page.type('input[report-eventid=MLoginRegister_SMSPhoneInput]', '15555554982', {delay: 20})
    await page.waitForTimeout(1000);
    await page.click("input[class=policy_tip-checkbox]");
    await page.waitForTimeout(1500);
    await page.click("button[report-eventid=MLoginRegister_SMSReceiveCode]");
    // 等待滑块出现
    await page.waitForSelector("#cpc_img");
    await page.waitForSelector("#small_img");
    console.log("滑块加载完毕");
    if (await page.$('#cpc_img')){
        console.log("有滑块");
        // 获取滑块位置
        // let slidePosition = await getRect(page, ".sp_msg>img");
        let slidePosition = await page.$eval(".sp_msg>img", el => el.offsetLeft);
        console.log(slidePosition);
        // 滑块可滑动区域
        let blockPosition = await page.$eval(".sp_msg", el => el.clientWidth);
        console.log(blockPosition);
        // await page.waitForTimeout(60000);
        //执行原生Js方法，修改日期控件的时间
        let cookie = await page.cookies();
        console.log(cookie)
        await page.evaluate(() => {
         window.location.href ="http://www.baidu.com"
        })
    }
     
    
//   // 等待极验出现
//   await page.waitForSelector(".geetest_holder")
//   // 点击显示极验
//   await page.click(".geetest_btn")
//   await page.waitForTimeout(800);
  // 开始滑动
//   await slider();
//   async function slider() {
//     // 等待canvas完成 并完成0.5s的移动动画 (验证出错也可为等待时间)
//     await page.waitForSelector('.geetest_ready', {
//       timeout: 0,
//     });
//     await page.waitForTimeout(500);
//     // 获取canvas的左上角X坐标作为滑动的基坐标
//     await page.waitForSelector('.geetest_canvas_bg');
//     let canvasCoordinate = await page.$('.geetest_canvas_bg');
//     let canvasBox = await canvasCoordinate.boundingBox();
//     let canvasX = canvasBox.x;
//     // 等待滑动按钮出现获取Y坐标
//     await page.waitForSelector('.geetest_slider_button');
//     let button = await page.$('.geetest_slider_button');
//     let box = await button.boundingBox();
//     let mouseY = Math.floor(box.y + box.height / 2);
//     // 计算位移
//     let moveDistance = await compare();
//     // 滑动验证
//     await page.hover('.geetest_slider_button');
//     await page.mouse.down();
//     await page.mouse.move(canvasX + moveDistance / 3, mouseY, { steps: 15 });
//     await page.waitForTimeout(1 * 30);
//     await page.mouse.move(canvasX + moveDistance / 2, mouseY, { steps: 20 });
//     await page.waitForTimeout(2 * 50);
//     await page.mouse.move(canvasX + moveDistance + 10, mouseY, { steps: 18 });
//     await page.waitForTimeout(3 * 80);
//     await page.mouse.move(canvasX + moveDistance / 1, mouseY, { steps: 60 });
//     await page.waitForTimeout(4 * 30);
//     await page.mouse.up();
//     await page.waitForSelector('.geetest_success_radar_tip_content');
//     // 是否验证成功
//     let state = await page.evaluate(() => {
//       return document.querySelector('.geetest_success_radar_tip_content').innerText;
//     });
//     if (state !== '验证成功') {
//       return slider();
//     }
//   }
//   // 计算位移
//   async function compare() {
//     //  获取canvas
//     let moveDistance = await page.evaluate(() => {
//       let fullbgs = document.querySelector('.geetest_canvas_fullbg');
//       let bgs = document.querySelector('.geetest_canvas_bg');
//       let bgsCtx = bgs.getContext('2d');
//       let fullbgsCtx = fullbgs.getContext('2d');
//       let canvasWidth = bgsCtx.canvas.width;
//       let canvasHeight = bgsCtx.canvas.height;
//       // 最大像素差(阀值)
//       // let pixelsDifference = 100;
//       let pixelsDifference = 70;
//       // 第一个超过阀值的x坐标 最后一个超过阀值的x坐标
//       let firstX, lastX;
//       // 对比像素
//       for (let i = 1, k = 1; i < canvasWidth; i++) {
//         if (!firstX) {
//           // 找到第一个超过阀值的X坐标后 Y轴停止循环
//           for (let j = 1; j < canvasHeight; j++) {
//             // 获取像素数据
//             let bgsPx = bgsCtx.getImageData(i, j, 1, 1).data;
//             let fullbgsPx = fullbgsCtx.getImageData(i, j, 1, 1).data;
//             // 计算像素差 并判断是否超过阀值
//             let res1 = Math.abs(bgsPx[0] - fullbgsPx[0]);
//             let res2 = Math.abs(bgsPx[1] - fullbgsPx[1]);
//             let res3 = Math.abs(bgsPx[2] - fullbgsPx[2]);
//             if (res1 > pixelsDifference || res2 > pixelsDifference || res3 > pixelsDifference) {
//               firstX = i;
//               // 记录Y坐标
//               k = j;
//             }
//           }
//         } else {
//           // 顺着X轴查找最后一个超过阀值的X坐标
//           // K是第一个超过阀值的Y坐标
//           // (会多一点循环时间 但是不用手动测量阴影块宽度)
//           let bgsPx = bgsCtx.getImageData(i, k, 1, 1).data;
//           let fullbgsPx = fullbgsCtx.getImageData(i, k, 1, 1).data;
//           let res1 = Math.abs(bgsPx[0] - fullbgsPx[0]);
//           let res2 = Math.abs(bgsPx[1] - fullbgsPx[1]);
//           let res3 = Math.abs(bgsPx[2] - fullbgsPx[2]);
//           if (res1 > pixelsDifference || res2 > pixelsDifference || res3 > pixelsDifference) {
//             lastX = i;
//           }
//         }
//       }
//       // 滑动到阴影块中心的距离
//       return firstX + (lastX - firstX) / 2;
//     });
//     return moveDistance;
//   }
  // await browser.close()
})();