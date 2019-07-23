
Page({
  data: {
    inputVal: "",
    lists: [
      "湿垃圾", "干垃圾", "可回收物", "有害垃圾"
    ],
    indexId: 0,
    currentlist: [
      {
        name: "瓜子",
        classify: "湿垃圾",
        torf:false,
        answer:"",
      },
      {
        name: "纸巾",
        classify: "干垃圾",
        torf: false,
        answer: "",
      },
      {
        name: "小壮",
        classify: "真垃圾",
        torf: false,
        answer: "",
      }
    ],
    currenttitle:"",
    currentnum:1,
    questionshow:0,//问题显示隐藏
    result:0,


  },
  onLoad: function (options) {
    var currenttitle = this.data.currentlist[0].name;
    this.setData({
      currenttitle:currenttitle,
    })
  },
  nextquestion:function(e){
    var that=this;
    var currentnum = that.data.currentnum;
    var currentclassify = e.currentTarget.dataset.classify;
    var current = "currentlist[" + (currentnum - 1) + "].torf";
    if (that.data.currentlist[currentnum-1].classify == currentclassify){
      var result = that.data.result + 10;
      that.setData({
        result: result,
        [current]:true,
        answer: currentclassify
      })
    }else{
      that.setData({
        [current]: false,
        answer: currentclassify
      })
    }
    if (currentnum<3){
      console.log(currentnum+"haha");
      var currenttitle = that.data.currentlist[currentnum].name;
      that.setData({
        currenttitle: currenttitle,
        currentnum: currentnum+1
      })
    }else{
      console.log(currentnum + "haha");
      that.setData({
        questionshow:1
      })
    }
  },
  again:function(){
    var currenttitle = this.data.currentlist[0].name;
    this.setData({
      currenttitle: currenttitle,
      currentnum: 1,
      questionshow: 0,
      result: 0,
    })
  }







})