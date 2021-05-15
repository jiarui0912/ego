<template>
  <el-tree :props="props" :load="loadNode" lazy @node-click='clickHandle'>
  </el-tree>
</template>

<script>
export default {
  data () {
    return {
      props: {
        label: 'name',
        children: 'zones',
        isLeaf: 'leaf'
      }
    }
  },
  methods: {
    loadNode (node, resolve) {
      // console.log(node);
      if (node.level === 0) {
        this.$api.selectItemCategory().then(res => {
          // console.log(res.data.result);
          return resolve(res.data.result);
        })
      }
      if (node.level >= 1) {
        this.$api.selectItemCategory({ id: node.data.cid }).then(res => {
          // console.log(res.data);
          if (res.data.status === 200) {
            return resolve(res.data.result);
          } else {
            return resolve([]);
          }

        })
      }
    },
    clickHandle (data) {
      this.$emit('GetCategory', data.name)
    }
  },
}
</script>

<style lang="less" scoped>
</style>