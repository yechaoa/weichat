var app = getApp()
Page({
    request: function () {
        wx.request({
            url: 'http://192.168...', //仅为示例，并非真实的接口地址
            data: {
                x: '',
                y: ''
            },
            header: {
                'Content-Type': 'application/json'
            },
            success: function (res) {
                console.log(res.data)
                wx.showToast({
                    title: '请求成功',
                    icon: 'success',
                    duration: 1000
                })
            }
        })
    },
})