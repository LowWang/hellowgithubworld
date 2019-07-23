Page({
  data: {
    commentlist: [
      {
        id:1,
        image:"",
        name: "哈哈",
        content: "真的很垃圾",
        createtime:"07-18 15:25",
        goodnum:2,
        commentnum:2,
        fristcomment:{
          name: "哈哈",
          content: "真的很垃圾",
        },
      },
      {
        id: 1,
        image: "",
        name: "哈哈",
        content: "真的很垃圾",
        createtime: "07-18 15:25",
        goodnum: 2,
        commentnum: 2,
        fristcomment: {
          name: "哈哈",
          content: "真的很垃圾",
        },
      },
      {
        id: 1,
        image: "",
        name: "哈哈",
        content: "真的很垃圾",
        createtime: "07-18 15:25",
        goodnum: 2,
        commentnum: 2,
        fristcomment: {
          name: "哈哈",
          content: "真的很垃圾",
        },
      }
    ],
    isshow:false,

    boderstatus:0,


  },
  onLoad: function (options) {

  },

  // 弹出框
  upanimation: function (e) {
    this.setData({
      isshow: true,
      boderstatus: 1,
    })
   
  },
  hideanimation: function () {
    this.setData({
      isshow: false,
      boderstatus: 2,
    })

  },
  // 弹出框

  moreclick:function(){
    wx.navigateTo({
      url: '../content/content',  //跳转页面的路径，可带参数 ？隔开，不同参数用 & 分隔；相对路径，不需要.wxml后缀
      // success: function() { }        //成功后的回调；
      // fail：function() { }          //失败后的回调；
      // complete：function() { }      //结束后的回调(成功，失败都会执行)
  })
  }





})