<template>
  <div class="search-page">
    <h1>搜索结果</h1>
    
    <div class="search-input-container">
      <el-input
        v-model="searchQuery"
        placeholder="搜索..."
        prefix-icon="el-icon-search"
        class="search-input"
        @keyup.enter="handleSearch"
      />
      <el-button type="primary" @click="handleSearch">搜索</el-button>
    </div>
    
    <div class="search-results" v-if="searchQuery">
      <div class="results-header">
        <h2>找到 {{ filteredResults.length }} 条相关结果</h2>
      </div>
      
      <div class="results-list" v-if="filteredResults.length > 0">
        <el-card
          v-for="result in filteredResults"
          :key="result.id"
          shadow="hover"
          class="result-card"
          @click="navigateToResult(result)"
        >
          <template #header>
            <div class="result-title">{{ result.title }}</div>
          </template>
          <div class="result-content">
            <p v-html="highlightText(result.content, searchQuery)"></p>
          </div>
          <div class="result-meta">
            <span class="result-type">{{ result.type }}</span>
          </div>
        </el-card>
      </div>
      
      <div class="no-results" v-else>
        <el-empty description="没有找到相关结果" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const searchQuery = ref('')

// 模拟搜索数据
const searchData = [
  {
    id: 1,
    title: '系统概述',
    content: '本学术论文写作系统基于AI代理协作，集成了文献检索、可行性分析、数据处理、论文撰写、格式优化和同行评审等功能。',
    type: '首页',
    path: '/'
  },
  {
    id: 2,
    title: '核心MCP组件',
    content: '核心MCP组件包括文献数据库MCP、数据处理MCP和写作辅助MCP。',
    type: '系统组件',
    path: '/system-components'
  },
  {
    id: 3,
    title: '专业Subagents',
    content: '专业Subagents包括文献调研专家Agent、可行性分析专家Agent、数据处理专家Agent、论文撰写专家Agent、格式优化专家Agent和同行评审专家Agent。',
    type: '系统组件',
    path: '/system-components'
  },
  {
    id: 4,
    title: '环境要求',
    content: '系统要求Python 3.8+、Node.js 16+、uv (Python包管理器)和npx (Node.js包执行工具)。',
    type: '系统配置',
    path: '/system-configuration'
  },
  {
    id: 5,
    title: 'MCP配置',
    content: 'MCP配置包括安装依赖、配置MCP服务器和启动MCP服务器三个步骤。',
    type: '系统配置',
    path: '/system-configuration'
  },
  {
    id: 6,
    title: '完整使用示例',
    content: '以肺结节检测论文写作为例，展示了从研究准备到质量控制的完整流程。',
    type: '使用指南',
    path: '/usage-guide'
  },
  {
    id: 7,
    title: '系统集成最佳实践',
    content: '包括合理规划工作流程、有效使用AI代理、质量控制、资源管理和持续改进。',
    type: '使用指南',
    path: '/usage-guide'
  },
  {
    id: 8,
    title: 'MCP服务器连接问题',
    content: '常见问题包括无法连接到MCP服务器，解决方案包括检查服务器状态、验证配置和检查网络连接。',
    type: '故障排除',
    path: '/troubleshooting'
  },
  {
    id: 9,
    title: 'Agent响应问题',
    content: '常见问题包括Agent没有响应或响应超时，解决方案包括检查配置文件、验证输入格式和检查依赖。',
    type: '故障排除',
    path: '/troubleshooting'
  }
]

const filteredResults = computed(() => {
  if (!searchQuery.value) return []
  const query = searchQuery.value.toLowerCase()
  return searchData.filter(item => 
    item.title.toLowerCase().includes(query) || 
    item.content.toLowerCase().includes(query) ||
    item.type.toLowerCase().includes(query)
  )
})

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    // 搜索逻辑已在computed中实现
  }
}

const navigateToResult = (result) => {
  router.push(result.path)
}

const highlightText = (text, query) => {
  if (!query) return text
  const regex = new RegExp(`(${query})`, 'gi')
  return text.replace(regex, '<span class="highlight">$1</span>')
}

onMounted(() => {
  // 从URL参数获取搜索关键词
  if (route.query.q) {
    searchQuery.value = route.query.q
  }
})
</script>

<style scoped>
.search-page {
  max-width: 1000px;
  margin: 0 auto;
}

.search-input-container {
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
}

.search-input {
  width: 400px;
}

.search-results {
  margin-top: 20px;
}

.results-header {
  margin-bottom: 20px;
}

.results-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.result-card {
  cursor: pointer;
  transition: all 0.3s ease;
}

.result-card:hover {
  transform: translateY(-5px);
}

.result-title {
  font-weight: bold;
  font-size: 18px;
}

.result-content {
  margin: 10px 0;
}

.result-meta {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}

.result-type {
  background-color: #e5e7eb;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  color: #4b5563;
}

.highlight {
  background-color: #fef3c7;
  color: #92400e;
  padding: 2px 4px;
  border-radius: 3px;
}

.no-results {
  text-align: center;
  padding: 50px 0;
}

@media (max-width: 768px) {
  .search-input {
    width: 100%;
  }
  
  .search-input-container {
    flex-direction: column;
  }
}
</style>