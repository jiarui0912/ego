<template>

  <div class="block">
    <el-pagination layout="total,prev, pager, next,jumper" :total="total" background :page-size="pageSize"
      @current-change='currentHandle'>
    </el-pagination>

  </div>
</template>

<script>
export default {
  data () {
    return {
      page: 1
    }
  },
  props: {
    total: {
      type: Number,
      default: 100
    },
    pageSize: {
      type: Number,
      default: 10
    }
  },
  methods: {
    currentHandle (val) {
      this.$emit('getPage', val)
    }
  }
}
</script>

<style lang="less" scoped>
</style>