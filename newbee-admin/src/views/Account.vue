<!--
 * @Author: GZH
 * @Date: 2021-08-26 11:04:33
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-26 11:06:04
 * @FilePath: \Vite-demo\newbee-admin\src\views\Account.vue
 * @Description: 
-->
<template>
  <div>
    <el-card class="account-container">
      <el-form
        :model="nameForm"
        :rules="rules"
        ref="nameRef"
        label-width="80px"
        label-position="right"
        class="demo-ruleForm"
      >
        <el-form-item label="登录名：" prop="loginName">
          <el-input style="width: 200px" v-model="nameForm.loginName"></el-input>
        </el-form-item>
        <el-form-item label="昵称：" prop="nickName">
          <el-input style="width: 200px" v-model="nameForm.nickName"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="danger" @click="submitName">确认修改</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card class="account-container">
      <el-form
        :model="passForm"
        :rules="rules"
        ref="passRef"
        label-width="80px"
        label-position="right"
        class="demo-ruleForm"
      >
        <el-form-item label="原密码：" prop="oldpass">
          <el-input style="width: 200px" v-model="passForm.oldpass"></el-input>
        </el-form-item>
        <el-form-item label="新密码：" prop="newpass">
          <el-input style="width: 200px" v-model="passForm.newpass"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="danger" @click="submitPass">确认修改</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { onMounted, reactive, ref, toRefs } from 'vue';
import axios from '@/utils/axios';
import { ElMessage, ElCard, ElForm, ElFormItem, ElInput, ElButton } from 'element-plus';
import md5 from 'js-md5';
export default {
  name: 'Account',
  components: { ElCard, ElForm, ElFormItem, ElInput, ElButton },
  setup() {
    const nameRef = ref(null); // 修改名称 ref
    const passRef = ref(null); // 修改密码 ref
    const state = reactive({
      user: null,
      nameForm: {
        loginName: '',
        nickName: '',
      },
      passForm: {
        oldpass: '',
        newpass: '',
      },
      // 验证配置对象
      rules: {
        loginName: [{ required: 'true', message: '登录名不能为空', trigger: ['change'] }],
        nickName: [{ required: 'true', message: '昵称不能为空', trigger: ['change'] }],
        oldpass: [{ required: 'true', message: '原密码不能为空', trigger: ['change'] }],
        newpass: [{ required: 'true', message: '新密码不能为空', trigger: ['change'] }],
      },
    });
    // 初始化钩子
    onMounted(() => {
      // 获取用户信息
      axios.get('/adminUser/profile').then(res => {
        state.user = res;
        state.nameForm.loginName = res.loginUserName;
        state.nameForm.nickName = res.nickName;
      });
    });
    // 提交昵称登录名修改
    const submitName = () => {
      nameRef.value.validate(vaild => {
        if (vaild) {
          axios
            .put('/adminUser/name', {
              loginUserName: state.nameForm.loginName,
              nickName: state.nameForm.nickName,
            })
            .then(() => {
              ElMessage.success('修改成功');
              window.location.reload();
            });
        }
      });
    };
    // 提交密码修改
    const submitPass = () => {
      passRef.value.validate(vaild => {
        if (vaild) {
          axios
            .put('/adminUser/password', {
              originalPassword: md5(state.passForm.oldpass),
              newPassword: md5(state.passForm.newpass),
            })
            .then(() => {
              ElMessage.success('修改成功');
              window.location.reload();
            });
        }
      });
    };
    return {
      ...toRefs(state),
      nameRef,
      passRef,
      submitName,
      submitPass,
    };
  },
};
</script>
