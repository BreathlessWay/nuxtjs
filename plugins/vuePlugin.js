import Vue from 'vue'
import QRCode from './qrcode'

const MyPlugin = {}
MyPlugin.install = function (Vue, options) {
  // 1. 添加全局方法或属性
  Vue.myGlobalMethod = function () {
    // 逻辑...
  }
  // 2. 添加全局资源
  Vue.directive('sound', {
    bind (el, binding, vnode, oldVnode) {
      // 逻辑...
      const _sound = document.getElementById('hoverSound')
      window.$(el).mouseenter(() => {
        _sound.currentTime = 0
        _sound.play()
      })
    }
  })
  Vue.directive('lazy', {
    bind (el, binding, vnode, oldVnode) {
      // 逻辑...
      const realSrc = el.getAttribute('data-real-src')
      const img = document.createElement('img')
      img.onload = function () {
        el.src = realSrc
      }
      img.src = realSrc
    }
  })
  // 3. 注入组件
  Vue.mixin({
    created: function () {
      // 逻辑...
    }
  })
  // 4. 添加实例方法
  Vue.prototype.$loaclStorage = {

    getItem: function (key) {
      if (typeof localStorage === 'object') {
        try {
          return JSON.parse(localStorage.getItem(key))
        } catch (e) {
          alert('本站无痕浏览模式,请关闭后再试!')
        }
      }
    },
    setItem: function (key, value) {
      if (typeof localStorage === 'object') {
        try {
          return localStorage.setItem(key, JSON.stringify(value))
        } catch (e) {
          alert('请关闭[无痕浏览]模式后再试!')
        }
      }
    },
    removeItem: function (key) {
      if (typeof localStorage === 'object') {
        try {
          return localStorage.removeItem(key)
        } catch (e) {
          alert('请关闭[无痕浏览]模式后再试!')
        }
      }
    }
  }
  Vue.prototype.$qRCode = function (id, options) {
    new QRCode(document.getElementById(id), {
      correctLevel: QRCode.CorrectLevel.H,
      ...options
    })
  }
}
if (process.browser) {
  Vue.use(MyPlugin)
}
