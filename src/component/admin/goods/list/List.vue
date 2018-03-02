<template>
  <div>

    <!-- 面包屑导航 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">知识内容</el-breadcrumb-item>
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>内容管理</el-breadcrumb-item>
      <el-breadcrumb-item>书籍详情</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 按钮组，带搜索框 -->
    <section class="list_btns">
      <!-- plain是input中的调节颜色，可以让颜色变浅一点 -->
      <el-button type="info" plain icon="el-icon-plus" size="mini">新增</el-button>
      <el-button type="primary" plain icon="el-icon-check" size="mini">全选</el-button>
      <el-button type="danger" plain icon="el-icon-delete" size="mini">删除</el-button>
      <el-input placeholder="请输入内容" size="mini" prefix-icon="el-icon-search">
      </el-input>
    </section>

    <!-- 大表格 -->
    <!-- 分页 -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.list_btns {
  margin-top: 20px;
  border: 1px solid #85caf8;
  padding:10px;
  border-radius: 10px;
}
.list_btns .el-input {
  width: 200px;
  float: right;
}
</style>