<template>
  <div class="aside">
    <!-- <el-container style="height: 500px; border: 1px solid #eee"> -->
    <el-aside width="200px">
      <!-- default-active="2"默认打开 -->
      <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <!-- 需要打开就el-submenu 如果index等于一样的，那就是打开一个就会全部都打开了 item.title相当于循环渲染每一个index-->
        <!-- 导航列表，key属性用于for循环渲染时性能优化，index属性必须设置不一样的值，这样才能在点击的时候，所以的才能不展开 -->
            <!--                            item in menuList 循环遍历数组 -->
        <el-submenu :index="item.title" v-for="item in menuList" :key="item.title">
          <!-- 循环每一项item（项）的item.title -->
          <!-- 导航title菜单 -->
          <template slot="title">
            <i class="el-icon-message"></i>{{item.title}}</template>
          <el-menu-item-group>
            <!--??可以注释掉？-->
            <!-- <el-menu-item index="1-2">
              <i class="el-icon-document"></i>类别管理</el-menu-item>   item是列表  写成下面的方式自动生成-->
            <el-menu-item :index="subItem.title" v-for="subItem in item.children" :key="subItem.title">
              <i class="el-icon-document"></i>
              <!-- 每个title都是一个a链接，可以点击，所以使用router-link，要配合使用to属性 -->
              <router-link :to="subItem.path">{{subItem.title}}</router-link>
            </el-menu-item>

          </el-menu-item-group>
        </el-submenu>

      </el-menu>
    </el-aside>
    <!-- </el-container> -->
  </div>
</template>

<script>
export default {
  // {title:'前端技术'},
  data() {
    return {
      menuList: [
        {
          title: "学生问题",
          children: [
            { title: "类别管理", path: "/admin/goods/list" },//这里面是指每一个title标题里面包含 - 子 title列表
            { title: "内容管理", path: "/admin/goods/category" },
            { title: "评论管理管理", path: "/admin/goods/comment" }
          ]
        },
        {
          title: "前端技术",
          children: [
            { title: "类别管理", path: "/admin" },
            { title: "内容管理", path: "/admin" },
            { title: "评论管理管理", path: "/admin" }
          ]
        },
        {
          title: "重难点专区",
          children: [
            { title: "类别管理", path: "/" },
            { title: "内容管理", path: "/" },
            { title: "评论管理管理", path: "/" }
          ]
        },
        {
          title: "资源下载",
          children: [
            { title: "类别管理", path: "/" },
            { title: "内容管理", path: "/" },
            { title: "评论管理管理", path: "/" }
          ]
        },
        {
          title: "购物商场",
          children: [
            { title: "类别管理", path: "/" },
            { title: "内容管理", path: "/" },
            { title: "评论管理管理", path: "/" }
          ]
        },
        {
          title: "订单管理",
          children: [{ title: "类别管理", path: "/" }]
        }
      ]
    };
  }
};
</script>

<style scoped lang="less">
.aside {
  height: 100%;
  background-color: #545c64;
  text-align: left;
}

.el-aside {
  color: #333;
}
.el-menu {
  border-right: none;
}
//左侧信封图标
.el-submenu__title i{
  color: pink;
}
// 左侧分类图标
.el-icon-document{
  color: #fff;
}

</style>