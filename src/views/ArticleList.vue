<template>
  <div class="articleList">
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>文章管理</el-breadcrumb-item>
      <el-breadcrumb-item>文章列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 表格 -->
    <el-table :data="articleList" style="width: 100%" border>
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column prop="title" label="标题" width="180"></el-table-column>
      <el-table-column prop="create_date" label="日期" width="180">
        <template slot-scope="scope">{{scope.row.create_date | dateFormat}}</template>
      </el-table-column>
      <el-table-column prop="type" label="类型" width="180">
        <template slot-scope="scope">{{scope.row.type===1?'文章':'视频'}}</template>
      </el-table-column>
      <el-table-column prop="user.nickname" label="作者"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <!-- 给按钮添加提示文字 -->
          <!-- 编辑 -->
          <el-tooltip class="item" effect="dark" content="编辑" placement="top-start">
            <el-button type="primary" icon="el-icon-edit" @click="edit(scope.row)"></el-button>
          </el-tooltip>
          <!-- 分享 -->
          <el-tooltip class="item" effect="dark" content="分享" placement="top-start">
            <el-button type="success" icon="el-icon-share"></el-button>
          </el-tooltip>
          <!-- 删除 -->
          <el-tooltip class="item" effect="dark" content="删除" placement="top-start">
            <el-button type="warning" icon="el-icon-delete"></el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageIndex"
        :page-sizes="[2, 4, 6, 8]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>

  </div>
</template>

<script>
// 引入api方法
import { articleList } from '@/api/article.js'
import { dateFormat } from '@/utils/myfilters.js'

export default {
  data () {
    return {
      articleList: [],
      pageIndex: 0,
      pageSize: 0,
      total: 0
    }
  },
  filters: {
    dateFormat
  },
  mounted () {
    this.init()
  },
  methods: {
    async init () {
      //   发送请求，获取数据
      let res = await articleList({
        pageIndex: this.pageIndex,
        pageSize: this.pageSize
      })
      if (res.status === 200) {
        this.articleList = res.data.data
      }
      this.total = res.data.total
      console.log(res)
    },
    edit (row) {
      console.log(row)
    },
    handleSizeChange (val) {
      // ${val}---第几页
      console.log(`每页 ${val} 条`)
      this.pageSize = val
      this.init()
    },
    handleCurrentChange (val) {
      // ${val}---每页显示多少条数据
      console.log(`当前页: ${val}`)
      this.pageIndex = val
      this.init()
    }
  }
}
</script>

<style lang="less" scoped>
.articleList {
  padding: 0 50px;
}
</style>
