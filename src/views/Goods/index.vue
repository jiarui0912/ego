<template>
  <div>
    <!-- 搜索框 -->
    <div class="search">
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <el-button type="primary" @click="search">搜索</el-button>
      <el-button type="primary" @click="addGoods">添加</el-button>
    </div>
    <!-- 添加商品弹框 -->
    <Update ref="setDialog" />
    <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%" stripe>
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column prop="id" label="商品ID" width="180" height='100' show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="title" label="商品名称" width="180" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="price" label="商品价格">
      </el-table-column>
      <el-table-column prop="num" label="商品数量">
      </el-table-column>
      <el-table-column prop="category" label="规格类目" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="image" label="商品图片" show-overflow-tooltip>
        <!-- <img :src="tableData[3].image" alt=""> -->
        <!-- {{tableData[3].image}} -->
      </el-table-column>
      <el-table-column prop="sellPoint" label="商品卖点" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="descs" label="商品描述" show-overflow-tooltip>
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="pagi">
      <Pagination :total="total" :pageSize="pageSize" @getPage="getPage" />
    </div>

  </div>
</template>

<script>
import Pagination from '../../components/Pagination'
export default {
  components: {
    Pagination,
    Update: () => import('../../components/Update')
  },
  data () {
    return {
      tableData: [],
      total: 0,
      pageSize: 0,
      page: 1,
      input: ''
    }
  },
  // 初始状态请求第一页
  created () {
    this.http(1)
  },
  // 点击分页请求数据
  methods: {
    getPage (val) {
      // console.log(val);
      this.page = val
      // 点击分页请求数据
      this.http(val);
    },
    // 网络请求
    http (page) {
      this.$api.goodsList({ page }).then(res => {
        // console.log(res.data);
        this.tableData = res.data.data
        this.total = Number(res.data.total)
        this.pageSize = Number(res.data.pageSize)
        // console.log(this.total, this.pageSize);
      })
    },
    // 搜索
    search () {
      // console.log(this.input);
      if (this.input) {
        this.$api.search({ search: this.input }).then(res => {
          if (res.status === 200) {
            // console.log(res.data);
            this.tableData = res.data.result;
            this.pageSize = 8;
            this.total = this.tableData.length
          }
        })
      } else {
        this.http(1);
      }
    },
    // 添加商品
    addGoods () {
      this.$refs.setDialog.dialogVisible = true
    },
    // 编辑删除按钮事件
    handleEdit (index, row) {
      console.log(index, row);
    },
    handleDelete (index, row) {
      console.log(index, row);
      this.$api.delete({ id: row.id }).then(res => {
        // console.log(res);
        if (res.data.status === 200) {
          // console.log('删除成功');
          // 删除数组中数据
          this.tableData.splice(index, 1);
        }
      }).catch(error => {
        console.log(error);
      })
    }
  }
}
</script>

<style lang="less">
.search {
  padding: 10px;
  display: flex;
  button {
    margin-left: 10px;
  }
}
.el-table td {
  font-size: 14px;
  height: 70px;
}
.pagi {
  margin-top: 10px;
  text-align: center;
}
</style>