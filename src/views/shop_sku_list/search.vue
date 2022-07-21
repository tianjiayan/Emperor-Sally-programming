<template>
  <div>
    <el-card>
      <div class="header">
        <div class="button">
          <el-button type="primary" size="small">新增</el-button>
          <el-button type="danger" size="small">批量删除</el-button>
        </div>
        <div class="icon">
          <el-tooltip
            class="box-item"
            effect="dark"
            content="刷新数据"
            placement="top"
          >
            <el-icon @click="handleRefresh"><Refresh /></el-icon>
          </el-tooltip>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue'
const emits = defineEmits(['handleRefresh'])
const handleRefresh = () => {
  emits('handleRefresh')
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
}
.icon {
  cursor: pointer;
}
</style>
