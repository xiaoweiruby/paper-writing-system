<template>
  <div class="main-layout">
    <!-- 顶部导航栏 -->
    <header class="header">
      <div class="header-content">
        <div class="logo">
          <h1>学术论文写作系统</h1>
        </div>
        <div class="header-right">
          <el-input
            v-model="searchQuery"
            placeholder="搜索..."
            prefix-icon="el-icon-search"
            class="search-input"
            @keyup.enter="handleSearch"
          />
          <el-button type="primary" @click="handleSearch">搜索</el-button>
        </div>
      </div>
    </header>
    
    <!-- 主体内容 -->
    <div class="main-content">
      <!-- 侧边栏 -->
      <aside class="sidebar">
        <el-menu
          default-active="/"
          class="sidebar-menu"
          router
          :default-openeds="['/']"
        >
          <el-menu-item index="/">
            <template #title>
              <span>首页</span>
            </template>
          </el-menu-item>
          <el-sub-menu index="/system">
            <template #title>
              <span>系统介绍</span>
            </template>
            <el-menu-item index="/system-components">系统组件</el-menu-item>
            <el-menu-item index="/system-configuration">系统配置</el-menu-item>
          </el-sub-menu>
          <el-menu-item index="/usage-guide">
            <template #title>
              <span>使用指南</span>
            </template>
          </el-menu-item>
          <el-menu-item index="/troubleshooting">
            <template #title>
              <span>故障排除</span>
            </template>
          </el-menu-item>
        </el-menu>
      </aside>
      
      <!-- 内容区域 -->
      <main class="content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const searchQuery = ref('')

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    router.push({ path: '/search', query: { q: searchQuery.value } })
  }
}
</script>

<style scoped>
.main-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 0 20px;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  max-width: 1200px;
  margin: 0 auto;
}

.logo h1 {
  font-size: 20px;
  margin: 0;
  color: #333;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 10px;
}

.search-input {
  width: 300px;
}

.main-content {
  display: flex;
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 20px;
  gap: 20px;
}

.sidebar {
  width: 200px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  flex-shrink: 0;
}

.sidebar-menu {
  border: none;
}

.content {
  flex: 1;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  overflow-y: auto;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .main-content {
    flex-direction: column;
    padding: 10px;
  }
  
  .sidebar {
    width: 100%;
    margin-bottom: 20px;
  }
  
  .header-content {
    padding: 0 10px;
  }
  
  .logo h1 {
    font-size: 16px;
  }
  
  .search-input {
    width: 200px;
  }
}
</style>