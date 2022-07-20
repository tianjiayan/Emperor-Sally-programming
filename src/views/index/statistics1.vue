<template>
  <div class="box">
    <el-row :gutter="20" style="margin-left: -10px; margin-right: -10px">
      <el-col :span="6" v-for="(item, index) in arr" :key="index"
        ><div class="grid-content ep-bg-purple">
          <el-card shadow="hover">
            <div class="el-card_header">
              <div class="flex justify-between">
                <span class="text-sm">{{ item.title }}</span>
                <el-tag class="ml-2" :type="item.unitColor">{{
                  item.unit
                }}</el-tag>
              </div>
              <el-divider id="divider" />
            </div>
            <div class="el-card_body">
              <span
                class="text-3x1 font-bold"
                style="font-size: 30px; color: #6b7280"
                >{{ item.value }}</span
              >
              <el-divider />
              <div class="flex justify-between text-sm text-gray-500">
                <span>{{ item.subTitle }}</span>
                <span>{{ item.subValue }}</span>
              </div>
            </div>
          </el-card>
        </div></el-col
      >
    </el-row>
  </div>
</template>

<script setup>
import { getStatistics1 } from '@/api/user'
import { ref } from 'vue'

const arr = ref()
const getlist = async () => {
  const response = await getStatistics1()
  console.log(response)
  arr.value = response.panels
}
getlist()
</script>

<style lang="scss" scoped>
#divider {
  margin-top: 10px;
  margin-bottom: 20px;
}
.el-divider--horizontal {
  display: block;
  height: 1px;
  width: 100%;
  margin: 24px 0;
  border-top: 1px var(--el-border-color) var(--el-border-style);
}
.text-3xl {
  font-size: 18, 75px;
  line-height: 2.25rem;
}
.justify-between {
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.font-bold {
  font-weight: 700;
}
.el-tag {
  --el-tag-bg-color: var(--el-fill-color-blank);
  --el-tag-border-color: var(--el-color-success-light-5);
  --el-tag-hover-color: var(--el-color-success);
}
.flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}
.el-card__body {
  padding: var(--el-card-padding);
}
.el-row {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  box-sizing: border-box;
}
.el-col-6 {
  max-width: 25%;
  flex: 0 0 25%;
  padding-right: 10px;
  padding-left: 10px;
}
.el-card {
  border-radius: var(--el-card-border-radius);
  border: 1px solid var(--el-card-border-color);
  background-color: var(--el-card-bg-color);
  overflow: hidden;
  color: var(--el-text-color-primary);
  transition: var(--el-transition-duration);
}
.el-card {
  --el-card-border-color: var(--el-border-color-light);
  --el-card-border-radius: 4px;
  --el-card-padding: 20px;
  --el-card-bg-color: var(--el-fill-color-blank);
}
.el-card__header {
  --tw-bg-opacity: 1;
  background-color: rgba(249, 250, 251, var(--tw-bg-opacity));
  background-color: #f9fafb;
  padding: 0.5rem !important;
}
</style>
