// pages/page-turning/page-turning.js
const app = getApp()
Page({
  data: {
    windowWidth: app.globalData.windowWidth, //单位px
    windowHeight: app.globalData.windowHeight, //单位px
    diff: 500, //动态相差px
    rotate: 30, //deg
    imageList: [
      '', //第一张不显示，设置为空
      'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=245190225,1716648655&fm=15&gp=0.jpg',
      'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2843648397,449561635&fm=15&gp=0.jpg',
      'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3504358836,4101764899&fm=26&gp=0.jpg',
    ],
    currentPage: 1,
    turnPage: 0,
  },
  onLoad: function(options) {

  },
  bindTurn(touchX) {
    const that = this
    const clientX = touchX

    if (clientX > that.data.windowWidth / 2) {
      that.turnNext()
    } else {
      that.turnPre()
    }
  },
  //下一页
  turnNext() {
    const that = this
    if (that.data.currentPage == that.data.imageList.length - 1) {
      wx.showToast({
        title: '当前是最后一页',
        icon: 'none'
      })
    } else {
      that.setData({
        turnPage: that.data.turnPage + 1,
      })
      setTimeout(() => {
        that.setData({
          currentPage: that.data.currentPage + 1,
        })
      }, 1000)
    }
  },
  turnPre() {
    const that = this
    if (that.data.currentPage == 1) {
      wx.showToast({
        title: '当前是第一页',
        icon: 'none'
      })
    } else {
      that.setData({
        currentPage: that.data.currentPage - 1,
      })
      setTimeout(() => {
        that.setData({
          turnPage: that.data.turnPage - 1,
        })
      }, 500)
    }
  },
  touchStart: function (e) {
    this.data.touchDot = e.touches[0].pageX; // 获取触摸时的原点

    console.log("touchStart")
  },
  touchEnd: function (e) {
    console.log("touchEnd", e)
    var that = this;
    var touchMove = e.changedTouches[0].pageX;
    // 向左滑动 
    if (touchMove - this.data.touchDot <= -40) {　　　　 //执行切换页面的方法
      console.log("向左滑动");
      that.turnNext()

    }
    // 向右滑动 
    else if (touchMove - this.data.touchDot >= 40) {
      console.log("向右滑动");
      that.turnPre()

    } else {
      that.bindTurn(touchMove)
    }
  }
})