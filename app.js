App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    // 调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo: function(cb) {
    var that = this
    if(this.globalData.userInfo) {
      typeof cb === 'function' && cb(this.global.userInfo)
    } else {
      // 调用登录接口
      wx.login({
        success: function () {
        wx.getUserInfo({
          success: function (res) {
            console.log(`获取用户登录信息${res}`)
            this.global.userInfo = res.userInfo
            typeof cb === 'function' && cb(this.global.userInfo)
          }
        })
        }
      })
    }
  },
  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {

  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log(msg)
  },
  onShareAppMessage: function () {
  }
})
