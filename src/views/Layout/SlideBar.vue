<template>
  <div class="leftNav slideBar">

    <div class="button" :class="{'button-left':flag}">
      <i class="el-icon-chat-dot-square" @click="changMenu" v-if='flag'></i>
      <i class="el-icon-chat-line-square" @click="changMenu" v-else></i>
    </div>

    <el-menu :default-active="$route.path" class="el-menu-vertical-demo" background-color="#304156" text-color="#fff"
      :collapse="flag" active-text-color="#3388ff" router>
      <el-menu-item>
        <span slot="title">易购后台管理系统</span>
      </el-menu-item>
      <el-menu-item index="/goods">
        <i class="el-icon-menu"></i>
        <span slot="title">商品管理</span>
      </el-menu-item>
      <el-menu-item index="/params">
        <i class="el-icon-tickets"></i>
        <span slot="title">规格参数</span>
      </el-menu-item>
      <el-menu-item index="/advert">
        <i class="el-icon-setting"></i>
        <span slot="title">广告分类</span>
      </el-menu-item>
      <el-menu-item index="/center">
        <i class="el-icon-user"></i>
        <span slot="title">个人中心</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      flag: false
    }
  },
  methods: {
    changMenu () {
      this.flag = !this.flag
      this.$emit('change', this.flag)
    }
  }

}
</script>

<style lang="less" scoped>
.el-menu {
  border-right: 0;
}
.button {
  position: absolute;
  left: 205px;
  line-height: 50px;
  font-size: 30px;
  transition: all 0.7s;
}
.leftNav {
  height: 100%;
  background-color: #545c64;
  el-menu-item {
    height: 50px;
    line-height: 50px;
  }
}
.switch {
  position: absolute;
  left: 200px;
}
.switch1 {
  position: absolute;
  left: 65px;
}
.button-left {
  left: 70px;
}
.is-active {
  background-color: #1f2d3d !important;
}
</style>