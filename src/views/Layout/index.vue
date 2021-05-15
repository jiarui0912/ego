<template>
  <div>
    <!-- 左侧导航 -->
    <SlideBar @change="change" :class="{'slideBar-width':flag}" />
    <!-- 顶部导航 -->
    <Header class="header" :class="{'header-left':flag}" />
    <!-- 内容 -->
    <Content class="content" :class="{'header-left':flag}" />
  </div>
</template>

<script>
import SlideBar from './SlideBar'
import Header from './Header'
import Content from './Content'
export default {
  components: {
    SlideBar,
    Header,
    Content
  },
  data () {
    return {
      flag: false
    }
  },
  methods: {
    change (aa) {
      // console.log(aa);
      this.flag = aa
    }
  }

}
</script>

<style lang="less" scoped>
.slideBar {
  height: 100%;
  width: 200px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #304156;
  color: #fff;
  transition: all 0.6s;
}
.slideBar-width {
  width: 65px;
}
.header {
  height: 50px;
  border-bottom: 1px solid #eee;
  line-height: 50px;
  background-color: #1e78bf;
  margin-left: 200px;
  transition: all 0.6s;
}
.content {
  margin-left: 200px;
  transition: all 0.6s;
}
.header-left {
  margin-left: 65px;
}
</style>