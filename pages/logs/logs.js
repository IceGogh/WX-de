//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(logggg => {
        return util.formatTime(new Date(logggg))
      })
    });

    console.log(wx.getStorageSync('logs') instanceof Array);
    console.log(wx.getStorageSync('logs'))
  }
})

