<!--
 * @Author: GZH
 * @Date: 2021-08-23 09:20:35
 * @LastEditors: GZH
 * @LastEditTime: 2021-09-06 10:28:01
 * @FilePath: \Vite-demo\newbee-admin\src\views\Login.vue
 * @Description: 
-->
<template>
  <div class="login-body">
    <div>
      <!-- <h2>camear</h2>
      <input type="file" accept="image/*" capture="camera" @change="getImgfn" ref="InputFile" />
      <br /> -->
      <!-- <h2>camcorder</h2>
      <input type="file" accept="video/*" capture="camcorder" />
      <br />
      <h2>microphone</h2>
      <input type="file" accept="audio/*" capture="microphone" /> -->
    </div>
    <!--登录框div-->
    <div class="login-container">
      <div class="head">
        <img class="logo" src="https://s.weituibao.com/1582958061265/mlogo.png" />
        <div class="name">
          <div class="title">新蜂商城</div>
          <div class="tips">Vue3.0 后台管理系统</div>
        </div>
      </div>

      <el-form label-position="top" :rules="rules" :model="ruleForm" ref="loginForm" class="login-form">
        <el-form-item label="账号" prop="username">
          <el-input type="text" v-model.trim="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model.trim="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <div style="color: #333">
            登录表示您已同意
            <a>《服务条款》</a>
          </div>
          <div style="color: #333">账号: admin; 密码: 123456</div>
          <el-button style="width: 100%" type="primary" @click="submitForm">立即登录</el-button>
          <el-checkbox v-model="checked" @change="!checked">下次自动登录</el-checkbox>
        </el-form-item>
      </el-form>
    </div>

    <!-- <img :src="imgUrl" /> -->
  </div>
</template>

<script>
import { ElForm, ElFormItem, ElInput, ElButton, ElCheckbox } from 'element-plus';
import { reactive, ref, toRefs } from 'vue';
import { localSet } from '@/utils';
import md5 from 'js-md5';
import axios from '@/utils/axios';

export default {
  name: 'login',
  components: {
    ElForm,
    ElFormItem,
    ElInput,
    ElButton,
    ElCheckbox,
  },
  setup() {
    const loginForm = ref(null);
    const state = reactive({
      ruleForm: {
        username: 'admin', // 账号
        password: '123456', // 密码
      },
      checked: true,
      // 表单验证判断。
      rules: {
        username: [{ required: 'true', message: '账户不能为空', trigger: 'blur' }],
        password: [{ required: 'true', message: '密码不能为空', trigger: 'blur' }],
      },
    });

    // 表单提交方法
    const submitForm = async () => {
      loginForm.value.validate(valid => {
        // valid 是一个布尔值，表示表单是否通过了上面 rules 的规则。
        if (valid) {
          // /adminUser/login 登录接口路径
          axios
            .post('/adminUser/login', {
              userName: state.ruleForm.username || '',
              passwordMd5: md5(state.ruleForm.password), // 密码需要 md5 加密
            })
            .then(res => {
              // 返回的时候会有一个 token，这个令牌就是我们后续去请求别的接口时要带上的，否则会报错，非管理员。
              // 这里我们将其存储到 localStorage 里面。
              localSet('token', res);
              // 此处登录完成之后，需要刷新页面
              window.location.href = '/';
            });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    };
    // 重制方法
    const resetForm = () => {
      // loginForm能拿到 el-form 的重制方法
      loginForm.value.resetFields();
    };

    const InputFile = ref(null);
    const imgUrl = ref(null);
    const getImgfn = () => {
      console.log(InputFile.value.files);
      const filePath = InputFile.value.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(filePath);
      reader.onload = function (e) {
        console.log(this.result);
        imgUrl.value = this.result;
      };
    };
    return {
      ...toRefs(state),
      loginForm, // 注意，一定要返回 loginForm
      submitForm,
      resetForm,
      getImgfn,
      InputFile,
      imgUrl,
    };
  },
};
</script>

<style scoped>
.login-body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #fff;
}
.login-container {
  width: 420px;
  height: 500px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 21px 41px 0px rgba(0, 0, 0, 0.2);
}
.head {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0 20px 0;
}
.head img {
  width: 100px;
  height: 100px;
  margin-right: 20px;
}
.head .title {
  font-size: 28px;
  color: #1baeae;
  font-weight: bold;
}
.head .tips {
  font-size: 12px;
  color: #999;
}
.login-form {
  width: 70%;
  margin: 0 auto;
}
.login-form >>> .el-form--label-top .el-form-item__label {
  padding: 0;
}
.login-form >>> .el-form-item {
  margin-bottom: 0;
}
</style>
