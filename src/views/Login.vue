<template>
  <div class="login">
    <div class="container">
      <img src="../assets/avatar.jpg" alt="" class="avatar">
      <el-form :model="loginForm" :rules="loginRules" ref="loginForm" class="demo-ruleForm">
          <el-form-item  prop="username" >
              <el-input v-model="loginForm.username" placeholder="请输入用户名" clearable prefix-icon="el-icon-user"></el-input>
          </el-form-item>
          <el-form-item  prop="password">
              <el-input v-model="loginForm.password" type="password" placeholder="请输入密码" clearable prefix-icon="el-icon-lock"
></el-input>
          </el-form-item>
          <el-form-item>
              <el-button type="primary" class="login-btn" @click="login" :plain="true" offset=200>登录</el-button>
          </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// 引入api
import { userLogin } from '@/api/users.js'
export default {
  data () {
    return {
      loginForm: {
        username: '10086',
        password: '123'
      },
      loginRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 11, message: '长度在 3 到 11个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 16, message: '请输入3-16位的密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      // 表达那的二次验证
      this.$refs.loginForm.validate(async valid => {
        if (valid) {
          // console.log('验证通过，可以去发送请求了')
          // 调用api,发送请求
          let res = await userLogin(this.loginForm)
          if (res.data.message === '登录成功') {
            //  存储用户的token，作为导航守卫的token
            window.localStorage.setItem('dailyNews_back_user', res.data.data.token)
            // 跳转页面
            this.$router.push({ path: `/index/${res.data.data.user.id}` })
          } else if (res.data.message === '用户不存在') {
            // 给出提示，默认弹出三秒
            this.$message.error(res.data.message)
          }
        } else {
          // 给出提示
          this.$message.error('输入数据不合法')
          return false
        }
      })
    }
  }
}
</script>

<style lang='less' scoped>
.login {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #2f4050;
  .container {
    position: absolute;
    width: 500px;
    height: 350px;
    padding: 0px 40px 15px 40px;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background: white;
    .avatar {
      position: relative;
      left: 50%;
      width: 120px;
      height: 120px;
      margin-left: -60px;
      margin-top: -60px;
      box-sizing: border-box;
      border-radius: 50%;
      border: 10px solid #fff;
      box-shadow: 0 1px 5px #ccc;
      overflow: hidden;
    }
    .login-btn {
      width: 100%;
    }
   /deep/.el-input__prefix{
      font-size: 16px;
    }
  }
}
</style>
