<template>
  <div class="system-configuration-page" v-highlight>
    <h1>系统配置</h1>
    
    <section class="environment-requirements clickable-section" @click="toggleTip('environment-requirements')">
      <h2>环境要求</h2>
      <ul>
        <li><strong>Python 3.8+</strong></li>
        <li><strong>Node.js 16+</strong></li>
        <li><strong>uv (Python包管理器)</strong></li>
        <li><strong>npx (Node.js包执行工具)</strong></li>
      </ul>
      <div v-if="expandedTip === 'environment-requirements'" class="tip-content">
        {{ tips['environment-requirements'] }}
      </div>
    </section>
    
    <section class="mcp-configuration">
      <h2>MCP配置</h2>
      
      <h3>步骤1：安装依赖</h3>
      <pre @click="toggleTip('install-dependencies')" class="clickable-code"><code class="language-bash"># 安装Python依赖
uv install

# 安装Node.js依赖
npm install -g @modelcontextprotocol/pubmed-server
npm install -g @modelcontextprotocol/filesystem-server</code></pre>
      <div v-if="expandedTip === 'install-dependencies'" class="tip-content">
        {{ tips['install-dependencies'] }}
      </div>
      
      <h3>步骤2：配置MCP服务器</h3>
      <p>编辑<code>~/.trae/settings.json</code>文件，添加以下MCP配置：</p>
      <pre @click="toggleTip('configure-mcp')" class="clickable-code"><code class="language-json">{
  "mcpServers": {
    "arxiv-mcp-server": {
      "command": "uv",
      "args": [
        "tool",
        "run",
        "arxiv-mcp-server",
        "--storage-path", "/path/to/paper/storage"
      ],
      "description": "实时追踪ArXiv最新论文"
    },
    "pubmed-search": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/pubmed-server"],
      "env": {
        "NCBI_API_KEY": "your_ncbi_key"
      },
      "description": "医学文献专业检索"
    },
    "local-knowledge": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/filesystem-server", "./research_papers"],
      "description": "访问本地论文库"
    },
    "medical-image-processing": {
      "command": "python",
      "args": ["-m", "medical_image_processing.server"],
      "env": {
        "PYTHONPATH": "./medical_image_tools"
      },
      "description": "医学图像处理"
    },
    "data-preprocessing": {
      "command": "python",
      "args": ["-m", "data_preprocessing.server"],
      "env": {
        "PYTHONPATH": "./data_tools"
      },
      "description": "数据预处理"
    },
    "grammar-checker": {
      "command": "python",
      "args": ["-m", "grammar_checker.server"],
      "env": {
        "PYTHONPATH": "./writing_tools"
      },
      "description": "学术英语语法优化"
    },
    "citation-manager": {
      "command": "python",
      "args": ["-m", "citation_manager.server"],
      "env": {
        "PYTHONPATH": "./citation_tools"
      },
      "description": "参考文献管理"
    }
  }
}</code></pre>
      <div v-if="expandedTip === 'configure-mcp'" class="tip-content">
        {{ tips['configure-mcp'] }}
      </div>
      
      <h3>步骤3：启动MCP服务器</h3>
      <pre @click="toggleTip('start-mcp')" class="clickable-code"><code class="language-bash"># 启动所有MCP服务器
trae mcp start all

