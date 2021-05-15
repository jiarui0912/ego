<template>

  <!-- 修改商品信息，element对话框组件 -->
  <el-dialog title="提示" :visible.sync="dialogVisible" width="70%">
    <!-- 表单 -->
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="选择类目">
        <el-dialog width="50%" title="类目选择" :visible.sync="innerVisible" append-to-body>
          <Tree @GetCategory="GetCategory" />
          <span slot="footer" class="dialog-footer">
            <el-button @click="innerVisible = false">取 消</el-button>
            <el-button type="primary" @click="innerVisible = false">确 定</el-button>
          </span>
        </el-dialog>
        <el-button type="primary" @click="innerVisible = true">类目选择</el-button>
        &nbsp;&nbsp;&nbsp;
        <span>{{category}}</span>
      </el-form-item>
      <el-form-item label="商品名称" prop="title">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>
      <el-form-item label="商品价格" prop="price">
        <el-input v-model="ruleForm.price"></el-input>
      </el-form-item>
      <el-form-item label="商品数量" prop="num">
        <el-input v-model="ruleForm.num"></el-input>
      </el-form-item>
      <el-form-item label="商品卖点" prop="sellPoint">
        <el-input v-model="ruleForm.sellPoint"></el-input>
      </el-form-item>
      <el-form-item label="商品图片">
        <el-button type="primary">上传图片</el-button>
      </el-form-item>
      <el-form-item label="商品描述" prop="descs">

        <quill-editor ref="myTextEditor" v-model="content" :options="editorOption" style="height:300px;width:100%"
          @change="onEditorChange($event)">
        </quill-editor>

      </el-form-item>

    </el-form>
    <!-- 取消和确定按钮 -->
    <div class="bottom">
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </div>

  </el-dialog>

</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'
export default {
  components: {
    quillEditor,
    Tree: () => import('./Tree')
  },
  data () {
    return {
      dialogVisible: false,
      innerVisible: false,
      category: '',
      ruleForm: {
        title: '',
        price: '',
        num: '',
        sellPoint: '',
        descs: '',
      },
      content: '',
      editorOption: {
        placeholder: '编辑文章内容'
      },
      rules: {
        title: [
          { required: true, message: '请输入商品名称', trigger: 'blur' },
        ],
        price: [
          { required: true, message: '请输入商品价格', trigger: 'blur' },
        ],
        num: [
          { required: true, message: '请输入商品数量', trigger: 'blur' },
        ],
      }
    }
  },
  methods: {
    onEditorChange ({ editor, html, text }) {
      this.content = html;
      console.log(editor, html, text);
    },
    GetCategory (val) {
      this.category = val
    }
  }
}
</script>

<style lang="less" scoped>
quill-editor {
  margin-bottom: 50px;
}
.bottom {
  margin-top: 130px;
  text-align: right;
}
</style>