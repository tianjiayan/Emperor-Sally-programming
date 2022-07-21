<template>
  <div>
    <search @handleRefresh="handleRefresh"></search>
    <el-table ref="multipleTableRef" :data="skuList" style="width: 100%">
      <el-table-column type="selection" width="55" />
      <el-table-column label="规格名称" prop="name"> </el-table-column>
      <el-table-column label="规格值" prop="default"> </el-table-column>
      <el-table-column label="排序" prop="order"> </el-table-column>
      <el-table-column label="状态" prop="status"> </el-table-column>
      <el-table-column
        label="操作"
        class="el-table_1_column_6 is-center is-leaf el-table__cell"
      >
        <a href="#">修改</a>
        <a href="#">删除</a>
      </el-table-column>
    </el-table>
    <div class="pageination-container">
      <span></span>
      <myPageinationVue
        :total="total"
        @handleCurrentChange="handleCurrentChange"
      ></myPageinationVue>
    </div>
  </div>
</template>

<script setup>
import myPageinationVue from '@/components/myPageination.vue'
import search from './search'
import { ref } from 'vue'
import goods from '@/api/goods'
const skuList = ref([])
const total = ref()
const currentPage = ref(1)
const getData = async () => {
  const response = await goods.skusList(currentPage.value)
  console.log(response)
  skuList.value = response.list
  total.value = response.totalCount
}
getData()

const handleCurrentChange = (val) => {
  currentPage.value = val
  getData()
}
const handleRefresh = async () => {
  await getData()
}
</script>

<style lang="scss" scoped>
.pageination-container {
  width: 100%;
  margin-top: 10px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-table .el-table__cell.is-center {
  text-align: center;
}
a {
  margin-right: 10px;
}
</style>
