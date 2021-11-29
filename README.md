# SaoBing

<p align="center">
    <a href="https://github.com/saobingmodel/saobing"><img src="https://img.shields.io/pypi/l/dailycheckin?style=popout-square" alt="license"></a>
    <a href="https://github.com/saobingmodel/saobing"><img src="https://img.shields.io/github/stars/saobingmodel/saobing.svg?style=popout-square" alt="GitHub stars"></a>
    <a href="https://github.com/saobingmodel/saobing"><img src="https://img.shields.io/github/forks/saobingmodel/saobing.svg?style=popout-square" alt="GitHub forks"></a>
    <a href="https://hub.docker.com/r/saobing/saobing"><img src="https://img.shields.io/docker/pulls/saobing/saobing?style=popout-square" alt="Docker Pulls"></a>
    <a href="https://hub.docker.com/r/saobing/saobing/"><img src="https://img.shields.io/docker/image-size/saobing/saobing?style=popout-square" alt="Docker Size"></a>
    <a href="https://hub.docker.com/r/saobing/saobing/"><img src="https://img.shields.io/docker/stars/saobing/saobing?style=popout-square" alt="Docker Stars"></a>
</p>



## 说明
saobing 专注于用户无感体验 不会添加用户一对一推送

saobing 仅供学习参考使用，请于下载后的 24 小时内删除，本人不对使用过程中出现的任何问题负责，包括但不限于 `数据丢失` `数据泄露`。

saobing 仅支持 qinglong 2.9+

saobing不支持任何arm架构设备

本项目 不提供 `技术上的任何帮助`


不支持也没办法 .NET不支持
## 特性
- [x] docker一键部署
- [x] 用户添加/更新cookies 检测是否过期 添加备注 
- [x] 自定义公告 支持html语法
- [x] 多节点支持
- [x] cookie失效预估时间
- [x] 一键查询账号今日资产
- [x] 任务中心列表
- [x] 账号脚本运行日志
- [ ] 推送图片
- [ ] 工厂 牧场 农场 推送领取
- [ ] 配置资产查询次数
- [ ] 公众号推送？
- [ ] 转wskey？？

### 配置文件
配置文件第一次部署后端会自动生成config
配置文件所有项必填 如不填(**无法预知的后果**)
配置文件地址为docker映射的目录下的config.js
**QL_URL为你的青龙地址**
#### 单节点配置
```yaml
var config ={
    "Title": "Sao-Bing",
    "Announcement": "本项目脚本收集于互联网，为了您的财产安全，请关闭京东免密支付。",
    "Config": [
      {
        "QLkey": 1,
        "QLName": "（测试）",
        "QLurl": "http://10.10.10.10",
        "QL_CLIENTID": "00000",
        "QL_SECRET": "000000",
        "QL_CAPACITY": 50,
      }
    ]
  }
module.exports = config;
```

#### 多节点配置
```yaml
var config ={
    "Title": "Sao-Bing",
    "Announcement": "本项目脚本收集于互联网，为了您的财产安全，请关闭京东免密支付。",
    "Config": [
      {
        "QLkey": 1,
        "QLName": "（测试）",
        "QLurl": "http://10.10.10.10",
        "QL_CLIENTID": "00000",
        "QL_SECRET": "000000",
        "QL_CAPACITY": 50,
      },
     {
        "QLkey": 2,           //序号
        "QLName": "（测试2）",   //节点名称
        "QLurl": "http://10.10.10.10:5700",   //青龙地址
        "QL_CLIENTID": "00000",   //青龙CLIENTID
        "QL_SECRET": "000000",   //青龙SECRET
        "QL_CAPACITY": 45,   //车位
      },
    ]
  }
module.exports = config;
```


## 项目指南
有多种部署方式 下面只提供一种docker部署

**Arm暂不支持 可以不用试了**

### 第一次部署
1. 在ssh执行:`docker exec -it 你的容器名称 bash`进入容器 `ql update`将更新青龙到最新 `ql check`检查青龙状态是否正确

2. 进入青龙的控制面板创建应用 应用名称`SaoBing` 权限 全部选吧 后期更新功能会忘记

3. 复制粘贴到ssh执行下列命令 如出现无法拉取 请自行设置docker国内源
```docker
docker run --name saobing -p 6703:4000 -d -v "$(pwd)"/config.js:/app/config/config.js:ro  saobing/saobing:0.5
```
4.配置docker映射目录下的config.js 默认地址 `/用户名/kingfeng/config.js`
- 查看容器IP命令 `docker inspect --format='{{.NetworkSettings.IPAddress}}' 容器名`
- 如QL_URL使用容器IP 青龙默认部署IP为`5700` 例如我容器IP是`172.13.1.33` 那我QL_URL就是`http://172.13.1.33:5700/`
### 更新
```docker
docker kill saobing && docker rm saobing && docker rmi saobing/saobing
docker pull saobing/saobing:latest
docker run --name saobing -p 6703:4000 -d -v "$(pwd)"/config.js:/app/config/config.js:ro  saobing/saobing:latest
```
## 常见问题
Q：是否支持内网端口？
A：支持公网IP 域名 以及容器IP 推荐容器IP(安全性略高,速度稍微快)。

Q：为什么访问主页出现错误空提示？  
A：一般为端口映射错误/失败，请自行检查配置文件。

Q：是否支持N1 Arm架构？  
A：不支持。
