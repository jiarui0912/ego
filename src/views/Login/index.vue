<template>
  <div class="login">

    <div class="tab">
      <el-tabs v-model="activeName" type="card">
        <!-- 登录 -->
        <el-tab-pane label="登录" name="first">
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="60px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="checkUser">
              <el-input type="text" v-model="ruleForm.checkUser" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="checkPass">
              <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>

        <!-- 注册 -->
        <el-tab-pane label="注册" name="second">注册</el-tab-pane>
      </el-tabs>
    </div>

  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import jwt from 'jwt-decode'
export default {

  data () {
    var validateUser = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'));
      } else {
        // if (this.ruleForm.checkUser !== '') {
        //   this.$refs.ruleForm.validateField('checkUser');
        // }
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    return {
      activeName: "first",
      ruleForm: {
        checkUser: '',
        checkPass: '',
      },
      rules: {
        checkUser: [
          { validator: validateUser, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass, trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    ...mapMutations('loginModule', ['setUser']),
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('登录', this.ruleForm);
          let temp = {
            username: this.ruleForm.checkUser,
            password: this.ruleForm.checkPass
          }
          this.$api.login(temp).then(res => {
            console.log(res);
            if (res.data.status === 200) {
              console.log(jwt(res.data.data));
              let user = {
                user: jwt(res.data.data).username,
                token: res.data.data
              }
              // 存储到vuex
              this.setUser(user);
              // 存储到本地
              localStorage.setItem('user', JSON.stringify(user));
              // 跳转页面
              this.$router.replace('/')
            } else {
              alert('账号或密码错误');
            }
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style lang="less">
.login {
  overflow: hidden;
  height: 100%;
  background-color: #304156;
  // background-image: url("../../assets/images/login.jpg");
  background-size: 100% 100%;
  .tab {
    height: 300px;
    margin: 0 auto;
    margin-top: 200px;
    width: 400px;
    background-color: #fff;
    padding: 20px 30px;
    border-radius: 5px;
    color: #fff;
    .is-active {
      color: #304156 !important;
    }
    .el-tabs__item {
      color: #999;
    }
    .el-tabs__item:hover {
      color: #304156;
      cursor: pointer;
    }
    .el-button--primary {
      color: #ffffff;
      background-color: #304156;
      border-color: #304156;
    }
  }
}
</style>