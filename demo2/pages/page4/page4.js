// pages/page4/page4.js
var initData = 'this is first line\nthis is second line';
var types = ['default', 'primary', 'warn']
var pageObject = {
  data: {
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false
  },
  setDisabled: function (e) {
    this.setData({
      disabled: !this.data.disabled
    })
  },
  setPlain: function (e) {
    this.setData({
      plain: !this.data.plain
    })
  },
  setLoading: function (e) {
    this.setData({
      loading: !this.data.loading
    })
  }
}

for (var i = 0; i < types.length; i++) {
  (function (type) {
    pageObject[type] = function (e) {
      var key = type + 'Size'
      var changedData = {}
      changedData[key] =
        this.data[key] === 'default' ? 'mini' : 'default'
      this.setData(changedData)
    }
  })(types[i])
}


var extraline = [];
 Page(
     
     {

   /**
    * 页面的初始数据
    */
   data: {
     percent : 10,
     x: 0,
     y: 0,
     icon :
     {
         size: [20, 30, 40, 50 , 30, 30, 30 , 30 ,30],

         Type: ['success', 'success_no_circle', 'info', 'warn', 'waitin', 'cancle', 'download', 'search', 'clear']
     },



     iconSize: [ 20, 30, 40, 50 ],
     iconType : [
       'success' , 'success_no_circle', 'info' , 'warn' , 'waitin' , 'cancle' , 'download' , 'search' , 'clear'
     ],

     text : initData,

     nodes : [
       {
         name : 'div',
         attrs : {
           class : "div_class",
           style : "color: red; background: green;"
         },
         children : [
           {
             name : 'view',
             type : 'text',
             text : 'hellow web'
           },
           {
             type : 'p',
             style : 'background: green',
             text : 'node中的view'
           }
         ]
       }
     ]
   },
   cc : function(e){
     console.log(e)
   },
   percentup : function(){
     if (this.data.percent < 100){
       var cc = this.data.percent +=2;
       this.setData({
         percent : cc
       })
     }
   },

   tap: function(e){
     this.setData({
       x: 30,
       y: 40
     })
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
  
   },

   add : function(e){
     extraline.push('other line');
     this.setData({
       text : initData + '\n' + extraline.join('\n')
     })
   },

   remove : function(e){
     console.log(extraline)
     if( extraline.length > 0){
       console.log(extraline)
       extraline.pop();
       this.setData({
         text : initData + '\n' + extraline.join('\n')
       })
     }
   },
   tapNode : function(){
     console.log('richNode tap')
   }
 })