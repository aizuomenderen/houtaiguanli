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
      <el-button type="primary" plain icon="el-icon-check" size="mini" @click="all">全选</el-button>
      <el-button type="danger" plain icon="el-icon-delete" @click="del" size="mini">删除</el-button>
      <el-input placeholder="请输入内容" size="mini" prefix-icon="el-icon-search" v-model="apiQuery.searchvalue" @blur="search">
      </el-input>
    </section>

    <!-- 大表格 -->
    <template>
      <el-table @selection-change="change" ref="multipleTable" :data="tableData3" style="width: 100%">
        <!-- 多选框 -->
        <el-table-column type="selection" width="55">
        </el-table-column>

        <el-table-column label="标题">
          <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
              <router-link :to="{ path:`/admin/goods/detail/${scope.row.id}` }"> {{ scope.row.title }}</router-link>
              <div slot="content">
                <img :src="scope.row.imgurl" alt="详细图片" style="width:160px">
              </div>
            </el-tooltip>

          </template>
        </el-table-column>
        <el-table-column prop="categoryname" label="所属类别" width="100">
        </el-table-column>
        <el-table-column prop="stock_quantity" width="100" label="库存" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="market_price" width="100" label="市场价" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="sell_price" width="100" label="销售价" show-overflow-tooltip>
        </el-table-column>

        <el-table-column label="属性" width="100" show-overflow-tooltip>
          <template slot-scope="scope">
            <!-- 图标变色 -->
            <!-- 使用三元表达式来判断从后台获取回来的数据是不是更新变色  scope.row.is_slide和这个is_top和is_hot是从后台获取数据-->
            <span :class="['el-icon-picture-outline',scope.row.is_slide==1?'active':'']"></span>
            <span :class="['el-icon-star-off',scope.row.is_top==1?'active':'']"></span>
            <span :class="['el-icon-circle-check-outline',scope.row.is_hot==1?'active':'']"></span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="80" show-overflow-tooltip>
          <template slot-scope="scope">
            <router-link :to="{path:`/admin/goods/detail/${scope.row.id}`}"> 修改</router-link>
          </template>
        </el-table-column>
      </el-table>
    </template>
    <!-- 分页       total用来设定数据总的条数，current-page用来设定当前页，page-size用来设定当前每页的数量 -->
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="apiQuery.pageIndex" :page-sizes="[5, 10, 15, 20]" :page-size="apiQuery.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="apiQuery.total">
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      apiQuery: {
        //搜索
        pageIndex: 1,
        pageSize: 5,
        searchvalue: "",
        total: 0
      },
      selectedGoodsList: [], //被选中的商品数据
      tableData3: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      multipleSelection: []
    };
  },

  methods: {
    search() {
      //搜索
      this.getGoodsData();
    },
    getGoodsData() {
      let api = `${this.$api.gsList}?pageIndex=${
        this.apiQuery.pageIndex
      }&pageSize=${this.apiQuery.pageSize}&searchvalue=${
        this.apiQuery.searchvalue
      }`;

      this.$http.get(api).then(res => {
        if (res.data.status == 0) {
          this.tableData3 = res.data.message; // 把请求回来的数据覆盖原data数量, 表格就会自动刷新
          this.apiQuery.total = res.data.totalcount;
        }
      });
    },
    change(selection) {
      this.selectedGoodsList = selection; //监听多选框状态的变化，参数可以拿到被选商品的数据
    },
    del() {
      //删除
      let delIDS = this.selectedGoodsList.map(v => v.id); //提取所有被选商品的id
      this.$http.get(this.$api.gsDel + delIDS).then(res => {
        if (res.data.status == 0) {
          //删除数据之后重新进行数据渲染
          this.getGoodsData();
        }
      });
    },
    all() {
      //全选按钮
      document.querySelector(".el-checkbox__original").click(); //是两个下划线
    },
    handleSizeChange(size) {//括号里面的size是要带上的，否则没有定义，报错
      //监听每页数量
      this.apiQuery.pageSize = size; // 接收到新的每页数量, 赋值给data里的数量, 分页组件就会刷新视图
      this.getGoodsData(); // 除了分页组件视图要变更, 表格也要重新获取数据渲染
    },
    handleCurrentChange(page) {
      //监听页码
      this.apiQuery.pageIndex = page; // 接收到新的页面, 赋值给data里的数量, 分页组件就会刷新视图
      this.getGoodsData();
    }
  },
  created() {
    //生命周期，当组件初始化完毕，
    this.getGoodsData(); // // 页面一上来就自动调用接口获取表格数据进行展示
  }
};
</script>

<style scoped lang="less">
.list_btns {
  margin-top: 20px;
  border: 1px solid #85caf8;
  padding: 10px;
  border-radius: 10px;
}
// .el-input 能使用.标签名是因为渲染到页面的时候，控制台的时候会把标签渲染成类。所以.标签名有效果
.list_btns .el-input {
  width: 200px;
  float: right;
}
[class^="el-icon"].active {
  //设置图标变色，让选中的图标根据后台数据相对应的渲染
  color: #85caf8;
  font-weight: bold;
}
</style>