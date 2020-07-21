// pages/index/index.js
var app = getApp()
Page({
  data: {

    navItems: [
      {
        name: '我的课程',
        url: 'course',
      },
    
      {
        name: '我的笔记',
        url: 'note',
      },
      
      {
        name: '我的打卡',
        url: 'todo',
        isSplot: true
      }
      
    ]

    
  },
  onLoad: function () {
    console.log('onLoad')
  }

})