# 或启动特定MCP服务器
trae mcp start arxiv-mcp-server pubmed-search</code></pre>
      <div v-if="expandedTip === 'start-mcp'" class="tip-content">
        {{ tips['start-mcp'] }}
      </div>
    </section>
    
    <section class="subagents-configuration">
      <h2>Subagents配置</h2>
      <p>Subagents配置文件位于<code>.trae/agents/</code>目录下，无需额外配置即可使用。系统会自动加载这些配置文件。</p>
      <p>当前可用的Subagents包括：</p>
      
      <!-- 文献调研专家Agent -->
      <div class="subagent-detail">
        <div class="subagent-header" @click="toggleTip('literature-research')">
          <h3>📚 文献调研专家Agent</h3>
          <span class="toggle-icon">{{ expandedTip === 'literature-research' ? '▼' : '▶' }}</span>
        </div>
        <div v-if="expandedTip === 'literature-research'" class="subagent-description">
          <p><strong>功能描述：</strong>自动化完成文献检索、筛选和分析工作，帮助用户快速掌握研究领域的最新进展。</p>
          <p><strong>核心能力：</strong></p>
          <ul>
            <li>多源文献检索（ArXiv、PubMed、Google Scholar等）</li>
            <li>文献相关性评分与智能筛选</li>
            <li>研究热点识别与趋势分析</li>
            <li>文献引用关系网络构建</li>
          </ul>
          <p><strong>使用场景：</strong>研究课题开题、文献综述撰写、研究背景调研</p>
          
          <!-- 提示词展示 -->
          <div class="prompt-section">
            <h4>💡 智能体提示词</h4>
            <pre class="prompt-content">{{ agentPrompts['literature-research'] }}</pre>
          </div>
        </div>
      </div>
      
      <!-- 可行性分析专家Agent -->
      <div class="subagent-detail">
        <div class="subagent-header" @click="toggleTip('feasibility-analysis')">
          <h3>🔍 可行性分析专家Agent</h3>
          <span class="toggle-icon">{{ expandedTip === 'feasibility-analysis' ? '▼' : '▶' }}</span>
        </div>
        <div v-if="expandedTip === 'feasibility-analysis'" class="subagent-description">
          <p><strong>功能描述：</strong>对研究课题进行全面的可行性评估，包括技术可行性、资源需求、风险分析等方面。</p>
          <p><strong>核心能力：</strong></p>
          <ul>
            <li>技术路线可行性评估</li>
            <li>资源需求预测与规划</li>
            <li>潜在风险识别与应对策略</li>
            <li>研究周期与成本估算</li>
          </ul>
          <p><strong>使用场景：</strong>研究课题立项、项目申报、研究方案优化</p>
          
          <!-- 提示词展示 -->
          <div class="prompt-section">
            <h4>💡 智能体提示词</h4>
            <pre class="prompt-content">{{ agentPrompts['feasibility-analysis'] }}</pre>
          </div>
        </div>
      </div>
      
      <!-- 数据处理专家Agent -->
      <div class="subagent-detail">
        <div class="subagent-header" @click="toggleTip('data-processing')">
          <h3>📊 数据处理专家Agent</h3>
          <span class="toggle-icon">{{ expandedTip === 'data-processing' ? '▼' : '▶' }}</span>
        </div>
        <div v-if="expandedTip === 'data-processing'" class="subagent-description">
          <p><strong>功能描述：</strong>自动化完成数据清洗、转换、分析和可视化工作，提高数据处理效率和准确性。</p>
          <p><strong>核心能力：</strong></p>
          <ul>
            <li>数据清洗与异常值处理</li>
            <li>数据转换与特征工程</li>
            <li>统计分析与机器学习建模</li>
            <li>数据可视化与报告生成</li>
          </ul>
          <p><strong>使用场景：</strong>实验数据处理、数据分析报告撰写、模型训练前的数据准备</p>
          
          <!-- 提示词展示 -->
          <div class="prompt-section">
            <h4>💡 智能体提示词</h4>
            <pre class="prompt-content">{{ agentPrompts['data-processing'] }}</pre>
          </div>
        </div>
      </div>
      
      <!-- 论文撰写专家Agent -->
      <div class="subagent-detail">
        <div class="subagent-header" @click="toggleTip('paper-writing')">
          <h3>✍️ 论文撰写专家Agent</h3>
          <span class="toggle-icon">{{ expandedTip === 'paper-writing' ? '▼' : '▶' }}</span>
        </div>
        <div v-if="expandedTip === 'paper-writing'" class="subagent-description">
          <p><strong>功能描述：</strong>辅助用户完成论文的结构规划、内容撰写和逻辑组织，提高论文质量和撰写效率。</p>
          <p><strong>核心能力：</strong></p>
          <ul>
            <li>论文结构规划与大纲生成</li>
            <li>专业内容撰写与润色</li>
            <li>逻辑连贯性检查与优化</li>
            <li>研究贡献突出与强调</li>
          </ul>
          <p><strong>使用场景：</strong>学术论文撰写、会议论文准备、学位论文写作</p>
          
          <!-- 提示词展示 -->
          <div class="prompt-section">
            <h4>💡 智能体提示词</h4>
            <pre class="prompt-content">{{ agentPrompts['paper-writing'] }}</pre>
          </div>
        </div>
      </div>
      
      <!-- 格式优化专家Agent -->
      <div class="subagent-detail">
        <div class="subagent-header" @click="toggleTip('format-optimization')">
          <h3>🎨 格式优化专家Agent</h3>
          <span class="toggle-icon">{{ expandedTip === 'format-optimization' ? '▼' : '▶' }}</span>
        </div>
        <div v-if="expandedTip === 'format-optimization'" class="subagent-description">
          <p><strong>功能描述：</strong>自动调整论文格式，确保符合目标期刊或会议的要求，包括排版、引用格式、图表样式等。</p>
          <p><strong>核心能力：</strong></p>
          <ul>
            <li>期刊格式自动适配</li>
            <li>引用格式规范化（APA、MLA、IEEE等）</li>
            <li>图表样式统一与优化</li>
            <li>排版细节调整与美化</li>
          </ul>
          <p><strong>使用场景：</strong>论文投稿前的格式调整、多期刊投稿准备、论文格式统一</p>
          
          <!-- 提示词展示 -->
          <div class="prompt-section">
            <h4>💡 智能体提示词</h4>
            <pre class="prompt-content">{{ agentPrompts['format-optimization'] }}</pre>
          </div>
        </div>
      </div>
      
      <!-- 同行评审专家Agent -->
      <div class="subagent-detail">
        <div class="subagent-header" @click="toggleTip('peer-review')">
          <h3>👨‍⚕️ 同行评审专家Agent</h3>
          <span class="toggle-icon">{{ expandedTip === 'peer-review' ? '▼' : '▶' }}</span>
        </div>
        <div v-if="expandedTip === 'peer-review'" class="subagent-description">
          <p><strong>功能描述：</strong>模拟同行评审过程，对论文进行全面评估，提供专业的修改建议和改进方向。</p>
          <p><strong>核心能力：</strong></p>
          <ul>
            <li>论文质量综合评估</li>
            <li>方法学严谨性检查</li>
            <li>结果解释与讨论深度分析</li>
            <li>针对性修改建议生成</li>
          </ul>
          <p><strong>使用场景：</strong>论文投稿前自查、修改意见回应、论文质量提升</p>
          
          <!-- 提示词展示 -->
          <div class="prompt-section">
            <h4>💡 智能体提示词</h4>
            <pre class="prompt-content">{{ agentPrompts['peer-review'] }}</pre>
          </div>
        </div>
      </div>
      
      <div class="tip-content" v-if="expandedTip === 'subagents-config'">
        {{ tips['subagents-config'] }}
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 存储当前展开的提示词ID
const expandedTip = ref(null);

