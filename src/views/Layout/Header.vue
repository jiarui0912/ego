<template>
  <div>
    <div class="header-right">
      <span>切换语言
        <i class="el-icon-arrow-down"></i>
      </span>
      <span>hello {{$store.state.loginModule.userInfo.user}}</span>
      <span @click="exit">
        <i class="el-icon-switch-button"></i>
      </span>
    </div>

  </div>
</template>

<script>
export default {
  methods: {
    exit () {
      localStorage.removeItem('user');
      window.location.reload();
      this.$router.replace('/login')
    }
  }

}
</script>

<style lang="less" scoped>
.header-right {
  float: right;
  color: #fff;
  line-height: 50px;
  font-size: 14px;
  padding-right: 10px;
  cursor: pointer;
  span {
    padding: 0 10px;
  }
}
</style>