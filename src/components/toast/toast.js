import { Block, View } from '@tarojs/components'
import React from 'react'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import './toast.scss'

@withWeapp({
  /**
   * 组件的属性列表
   */
  properties: {
    animationData: {
      type: Object,
      value: {}
    },
    content: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 显示toast，定义动画
     */
    showToast(val, time = 1500) {
      if (val === undefined || val === null || val === '') {
        return
      }
      var animation = Taro.createAnimation({
        duration: 300,
        timingFunction: 'ease'
      })
      this.animation = animation
      animation.opacity(1).step()
      this.setData({
        animationData: animation.export(),
        content: val,
        isShow: true
      })
      /**
       * 延时消失
       */
      setTimeout(
        function() {
          animation.opacity(0).step()
          this.setData({
            animationData: animation.export(),
            isShow: false
          })
        }.bind(this),
        time
      )
    }
  }
})
class _C extends React.Component {
  render() {
    const { animationData, content, isShow } = this.data
    return (
      isShow && (
        <View className="wx-toast-box" animation={animationData}>
          <View className="wx-toast-content">
            <View className="wx-toast-toast">{content}</View>
          </View>
        </View>
      )
    )
  }
} // component/toast/toast.js

export default _C
