<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="tagsList">
        <router-view :key="key"/>
      </keep-alive>
    </transition>
  </section>
</template>

<script>
import bus from '@/utils/bus.js'
export default {
  name: 'AppMain',
  data() {
    return {
      tagsList: [] // 需要被缓存数据的页面组件的name值
    }
  },
  computed: {
    key() {
      return this.$route.fullPath
    }
  },
  created() {
    // 监听标签栏的标签状态,改变keep-alive需要缓存的组件
    bus.$on('tags', msg => {
      let arr = []
      for (let i = 0, len = msg.length; i < len; i++) {
        msg[i].name && arr.push(msg[i].name)
      }
      this.tagsList = arr
    })
  }
}
</script>

<style scoped>
.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
.fixed-header + .app-main {
  padding-top: 84px;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
