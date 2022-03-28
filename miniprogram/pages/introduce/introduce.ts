// pages/introduce/introduce.ts
interface book {
  name: string,
  src: string,
  author: string,
  introduction: string
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    book: {},
    recommendList:[],
    showAction:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    const eventChannel = this.getOpenerEventChannel()
    const _that = this;
    eventChannel.on('book', function (data) {
      _that.setData({ book: data })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  changeBatch(){
    console.log('换一批');
  },

  handel(){
    this.setData({
      showAction:!this.data.showAction
    })
    
  },
  touchend(e:WechatMiniprogram.BaseEvent){
    console.log(e);
    
  }

})