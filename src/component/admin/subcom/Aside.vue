<template>
  <div class="aside">
    <!-- <el-container style="height: 500px; border: 1px solid #eee"> -->
    <el-aside width="200px">
      <!-- <el-menu :default-openeds="['1', '3']"> -->
      <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <!-- 需要打开就el-submenu 如果index等于一样的，那就是打开一个就会全部都打开了-->
        <el-submenu index="1">
          <!-- 导航title -->
          <template slot="title">
            <i class="el-icon-message"></i>学员问题汇总</template>
          <el-menu-item-group> <!--??可以注释掉？-->
            <el-menu-item index="1-1">
              <i class="el-icon-document"></i>
              内容管理</el-menu-item>
            <el-menu-item index="1-2">
              <i class="el-icon-document"></i>类别管理</el-menu-item>
            <el-menu-item index="1-3">
              <i class="el-icon-document"></i>评论管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-message"></i>前端常用功能</template>
          <el-menu-item-group>
            <!-- <template slot="title">分组一</template> -->
            <el-menu-item index="2-1">内容管理</el-menu-item>
            <el-menu-item index="2-2">类别管理</el-menu-item>
            <el-menu-item index="2-3">评论管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-message"></i>重难点专区</template>
          <el-menu-item-group>
            <!-- <template slot="title">分组一</template> -->
            <el-menu-item index="3-1">内容管理</el-menu-item>
            <el-menu-item index="3-2">类别管理</el-menu-item>
            <el-menu-item index="3-3">评论管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-message"></i>资源下载</template>
          <el-menu-item-group>
            <!-- <template slot="title">分组一</template> -->
            <el-menu-item index="4-1">内容管理</el-menu-item>
            <el-menu-item index="4-2">类别管理</el-menu-item>
            <el-menu-item index="4-3">评论管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <!-- </el-container> -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.aside {
  height: 100%;
  background-color: #545c64;
  text-align: center;
}

.el-aside {
  color: #333;
}
.el-menu {
  border-right: none;
}
</style>