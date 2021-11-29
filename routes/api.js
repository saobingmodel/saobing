// 本文件只负责路由中转，业务代码在对应的控制器里
var express = require('express');
var router = express.Router();
// 加载apiController控制器
var api = require('../controllers/apiController');
// 服务列表
router.get('/serverlist',api.serverList);
// 服务详情
router.get('/serverdetails',api.serverDetails);

// 提交jd_ck
router.post('/serveritem',api.serveritem);

// 更新jd_ck
router.post('/serveritemup',api.serveritemUp);

// 删除jd_ck
router.post('/serveritemdelete',api.serveritemDelete);

// 查询账号信息
router.post('/zc',api.zc);

// 查询任务
router.get('/task',api.task);

// 查询任务日志
router.get('/taskitem',api.taskItem);

module.exports = router;