<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <AppHeader></AppHeader>
      </el-header>
      <el-container>
        <el-aside :width="isCollapse ? '64px' : '250px'">
          <AppAside></AppAside>
        </el-aside>
        <el-main>
          <tagesview></tagesview>
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
import tagesview from '../components/tagesview.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'
const store = useStore()
const isCollapse = computed(() => {
  return store.getters.isCollapse
})
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
  transition: al 0.4s;
}
.el-main {
  padding-top:0 ;
  background-color: #e9eef3;
  color: #333;
}
</style>