// 提示词数据
const tips = {
  'environment-requirements': '确保系统已安装指定版本的Python和Node.js，以及相应的包管理器。',
  'install-dependencies': '使用uv安装Python依赖，使用npm安装Node.js依赖。安装全局包时可能需要管理员权限。',
  'configure-mcp': '编辑~/.trae/settings.json文件，添加MCP服务器配置。根据实际情况修改存储路径和API密钥。',
  'start-mcp': '使用trae mcp start命令启动MCP服务器。可以启动所有服务器或指定特定服务器。',
  'subagents-config': 'Subagents配置文件位于.trae/agents/目录下，系统会自动加载这些配置文件，无需额外配置。'
};

// 智能体提示词配置
const agentPrompts = {
  'literature-research': `你是一位专业的文献调研专家，擅长从海量文献中提取关键信息并进行分析。

任务：根据用户提供的关键词和时间范围，调研相关领域的最新进展。

要求：
1. 从多个权威来源（ArXiv、PubMed、Google Scholar等）检索文献
2. 对文献进行相关性评分和智能筛选
3. 识别研究热点和发展趋势
4. 构建文献引用关系网络
5. 生成结构化的调研报告，包括研究背景、最新进展、挑战和未来方向

输出格式：
- 文献调研结果摘要
- 关键文献列表（包含标题、作者、发表年份、期刊/会议）
- 研究热点分析
- 引用关系网络可视化建议
- 未来研究方向建议`,
  
  'feasibility-analysis': `你是一位资深的可行性分析专家，擅长评估研究课题的可行性和潜在风险。

任务：根据用户提供的研究方案、文献调研结果和可用资源，评估研究课题的可行性。

要求：
1. 技术路线可行性评估
2. 资源需求预测与规划
3. 潜在风险识别与应对策略
4. 研究周期与成本估算
5. 预期成果与影响分析

输出格式：
- 可行性评估结论
- 技术路线评估
- 资源需求分析
- 风险评估与应对措施
- 研究周期与成本估算
- 改进建议`,
  
  'data-processing': `你是一位专业的数据处理专家，擅长处理各种类型的数据，包括结构化数据和非结构化数据。

任务：根据用户提供的数据和需求，进行数据清洗、转换、分析和可视化。

要求：
1. 数据清洗与异常值处理
2. 数据转换与特征工程
3. 统计分析与机器学习建模
4. 数据可视化与报告生成
5. 确保数据处理过程的可重复性和可解释性

输出格式：
- 数据处理流程描述
- 清洗后的数据统计信息
- 分析结果与结论
- 可视化图表（如适用）
- 数据处理代码（如适用）`,
  
  'paper-writing': `你是一位经验丰富的论文撰写专家，擅长撰写高质量的学术论文。

任务：根据用户提供的研究资料和需求，撰写学术论文的各个部分。

要求：
1. 论文结构规划与大纲生成
2. 专业内容撰写与润色
3. 逻辑连贯性检查与优化
4. 研究贡献突出与强调
5. 符合学术规范和目标期刊的要求

输出格式：
- 论文结构大纲
- 各部分撰写内容
- 参考文献列表
- 撰写建议`,
  
  'format-optimization': `你是一位专业的格式优化专家，熟悉各种学术期刊和会议的格式要求。

任务：根据用户提供的论文和目标期刊要求，优化论文格式。

要求：
1. 期刊格式自动适配
2. 引用格式规范化（APA、MLA、IEEE等）
3. 图表样式统一与优化
4. 排版细节调整与美化
5. 确保格式符合目标期刊的所有要求

输出格式：
- 格式优化后的论文
- 格式调整说明
- 引用格式检查报告
- 图表优化建议`,
  
  'peer-review': `你是一位资深的同行评审专家，擅长评估学术论文的质量和学术价值。

任务：根据用户提供的论文，模拟同行评审过程，提供专业的修改建议。

要求：
1. 论文质量综合评估
2. 方法学严谨性检查
3. 结果解释与讨论深度分析
4. 针对性修改建议生成
5. 客观公正的评审意见

输出格式：
- 评审意见摘要
- 论文质量评估
- 方法学评审
- 结果与讨论评审
- 具体修改建议
- 评审结论`
};

