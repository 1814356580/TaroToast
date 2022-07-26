import { Block, View } from '@tarojs/components'
import React from 'react'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import Toast from '../../components/toast/toast'
import './index.scss'


@withWeapp({
  /**
   * 页面的初始数据
   */
  data: {},
  bindToast() {
    this.toast.showToast('这是toast...')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    //this.toast = this.selectComponent('#toast')
	this.toast = Taro.getCurrentInstance().page.selectComponent('#toast')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
})
class _C extends React.Component {
  render() {
    return (
      <Block>
        <View className="container">
          <View className="btn" onClick={this.bindToast}>
            toast
          </View>
        </View>
        <Toast id="toast"></Toast>
      </Block>
    )
  }
} // pages/index/index.js

export default _C
