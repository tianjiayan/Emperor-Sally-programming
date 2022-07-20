<template>
  <div>
    <el-row :gutter="20" class="mt-5">
      <el-col class="is-guttered" :span="3" v-for="(item,index) in routerList" :key="index" >
        <el-card shadow="hover" class="is-hover-shadow">
          <div class="el-card_body">
            <div class="cursor-pointer" @click="$router.push(item.path)">
              <el-icon :color="item.color">
                <component :is="item.icon"></component>
              </el-icon>
              <span class="text-sm mt-2">{{item.title}}</span>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import routerList from './routerList'
</script>

<style lang="scss" scoped>
.mt-2 {
  margin-top: 0.5rem;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.cursor-pointer {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.text-light-blue-500 {
  --tw-text-opacity: 1;
  color: rgba(14, 165, 233, var(--tw-text-opacity));
  font-size: 16px;
}

.el-icon {
  --color: inherit;
  height: 1em;
  width: 1em;
  line-height: 1em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  fill: currentColor;
  font-size: inherit;
}
.el-card__body {
  padding: var(--el-card-padding);
}
.el-row {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  box-sizing: border-box;
  margin-bottom: 20px;
}
.mt-5 {
  margin-top: 1.25rem;
}
[class*='el-col-'].is-guttered {
  display: block;
  min-height: 1px;
}
.el-col-3 {
  max-width: 12.5%;
  flex: 0 0 12.5%;
}

.el-card {
  --el-card-border-color: var(--el-border-color-light);
  --el-card-border-radius: 4px;
  --el-card-padding: 20px;
  --el-card-bg-color: var(--el-fill-color-blank);
}
.el-card {
  border-radius: var(--el-card-border-radius);
  border: 1px solid var(--el-card-border-color);
  background-color: var(--el-card-bg-color);
  overflow: hidden;
  color: var(--el-text-color-primary);
  transition: var(--el-transition-duration);
}
</style>
