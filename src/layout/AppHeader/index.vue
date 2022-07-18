<template>
  <div class="f-header">
    <span class="logo">
      <el-icon class="mr-1"><ElemeFilled /></el-icon>
      积云编程
    </span>
    <el-icon class="icon-btn"><Fold /></el-icon>
    <el-icon class="icon-btn"><Refresh /></el-icon>
    <div class="ml-auto">
      <el-tooltip
        class="box-item"
        effect="dark"
        content="全屏"
        placement="bottom"
      >
        <el-icon class="icon-btn" @click="toggleFullscreen"
          ><FullScreen
        /></el-icon>
      </el-tooltip>
      <el-avatar
        :size="25"
        :src="$store.getters.userInfo.avatar"
        class="avatar"
      />
      <div>
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link text-light-50">
            {{ $store.getters.userInfo.username }}
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="editPassword"
                >修改密码</el-dropdown-item
              >
              <el-dropdown-item command="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup>
import screenfull from 'screenfull'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useStore } from 'vuex'
const store = useStore()
const handleCommand = (command) => {
  switch (command) {
    case 'editPassword':
      handleEditPassword()
      break
    case 'logout':
      logout()
      break
  }
}

const handleEditPassword = () => {
  console.log('修改密码')
}
const logout = async () => {
  // console.log('退出登录')

  ElMessageBox.confirm('是否要退出登录?', 'Warning', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(async () => {
      await store.dispatch('user/logout')
      ElMessage({
        type: 'success',
        message: '退出登录成功'
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '取消退出'
      })
    })
}

const toggleFullscreen = () => {
  if (screenfull.isEnabled) {
    screenfull.toggle()
  }
}
</script>

<style lang="scss" scoped>
.avatar {
  margin: 0 10px 0 10px;
}
.ml-auto {
  margin-left: auto;
  display: flex;
  align-items: center;
}
.f-header {
  --tw-bg-opacity: 1;
  background-color: rgba(67, 56, 202, var(--tw-bg-opacity));
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  --tw-text-opacity: 1;
  color: rgba(253, 253, 253, var(--tw-text-opacity));
  height: 64px;
  z-index: 1000;
}
.text-light-50 {
  --tw-text-opacity: 1;
  color: rgba(253, 253, 253, var(--tw-text-opacity));
  cursor: pointer;
}
.f-header .dropdown {
  height: 64px;
  cursor: pointer;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  margin-left: 1.25rem;
  margin-right: 2.25rem;
}
.logo {
  width: 250px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  font-weight: 100;
  font-size: 1.25rem;
  line-height: 1.75rem;
}
.mr-1 {
  margin-right: 0.25rem;
}
.icon-btn {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  width: 42px;
  height: 64px;
  cursor: pointer;
}
</style>
