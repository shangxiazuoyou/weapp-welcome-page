// pages/splash/splash.js
const app = getApp();
Page({
  data: {
    loading: true,
    photos: [
      {
        url: 'https://img.ivrfans.cn/thumb/m/mmimg/39/39903/39903_14.jpg'
      },
      {
        url: 'https://img.ivrfans.cn/thumb/m/mmimg/39/39903/39903_14.jpg'
      },
      {
        url: 'https://img.ivrfans.cn/thumb/m/mmimg/39/39903/39903_14.jpg'
      }
    ],
  },

  onLoad() {
    this.setData({ loading: false })
  },

  start() {
    wx.switchTab({ url: '../index/index' })
  }
})