<template>
  <div>
    <el-menu
      class="el-menu-vertical-demo"
      default-active="2"
      unique-opened="true"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>后台面板</span>
        </template>
        <el-menu-item index="1-1">主控台</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>商品管理</span>
        </template>
        <el-menu-item index="1-2">主控台</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><location /></el-icon>
          <span>用户管理</span>
        </template>
        <el-menu-item index="1-1">主控台</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>
          <el-icon><location /></el-icon>
          <span>订单管理</span>
        </template>
        <el-menu-item index="1-1">主控台</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="4">
        <template #title>
          <el-icon><location /></el-icon>
          <span>管理员管理</span>
        </template>
        <el-menu-item index="1-1">主控台</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="5">
        <template #title>
          <el-icon><location /></el-icon>
          <span>系统设置</span>
        </template>
        <el-menu-item index="1-1">主控台</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="6">
        <template #title>
          <el-icon><location /></el-icon>
          <span>分销模块</span>
        </template>
        <el-menu-item index="1-1">主控台</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="7">
        <template #title>
          <el-icon><location /></el-icon>
          <span>其他模块</span>
        </template>
        <el-menu-item index="1-1">主控台</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.el-menu-vertical-demo {
  border-right: 0;
}
</style>
