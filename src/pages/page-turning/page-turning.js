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
      'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3294683064,1020587522&fm=26&gp=0.jpg',
      'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=309563235,1645727097&fm=26&gp=0.jpg',
      'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2651627281,3056935767&fm=26&gp=0.jpg',
      'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1731302165,2444560272&fm=26&gp=0.jpg',
    ],
    currentPage: 1,
    turnPage: 0,
  },
  onLoad: function(options) {

  },
  bindTurn(e) {
    const that = this
    const clientX = e.touches[0].clientX

    if (clientX > that.data.windowWidth / 2) {
      that.setData({
        turnPage: that.data.turnPage + 1,
      })
      setTimeout(() => {
        that.setData({
          currentPage: that.data.currentPage + 1,
        })
      }, 1000)
    }else{
      that.setData({
        currentPage: that.data.currentPage - 1,
      })
      setTimeout(() => {
        that.setData({
          turnPage: that.data.turnPage - 1,
        })
      }, 500)
    }
  }
})