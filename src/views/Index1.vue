<template>
  <div class="home">
    <!-- 左侧导航栏 -->
    <div class="navMenu">
      <el-row class="tac">
        <el-col :span="3">
            <h1>黑马头条</h1>
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"

            >
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>用户管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">
                    <i class="el-icon-menu"></i>
                    选项1
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>

              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>文章管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="2-1">
                    <i class="el-icon-menu"></i>
                    文章列表
                  </el-menu-item>
                  <el-menu-item index="2-2">
                    <i class="el-icon-menu"></i>
                    文章发布
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>

              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>文章管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="3-1">
                    <i class="el-icon-menu"></i>
                    栏目列表
                  </el-menu-item>
                  <el-menu-item index="3-2">
                    <i class="el-icon-menu"></i>
                    修改栏目
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
        </el-col>
      </el-row>
    </div>
    <div class="title">
        2323
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="less" scoped>
.navMenu{

    .tac h1 {
    width: 100%;
    font-size: 25px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: #545c64;
    color: #fff;
    }
    .el-menu-vertical-demo {
    height: 850px;
    }
}
</style>
