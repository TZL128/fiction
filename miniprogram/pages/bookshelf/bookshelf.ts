// pages/bookshelf/bookshelf.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pull: false,
    // isEdit: false,
    books: [
      {
        id: "1",
        name: "如何停止何思乱想",
        url: 'https://weread-1258476243.file.myqcloud.com/weread/cover/40/3300011940/t6_3300011940.jpg'
      },
      {
        id: "2",
        name: "驭鲛记全2册（《与君初相识》原著）",
        url: 'https://wfqqreader-1252317822.image.myqcloud.com/cover/876/26349876/t6_26349876.jpg'
      }, {
        id: "3",
        name: "心居（海清、童瑶、张颂文主演同名电视剧原著）",
        url: 'https://wfqqreader-1252317822.image.myqcloud.com/cover/625/41307625/t6_41307625.jpg'
      }, {
        id: "4",
        name: "剑来",
        url: 'https://wfqqreader-1252317822.image.myqcloud.com/cover/199/22261199/t6_22261199.jpg'
      },

    ],
    showPanel:false,
    panelBook:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

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
  //编辑按钮
  // edit() {
  //   this.setData({
  //     isEdit: !this.data.isEdit
  //   })
  // },
  //添加
  tapBook(e: WechatMiniprogram.CustomEvent) {
    console.log(e);
  },
  delBook(e:WechatMiniprogram.CustomEvent){
    this.setData({
      showPanel:true,
      panelBook:e.detail
    });
  },
  cancel(){
    this.setData({
      showPanel:false
    });
  },

  scrollRefresh() {
    setTimeout(() => {
      this.setData({
        pull: false
      })
    }, 3000)

  }

})