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
        url: 'https://weread-1258476243.file.myqcloud.com/weread/cover/40/3300011940/t6_3300011940.jpg',
        author: '卡罗尔·克肖 比尔·韦德',
        introduction: '心理学研究表明，生活中的许多问题与烦恼，都是“反刍”造成的。反刍是一种持久的、循环的抑郁思维，表现是使人们以自我为中心、以过去为主导、集中于负面内容,而且很容易陷入停不下来的恶性循环。 ·每次想到过去做的蠢事，都觉得自己的人生完蛋了? ·凡事总是先想到消极的一面，每天负能量满满? ·一遇到大场面，就习惯性焦虑、失眠、不安? ·思虑过重，想太多，愁太甚，永远处在焦虑状态? 以上都是反刍的表现。 在本书中，两位心理学博:士基于30多年的执业经验，为我们提供了8种焦虑自救良方,从理解自身的状态到学会如何进入心流状态，这些方法层层递进，为我们破解反刍带来的焦虑，帮助我们重获安全、自控、自在的生活。'
      },
      {
        id: "2",
        name: "驭鲛记全2册（《与君初相识》原著）",
        url: 'https://wfqqreader-1252317822.image.myqcloud.com/cover/876/26349876/t6_26349876.jpg',
        author: '九鹭非香',
        introduction: '“2019最受关注十大奇幻IP”唯一获奖的小说作品，《招摇》之后，人气作家九鹭非香全新高口碑力作。顺德公主猎得一鲛人，欲寻人驯化之。公主其愿有三，一愿此妖口吐人言，二愿此妖化尾为腿，三愿其心永无叛逆。世人皆知，东方驭妖岛、西方驭妖山、南方驭妖谷与北方驭妖台，是天下仅存的四个允许拥有驭妖能力的人生存的地方。而南方的驭妖谷，是天下驭妖师实力最强之所在。她是驭妖谷最厉害的驭妖师，却为一个鲛人迷了心。'
      }, {
        id: "3",
        name: "心居（海清、童瑶、张颂文主演同名电视剧原著）",
        url: 'https://wfqqreader-1252317822.image.myqcloud.com/cover/625/41307625/t6_41307625.jpg',
        author: '滕肖澜',
        introduction: '《心居》——新海派作家滕肖澜的长篇小说。深潜生活，写就纷杂日常中的极力争取。这是此刻的上海，有着生于斯长于斯的城市常驻者，折腾半辈子只为落叶归根的老上海人，不想变得透明而努力上进的新上海人。在日新日进的大都市大时代里，以顾家三兄妹为代表的上海人们，围绕房子衍生出种种悲欣交集的人生经历。历经生活的劫波，他们渴求更丰沛的物质生活，同样也不遗余力地为个人灵魂寻找安妥的栖居之处。作者不疾不徐、细腻软糯的行文风格，正是“沪上味道”最地道的注脚——这座城市和城中人不失温热的精明、无害的野心，以及洇入人间烟火的妥帖。'
      }, {
        id: "4",
        name: "剑来",
        url: 'https://wfqqreader-1252317822.image.myqcloud.com/cover/199/22261199/t6_22261199.jpg',
        author: '烽火戏诸侯',
        introduction: '大千世界，无奇不有。 我陈平安，唯有一剑，可搬山，倒海，降妖，镇魔，敕神，摘星，断江，摧城，开天！'
      },

    ],
    showPanel: false,
    panelBook: {}
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
  tapBook(e: WechatMiniprogram.CustomEvent) {
    wx.navigateTo({
      url: '../introduce/introduce',
      success: function (res) {
        res.eventChannel.emit('book', e.detail)
      }
    })
  },
  delBook(e: WechatMiniprogram.CustomEvent) {
    this.setData({
      showPanel: true,
      panelBook: e.detail
    });
  },
  cancel() {
    this.setData({
      showPanel: false,
      panelBook: {}
    });
  },


  remove() {
    console.log(this.data.panelBook);
  },

  scrollRefresh() {
    setTimeout(() => {
      this.setData({
        pull: false
      })
    }, 3000)

  }

})