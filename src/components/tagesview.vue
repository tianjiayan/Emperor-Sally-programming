<template>
  <div class="box">
    <el-tabs
      :model-value="tabsName"
      type="card"
      editable
      class="demo-tabs"
      @tab-remove="handleCloseTags"
      @tab-click="changeView"
    >
      <el-tab-pane
        v-for="(item, i) in tags"
        :key="i"
        :closable="item.path !== '/index'"
        :label="item.title"
        :name="item.path"
      >
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const store = useStore()
const route = useRoute()
const tags = computed(() => {
  return store.getters.tagsview
})

// 默认选中
const tabsName = computed(() => {
  return route.path
})

// 监听路由信息
watch(
  route,
  (val) => {
    if (!val.meta.title) return
    const tags = {
      path: val.path,
      title: val.meta.title
    }
    store.commit('tagesview/setTags', tags)
  },
  {
    immediate: true,
    deep: true
  }
)
// 删除tags
const handleCloseTags = (name) => {
  let path = ''
  const tags = store.getters.tagsview
  // 获取下标
  const index = tags.findIndex((item) => item.path === name)
  // 先跳转
  if (index !== tags.length - 1) {
    path = tags[index + 1].path
  } else {
    path = tags[index - 1].path
  }
  router.push(path)
  store.commit('tagesview/delTags', index)
}

// 页面跳转
const changeView = ({ props: { name } }) => {
  router.push(name)
}

// let tabIndex = 2
// const editableTabsValue = ref('2')
// const editableTabs = store.getters.tagsView

// const handleTabsEdit = (targetName, action) => {
//   if (action === 'add') {
//     const newTabName = `${++tabIndex}`
//     editableTabs.value.push({
//       title: 'New Tab',
//       name: newTabName,
//       content: 'New Tab content'
//     })
//     editableTabsValue.value = newTabName
//   } else if (action === 'remove') {
//     const tabs = editableTabs.value
//     let activeName = editableTabsValue.value
//     if (activeName === targetName) {
//       tabs.forEach((tab, index) => {
//         if (tab.name === targetName) {
//           const nextTab = tabs[index + 1] || tabs[index - 1]
//           if (nextTab) {
//             activeName = nextTab.name
//           }
//         }
//       })
//     }

//     editableTabsValue.value = activeName
//     editableTabs.value = tabs.filter((tab) => tab.name !== targetName)
//   }
// }
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  position: fixed;
  height: 44px;
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
::v-deep .el-tabs__item {
  background-color: white;
  margin: 0 5px;
  border-radius: 5px;
  height: 30px;
  line-height: 30px;
}
</style>
