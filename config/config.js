var config ={
    "Title": "Sao-Bing",
    "Announcement": `
                    本项目脚本收集于互联网，为了您的财产安全，请关闭京东免密支付。
                    <br>
                    请关闭免密支付以及打开支付验密
                    <br>
                    建议微信绑定账户以保证提现能到账
                    `,
    "Config": [
      {
        "QLkey": 1,
        "QLName": "北京一号（测试）",
        "QLurl": "http://82.157.67.36:6700",
        "QL_CLIENTID": "nGT2jamQ_3iB",
        "QL_SECRET": "85iO2i67cIZx-s9iG2G-Vhuf",
        "QL_CAPACITY": 50,
        "QRurl":""
      },
      {
        "QLkey": 2,
        "QLName": "北京二号（备用）",
        "QLurl": "http://82.157.67.36:7700",
        "QL_CLIENTID": "pV_ePXC5yewN",
        "QL_SECRET": "Tm_qlSySXA24nuBYOeyG49PY",
        "QL_CAPACITY": 50,
        "QRurl":""
      },
      {
        "QLkey": 3,
        "QLName": "北京三号（备用）",
        "QLurl": "http://82.157.67.36:8700",
        "QL_CLIENTID": "eYS7k2HXri_5",
        "QL_SECRET": "RW-3Gxid76RNc0q2f55J-wi1",
        "QL_CAPACITY": 50,
        "QRurl":""
      },{
        "QLkey": 4,
        "QLName": "山东青岛（正式）",
        "QLurl": "http://27.221.79.83:6700",
        "QL_CLIENTID": "Dnje-MQes992",
        "QL_SECRET": "hJEzq_LEcmk_z2bq88YzNq0l",
        "QL_CAPACITY": 1000,
        "QRurl":""
      }
    ]
  }

module.exports = config;