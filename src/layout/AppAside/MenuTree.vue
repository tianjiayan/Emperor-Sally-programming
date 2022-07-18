<template>
  <el-sub-menu v-if="item.children && item.children.length > 0" :index="i + ''">
    <template #title>
      <el-icon>
        <component :is="item.icon"></component>
      </el-icon>
      <span>{{ item.title }}</span>
    </template>
    <MenuTree
      v-for="(item, i) in item.children"
      :key="i"
      :i="i"
      :item="item"
    ></MenuTree>
  </el-sub-menu>
  <el-menu-item
    v-if="!item.children || item.children.length <= 0"
    :index="item.path"
  >
    <el-icon>
      <component :is="item.icon"></component>
    </el-icon>
    <span>{{ item.title }}</span>
  </el-menu-item>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  item: {
    type: Object,
    default: () => ({})
  },
  i: Number
})
</script>

<style lang="scss" scoped></style>
