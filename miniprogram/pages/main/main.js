// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dialogShow:false,
    buttons: [{ text: '取消' }, { text: '确定' }],

    banner_list:undefined
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
      let res = await wx.cloud.callFunction(
        {
          name: "banner_list",
        }
      );
      await this.setData({
        banner_list:res.result.data
      });

    console.log(this.data.banner_list);
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

  showDialog:function(){
    this.setData({
      dialogShow:!this.dialogShow
    })
  },

  tapDialogButton(e) {
   
    if(e.detail.index==0){
      console.log("取消")
    }else{
      console.log("确定")
    }
    this.setData({
      dialogShow: false,
      showOneButtonDialog: false
    })
  },
  onDialogClose(e){
    console.log(e);
    console.log("关闭")
  },
  navigateTo:(e)=>{
    console.log(e.currentTarget.dataset.sku_id);
    wx.navigateTo({
      url: '../map/map'
    })
  }
})