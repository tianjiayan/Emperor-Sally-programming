<template>
  <el-pagination
    :total="total"
    background
    layout="prev, pager, next"
    @current-change="handleCurrentChange"
  />
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
defineProps({
  total: Number
})
const emits = defineEmits(['handleCurrentChange'])
const handleCurrentChange = (val) => {
  emits('handleCurrentChange', val)
}
</script>

<style lang="scss" scoped></style>
