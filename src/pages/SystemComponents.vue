<template>
  <div class="system-components-page">
    <h1>系统组件</h1>
    
    <section class="core-mcp-components">
      <h2>核心MCP组件</h2>
      <div class="components-grid">
        <el-card shadow="hover" class="component-card">
          <template #header>
            <div class="card-header">
              <span>文献数据库MCP</span>
            </div>
          </template>
          <ul>
            <li><strong>ArXiv论文小助手MCP</strong>：实时追踪最新论文</li>
            <li><strong>PubMed搜索MCP</strong>：医学文献专业检索</li>
            <li><strong>本地知识库MCP</strong>：管理个人论文和笔记</li>
          </ul>
        </el-card>
        
        <el-card shadow="hover" class="component-card">
          <template #header>
            <div class="card-header">
              <span>数据处理MCP</span>
            </div>
          </template>
          <ul>
            <li><strong>医学图像处理MCP</strong>：DICOM转换、窗宽窗位调整等</li>
            <li><strong>数据预处理MCP</strong>：数据清洗、增强和标准化</li>
          </ul>
        </el-card>
        
        <el-card shadow="hover" class="component-card">
          <template #header>
            <div class="card-header">
              <span>写作辅助MCP</span>
            </div>
          </template>
          <ul>
            <li><strong>语法检查MCP</strong>：学术英语语法和表达优化</li>
            <li><strong>引用管理MCP</strong>：自动生成和格式化参考文献</li>
          </ul>
        </el-card>
      </div>
    </section>
    
    <section class="professional-subagents">
      <h2>专业Subagents</h2>
      <div class="agents-grid">
        <el-card shadow="hover" class="agent-card">
          <template #header>
            <div class="card-header">
              <span>文献调研专家Agent</span>
            </div>
          </template>
          <ul>
            <li>负责文献检索和分析</li>
            <li>识别研究空白和创新点</li>
            <li>生成文献综述报告</li>
          </ul>
        </el-card>
        
        <el-card shadow="hover" class="agent-card">
          <template #header>
            <div class="card-header">
              <span>可行性分析专家Agent</span>
            </div>
          </template>
          <ul>
            <li>评估研究方案的可行性</li>
            <li>分析技术路线的合理性</li>
            <li>提供资源需求评估</li>
          </ul>
        </el-card>
        
        <el-card shadow="hover" class="agent-card">
          <template #header>
            <div class="card-header">
              <span>数据处理专家Agent</span>
            </div>
          </template>
          <ul>
            <li>处理和分析实验数据</li>
            <li>生成图表和可视化内容</li>
            <li>执行统计分析</li>
          </ul>
        </el-card>
        
        <el-card shadow="hover" class="agent-card">
          <template #header>
            <div class="card-header">
              <span>论文撰写专家Agent</span>
            </div>
          </template>
          <ul>
            <li>构建论文框架</li>
            <li>撰写各部分内容</li>
            <li>确保学术写作规范</li>
          </ul>
        </el-card>
        
        <el-card shadow="hover" class="agent-card">
          <template #header>
            <div class="card-header">
              <span>格式优化专家Agent</span>
            </div>
          </template>
          <ul>
            <li>调整论文格式</li>
            <li>检查引用格式</li>
            <li>优化语言表达</li>
          </ul>
        </el-card>
        
        <el-card shadow="hover" class="agent-card">
          <template #header>
            <div class="card-header">
              <span>同行评审专家Agent</span>
            </div>
          </template>
          <ul>
            <li>模拟同行评审过程</li>
            <li>提供修改建议</li>
            <li>提升论文质量</li>
          </ul>
        </el-card>
      </div>
    </section>
    
    <section class="workflow">
      <h2>工作流程</h2>
      <div class="workflow-steps">
        <div class="workflow-item">
          <div class="workflow-number">1</div>
          <div class="workflow-content">
            <h3>研究准备阶段</h3>
            <p>包括文献调研、可行性分析和研究设计</p>
          </div>
        </div>
        
        <div class="workflow-arrow">→</div>
        
        <div class="workflow-item">
          <div class="workflow-number">2</div>
          <div class="workflow-content">
            <h3>数据处理阶段</h3>
            <p>包括数据获取、预处理和分析</p>
          </div>
        </div>
        
        <div class="workflow-arrow">→</div>
        
        <div class="workflow-item">
          <div class="workflow-number">3</div>
          <div class="workflow-content">
            <h3>论文撰写阶段</h3>
            <p>包括框架构建、内容撰写和图表插入</p>
          </div>
        </div>
        
        <div class="workflow-arrow">→</div>
        
        <div class="workflow-item">
          <div class="workflow-number">4</div>
          <div class="workflow-content">
            <h3>论文优化阶段</h3>
            <p>包括语言润色、格式调整和引用管理</p>
          </div>
        </div>
        
        <div class="workflow-arrow">→</div>
        
        <div class="workflow-item">
          <div class="workflow-number">5</div>
          <div class="workflow-content">
            <h3>质量控制阶段</h3>
            <p>包括同行评审、修改完善和最终检查</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.system-components-page {
  max-width: 1000px;
  margin: 0 auto;
}

section {
  margin-bottom: 40px;
}

.components-grid,
.agents-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.component-card,
.agent-card {
  transition: all 0.3s ease;
}

.component-card:hover,
.agent-card:hover {
  transform: translateY(-5px);
}

.card-header {
  font-weight: bold;
}

.workflow-steps {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
}

.workflow-item {
  flex: 1;
  min-width: 150px;
  background-color: #f5f7fa;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.workflow-number {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #409eff;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.workflow-content h3 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 16px;
}

.workflow-arrow {
  font-size: 24px;
  color: #409eff;
  font-weight: bold;
  margin: 0 10px;
}

@media (max-width: 768px) {
  .components-grid,
  .agents-grid {
    grid-template-columns: 1fr;
  }
  
  .workflow-steps {
    flex-direction: column;
    align-items: stretch;
  }
  
  .workflow-arrow {
    transform: rotate(90deg);
    margin: 10px 0;
  }
  
  .workflow-item {
    text-align: left;
    flex-direction: row;
    gap: 15px;
  }
  
  .workflow-number {
    margin-bottom: 0;
  }
}
</style>