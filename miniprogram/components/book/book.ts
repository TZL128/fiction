// components/errorImage/errorImage.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    src: {
      type: String,
    },
    name: {
      type: String
    },
    introduction:{
      type:String
    },
    author:{
      type:String
    },
    add: {
      type: Boolean,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    success: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    loadError() {
      this.setData({
        success: !this.data.success
      })
    },
    tapHandle() {
      this.triggerEvent('tapBook', this.properties)
    },
    longPress() {
      this.triggerEvent('longPressBook', this.properties)
    },
  }
})
