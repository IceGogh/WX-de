//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    off: true,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    nub : 0 ,
    temA : { firstN :'f1f1', lastN : 'l1l1'},
    temB : { firstN :'f2f2', lastN : '222222'},
    temC : { firstN: 'f3f3', lastN: 'l3l3' },
    arr : [
      'a','b','3'
    ]
  },
  addd : function(){
    if( this.data.nub < 10){
      this.setData({
        nub: ++this.data.nub
      })
    }else{
      this.setData({
        nub: 0
      })
    }
    
  },
  consoleCheck : function(){
    this.data.off = !this.data.off;
    console.log(this.data.off)
  },
  onShareAppMessage : function(){
    return {
      title : "转发的标题123",
      path : "/pages/page3"
    }
  },
  changeName : function(e){
    
    if (this.data.motto == '______heyto'){
      this.setData({
        motto: 'hello'
      })
    }else{
      this.setData({
        motto: '______heyto'
      })
    }
    
    
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

})
