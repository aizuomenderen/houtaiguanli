<template>
  <div class="admin">
    <el-container>
      <!-- 头部 -->
      <el-header>
        <app-header></app-header>
      </el-header>
      <!-- 左侧导航 -->
      <el-container class="admin_content">
        <el-aside width="200px">
          <app-aside></app-aside>
        </el-aside>
        <!-- 变化的后台管理    -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// 引入公共的左侧与头部
import Header from "./subcom/Header.vue";
import Aside from "./subcom/Aside.vue";
export default {
  // 注册子组件
  components: {
    appHeader: Header,
    appAside: Aside
  }
};
</script>
<style scoped lang="less">
.admin{
  height: 100%;
}
.el-header {
    color: #b3c6f0;
    line-height: 60px;
  }
  .el-container{
    height: 100%;
    // background-color: #D3DCE6;
  }
  .el-main {
    // background-color: #a9c8ec;
    color: #333;
  }

</style>