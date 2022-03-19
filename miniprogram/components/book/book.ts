// components/errorImage/errorImage.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    src:{
      type:String,
    },
    name:{
      type:String
    },
    add:{
      type:Boolean,
      value:false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    success:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    loadError(){
      this.setData({
        success:!this.data.success
      })
    },
    handle(){
      this.triggerEvent('book',{name:this.properties.name})
    }
  }
})