// 切换提示词显示状态
const toggleTip = (tipId) => {
  expandedTip.value = expandedTip.value === tipId ? null : tipId;
};
</script>

<style scoped>
.system-configuration-page {
  max-width: 1000px;
  margin: 0 auto;
}

section {
  margin-bottom: 40px;
}

h3 {
  margin-top: 30px;
  margin-bottom: 15px;
}

pre {
  background-color: #1f2937;
  color: #f9fafb;
  padding: 15px;
  border-radius: 5px;
  overflow-x: auto;
  margin-bottom: 20px;
}

code {
  background-color: #e5e7eb;
  padding: 2px 4px;
  border-radius: 3px;
  font-family: 'Courier New', Courier, monospace;
}

pre code {
  background-color: transparent;
  padding: 0;
  color: inherit;
}

ul {
  margin-left: 20px;
  margin-bottom: 20px;
}

li {
  margin-bottom: 8px;
}

/* 可点击区块样式 */
.clickable-section {
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 15px;
  border-radius: 8px;
}

.clickable-section:hover {
  background-color: #f5f7fa;
}

/* 可点击代码块样式 */
.clickable-code {
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.clickable-code:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.clickable-code::after {
  content: '💡 点击查看提示词';
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  background-color: rgba(0, 0, 0, 0.5);
  padding: 3px 8px;
  border-radius: 4px;
  transition: opacity 0.3s ease;
}

.clickable-code:hover::after {
  opacity: 0.8;
}

/* Subagent详情样式 */
.subagent-detail {
  margin-bottom: 25px;
  padding: 20px;
  background-color: #f9fafb;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid #e5e7eb;
}

.subagent-detail:hover {
  background-color: #f0f2f5;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.subagent-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.subagent-header h3 {
  margin: 0;
  font-size: 18px;
  color: #111827;
  display: flex;
  align-items: center;
  gap: 8px;
}

.toggle-icon {
  font-size: 14px;
  color: #6b7280;
  transition: transform 0.3s ease;
}

.subagent-detail:hover .toggle-icon {
  color: #409eff;
}

/* 提示词部分样式 */
.prompt-section {
  margin-top: 20px;
  padding: 15px;
  background-color: #f8fafc;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
}

.prompt-section h4 {
  margin: 0 0 12px 0;
  font-size: 16px;
  color: #334155;
  display: flex;
  align-items: center;
  gap: 8px;
}

.prompt-content {
  background-color: #1e293b;
  color: #f1f5f9;
  padding: 15px;
  border-radius: 4px;
  overflow-x: auto;
  font-family: 'Courier New', Courier, monospace;
  font-size: 13px;
  line-height: 1.5;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.prompt-content::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.prompt-content::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}

.prompt-content::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
}

.prompt-content::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}

.subagent-description {
  margin-top: 15px;
  padding: 15px;
  background-color: white;
  border-radius: 6px;
  border-left: 4px solid #409eff;
  animation: fadeIn 0.3s ease;
}

.subagent-description p {
  margin: 0 0 12px 0;
  line-height: 1.6;
}

.subagent-description ul {
  margin: 0 0 12px 20px;
  padding: 0;
}

.subagent-description li {
  margin-bottom: 6px;
  line-height: 1.5;
  color: #374151;
}

/* 提示词内容样式 */
.tip-content {
  margin-top: 15px;
  padding: 15px;
  background-color: #e8f4f8;
  border-left: 4px solid #409eff;
  border-radius: 4px;
  color: #303133;
  font-size: 14px;
  line-height: 1.6;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>