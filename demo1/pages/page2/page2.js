// pages/page2/page2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  handleTap1 :function(e){
    console.log(e);
    console.log('tap1')
  },

  handleTap2 : function(){
    console.log('tap2')
  },

  handleTap3: function(){
    console.log('tap3')
  },
  handleTap4: function () {
    console.log('tap4')
  },
  bindViewTap: function(ev){
    
    ev.currentTarget.dataset.alphaBeta ===3;
    console.log(this.data)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})