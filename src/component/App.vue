<template>
    <div>
        {{ val }}
        <!-- 根组件占位 -->
        <router-view></router-view>

        <span class="demonstration">区分颜色</span>
        <el-rate v-model="value2" :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
        </el-rate>
        <span class="demonstration">有默认值</span>
        <el-color-picker v-model="color1"></el-color-picker>
    </div>
</template>

<script>
export default {
  // 这是es6中对象定义方法的语法
  data() {
    return {
      val: "vue脚手架测试",
      value2: null,//五角星
     color1: '#409EFF',//   颜色
    };
  }
};
</script>

<style scoped>

</style>
