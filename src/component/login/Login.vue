<template>
  <div class="login">
    <section>
      <el-form :model="ruleForm2" status-icon :rules="rules2" label-position="top" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <el-form-item label="账号" prop="uname">
          <el-input type="text" v-model="ruleForm2.uname" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="upwd">
          <el-input type="password" v-model="ruleForm2.upwd" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" @click="submitForm('ruleForm2')">提交</el-button>
          <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>

<script>
 export default {
    data() {
      // var validatePass2 = (rule, value, callback) => {//模板样式
      //   if (value === '') {
      //     callback(new Error('请再次输入密码'));
      //   } else if (value !== this.ruleForm2.pass) {
      //     callback(new Error('两次输入密码不一致!'));
      //   } else {
      //     callback();
      //   }
      // };
      return {
        ruleForm2: {
          uname: '',
          upwd: '',
       
        },
        rules2: {
          uname: [
            { required:true, message: "请输入用户名", trigger: 'blur' }
          ],
          upwd: [
            { required:true, message: "请输入密码", trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      login(){
        this.$http.post(this.$api.login,this.ruleForm2).then((res)=>{
          if(res.data.status==0){
            this.$alert('登录成功');
            this.$alert('登录成功', '提示内容', {//第一个参数是文本内容，第二个是标题，第三个是配置对象
              confirmButtonText: '确定',
          callback: ()=> {
          this.$router.push({name:'admin'});
          }
        });
          }else{
            this.$alert(res.data.message);
          }
        });
      },


    



      submitForm(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            this.login();
          } else {
            this.$alert('账号或密码错误');
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped lang="less">//这个是用less预编译器来编写代码
.login{
  height: 100%;
  background-color: rgb(250, 215, 218);
}
section{
padding: 5px;
padding-left: 15px;
width: 400px;
height: 300px;
margin: 0 auto;
position: relative;
top:50%;
transform: translateY(-50%);
border-radius: 10px;
border: 1px solid rgb(46, 37, 39);
}
</style>