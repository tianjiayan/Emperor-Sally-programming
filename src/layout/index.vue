<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <AppHeader></AppHeader>
      </el-header>
      <el-container>
        <el-aside width="240px">
          <AppAside></AppAside>
        </el-aside>
        <el-main>
          <AppMain></AppMain>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import AppHeader from './AppHeader/index.vue'
import AppAside from './AppAside/index.vue'
import AppMain from './AppMain/index.vue'
</script>

<style lang="scss" scoped>
.common-layout {
  height: 100%;
  .el-container {
    height: 100%;
  }
}
.el-header {
  background-color: #4338ca;
}
.el-aside {
  background-color: white;
  height: 100%;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
}
</style>
