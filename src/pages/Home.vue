<template>
  <div class="home-page">
    <h1>欢迎使用学术论文写作系统</h1>
    
    <section class="overview">
      <h2>系统概述</h2>
      <p>本学术论文写作系统基于AI代理协作，集成了文献检索、可行性分析、数据处理、论文撰写、格式优化和同行评审等功能。系统由核心MCP组件、专业Subagents和完整的工作流程组成，旨在大幅提升论文写作效率和质量。</p>
    </section>
    
    <section class="core-features">
      <h2>核心功能</h2>
      <div class="features-grid">
        <el-card shadow="hover" class="feature-card">
          <template #header>
            <div class="card-header">
              <span>文献检索</span>
            </div>
          </template>
          <p>集成ArXiv、PubMed和本地知识库，提供高效的文献检索和分析功能。</p>
        </el-card>
        
        <el-card shadow="hover" class="feature-card">
          <template #header>
            <div class="card-header">
              <span>数据处理</span>
            </div>
          </template>
          <p>支持医学图像处理、数据预处理和统计分析，生成高质量的图表和可视化内容。</p>
        </el-card>
        
        <el-card shadow="hover" class="feature-card">
          <template #header>
            <div class="card-header">
              <span>论文撰写</span>
            </div>
          </template>
          <p>AI辅助构建论文框架、撰写内容、插入图表，确保学术写作规范。</p>
        </el-card>
        
        <el-card shadow="hover" class="feature-card">
          <template #header>
            <div class="card-header">
              <span>格式优化</span>
            </div>
          </template>
          <p>自动调整论文格式、检查引用格式、优化学术表达，符合目标期刊要求。</p>
        </el-card>
        
        <el-card shadow="hover" class="feature-card">
          <template #header>
            <div class="card-header">
              <span>同行评审</span>
            </div>
          </template>
          <p>模拟同行评审过程，提供专业的修改建议，提升论文质量和发表几率。</p>
        </el-card>
        
        <el-card shadow="hover" class="feature-card">
          <template #header>
            <div class="card-header">
              <span>工作流程</span>
            </div>
          </template>
          <p>完整的论文写作工作流程，从研究准备到质量控制，系统化管理写作过程。</p>
        </el-card>
      </div>
    </section>
    
    <section class="quick-start">
      <h2>快速开始</h2>
      <div class="quick-start-steps">
        <div class="step-item">
          <div class="step-number">1</div>
          <div class="step-content">
            <h3>系统配置</h3>
            <p>按照系统配置指南，安装依赖并配置MCP服务器。</p>
            <el-button type="primary" @click="$router.push('/system-configuration')">查看配置指南</el-button>
          </div>
        </div>
        
        <div class="step-item">
          <div class="step-number">2</div>
          <div class="step-content">
            <h3>了解系统组件</h3>
            <p>熟悉系统的核心MCP组件和专业Subagents。</p>
            <el-button type="primary" @click="$router.push('/system-components')">查看系统组件</el-button>
          </div>
        </div>
        
        <div class="step-item">
          <div class="step-number">3</div>
          <div class="step-content">
            <h3>学习使用指南</h3>
            <p>查看完整的使用示例，了解系统的工作流程。</p>
            <el-button type="primary" @click="$router.push('/usage-guide')">查看使用指南</el-button>
          </div>
        </div>
      </div>
    </section>
    
    <section class="expected-effects">
      <h2>预期效果</h2>
      <ul>
        <li><strong>时间效率提升</strong>：原本3个月的工作可缩短至1-2周</li>
        <li><strong>质量提升</strong>：通过AI代理协作和多次检查，提升论文质量</li>
        <li><strong>创新点明确</strong>：通过文献调研和可行性分析，确保研究的创新性</li>
        <li><strong>格式规范</strong>：符合目标期刊要求，减少格式修改时间</li>
        <li><strong>发表几率提高</strong>：通过模拟同行评审，提前发现和解决问题</li>
      </ul>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.home-page {
  max-width: 1000px;
  margin: 0 auto;
}

section {
  margin-bottom: 40px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.feature-card {
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.card-header {
  font-weight: bold;
}

.quick-start-steps {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 20px;
}

.step-item {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.step-number {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #409eff;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  flex-shrink: 0;
}

.step-content {
  flex: 1;
}

.step-content h3 {
  margin-top: 0;
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .step-item {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .step-number {
    margin-bottom: 10px;
  }
}
</style>