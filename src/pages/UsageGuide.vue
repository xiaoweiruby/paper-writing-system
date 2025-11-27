<template>
  <div class="usage-guide-page" v-highlight>
    <h1>使用指南</h1>
    
    <section class="complete-example">
      <h2>完整使用示例：肺结节检测论文写作</h2>
      
      <h3>阶段1：研究准备</h3>
      <div class="example-step">
        <h4>1. 文献调研</h4>
        <pre @click="toggleTip('literature-search')" class="clickable-code"><code>@literature-search-agent 调研肺结节检测的最新进展，重点关注深度学习方法。关键词包括：肺结节检测、深度学习、CT图像、卷积神经网络。时间范围：2020-2024年。</code></pre>
        <div v-if="expandedTip === 'literature-search'" class="tip-content">
          {{ tips['literature-search'] }}
        </div>
      </div>
      
      <div class="example-step">
        <h4>2. 可行性分析</h4>
        <pre @click="toggleTip('feasibility-analysis')" class="clickable-code"><code>@feasibility-analysis-agent 评估基于深度学习的肺结节检测研究方案的可行性。研究方案：使用改进的卷积神经网络对CT图像中的肺结节进行检测和分类，目标是提高小结节的检测准确率。文献调研结果显示当前研究缺乏对小结节的检测能力。可用资源：1000例CT图像数据，2台GPU服务器。</code></pre>
        <div v-if="expandedTip === 'feasibility-analysis'" class="tip-content">
          {{ tips['feasibility-analysis'] }}
        </div>
      </div>
      
      <div class="example-step">
        <h4>3. 研究设计</h4>
        <pre @click="toggleTip('research-design')" class="clickable-code"><code>@feasibility-analysis-agent @paper-writing-agent 基于可行性分析结果，制定详细的研究设计方案，包括数据采集、实验步骤和评估指标。</code></pre>
        <div v-if="expandedTip === 'research-design'" class="tip-content">
          {{ tips['research-design'] }}
        </div>
      </div>
      
      <h3>阶段2：数据处理</h3>
      <div class="example-step">
        <h4>1. 数据获取</h4>
        <pre @click="toggleTip('data-acquisition')" class="clickable-code"><code>@data-processing-agent 获取1000例肺结节CT图像数据，确保数据质量和标注准确性。</code></pre>
        <div v-if="expandedTip === 'data-acquisition'" class="tip-content">
          {{ tips['data-acquisition'] }}
        </div>
      </div>
      
      <div class="example-step">
        <h4>2. 数据预处理</h4>
        <pre @click="toggleTip('data-preprocessing')" class="clickable-code"><code>@data-processing-agent 对1000例肺结节CT图像进行预处理，包括DICOM转换、窗宽窗位调整、图像增强和标准化。</code></pre>
        <div v-if="expandedTip === 'data-preprocessing'" class="tip-content">
          {{ tips['data-preprocessing'] }}
        </div>
      </div>
      
      <div class="example-step">
        <h4>3. 数据分析</h4>
        <pre @click="toggleTip('data-analysis')" class="clickable-code"><code>@data-processing-agent 对预处理后的肺结节CT图像进行分析，计算结节大小分布、密度分布，评估不同大小结节的特征。生成结节大小直方图、密度散点图和特征相关性热图。</code></pre>
        <div v-if="expandedTip === 'data-analysis'" class="tip-content">
          {{ tips['data-analysis'] }}
        </div>
      </div>
      
      <h3>阶段3：论文撰写</h3>
      <div class="example-step">
        <h4>1. 论文框架构建</h4>
        <pre @click="toggleTip('paper-framework')" class="clickable-code"><code>@paper-writing-agent 基于研究设计和数据分析结果，构建肺结节检测论文的框架和大纲。</code></pre>
        <div v-if="expandedTip === 'paper-framework'" class="tip-content">
          {{ tips['paper-framework'] }}
        </div>
      </div>
      
      <div class="example-step">
        <h4>2. 内容撰写</h4>
        <pre @click="toggleTip('content-writing')" class="clickable-code"><code>@paper-writing-agent 基于论文框架、文献调研结果和数据分析结果，撰写肺结节检测论文的完整草稿，包括摘要、引言、方法、结果、讨论和结论。</code></pre>
        <div v-if="expandedTip === 'content-writing'" class="tip-content">
          {{ tips['content-writing'] }}
        </div>
      </div>
      
      <div class="example-step">
        <h4>3. 图表插入</h4>
        <pre @click="toggleTip('figure-insertion')" class="clickable-code"><code>@paper-writing-agent @data-processing-agent 将数据分析生成的图表插入到论文草稿中，确保图表格式和内容的一致性。</code></pre>
        <div v-if="expandedTip === 'figure-insertion'" class="tip-content">
          {{ tips['figure-insertion'] }}
        </div>
      </div>
      
      <h3>阶段4：论文优化</h3>
      <div class="example-step">
        <h4>1. 语言润色</h4>
        <pre @click="toggleTip('language-polishing')" class="clickable-code"><code>@format-optimization-agent 优化疗结节检测论文的语言表达，提升学术表达的准确性和流畅性。</code></pre>
        <div v-if="expandedTip === 'language-polishing'" class="tip-content">
          {{ tips['language-polishing'] }}
        </div>
      </div>
      
      <div class="example-step">
        <h4>2. 格式调整</h4>
        <pre @click="toggleTip('format-adjustment')" class="clickable-code"><code>@format-optimization-agent 按照Nature Medicine格式要求，调整肺结节检测论文的格式，包括字体、行距、段落格式等。</code></pre>
        <div v-if="expandedTip === 'format-adjustment'" class="tip-content">
          {{ tips['format-adjustment'] }}
        </div>
      </div>
      
      <div class="example-step">
        <h4>3. 引用管理</h4>
        <pre @click="toggleTip('citation-management')" class="clickable-code"><code>@format-optimization-agent 检查和修正肺结节检测论文的引用格式，确保符合Nature Medicine的要求。</code></pre>
        <div v-if="expandedTip === 'citation-management'" class="tip-content">
          {{ tips['citation-management'] }}
        </div>
      </div>
      
      <h3>阶段5：质量控制</h3>
      <div class="example-step">
        <h4>1. 同行评审</h4>
        <pre @click="toggleTip('peer-review')" class="clickable-code"><code>@peer-review-agent 模拟Nature Medicine审稿人，评审肺结节检测论文，重点关注方法的合理性和结果的可重复性。</code></pre>
        <div v-if="expandedTip === 'peer-review'" class="tip-content">
          {{ tips['peer-review'] }}
        </div>
      </div>
      
      <div class="example-step">
        <h4>2. 修改完善</h4>
        <pre @click="toggleTip('revision')" class="clickable-code"><code>@paper-writing-agent @format-optimization-agent 根据同行评审意见，修改和完善肺结节检测论文。</code></pre>
        <div v-if="expandedTip === 'revision'" class="tip-content">
          {{ tips['revision'] }}
        </div>
      </div>
      
      <div class="example-step">
        <h4>3. 最终检查</h4>
        <pre @click="toggleTip('final-check')" class="clickable-code"><code>@paper-writing-agent @format-optimization-agent @peer-review-agent 对修改后的肺结节检测论文进行最终检查，确保所有问题都已解决，论文质量符合发表要求。</code></pre>
        <div v-if="expandedTip === 'final-check'" class="tip-content">
          {{ tips['final-check'] }}
        </div>
      </div>
    </section>
    
    <section class="best-practices">
      <h2>系统集成最佳实践</h2>
      
      <div class="practice-item">
        <h3>1. 合理规划工作流程</h3>
        <ul>
          <li>按照系统设计的五个阶段依次进行</li>
          <li>每个阶段完成后再进入下一阶段</li>
          <li>充分利用前一阶段的输出作为下一阶段的输入</li>
        </ul>
      </div>
      
      <div class="practice-item">
        <h3>2. 有效使用AI代理</h3>
        <ul>
          <li>为每个任务选择合适的Agent</li>
          <li>提供清晰、具体的输入信息</li>
          <li>充分利用Agent的专业能力</li>
        </ul>
      </div>
      
      <div class="practice-item">
        <h3>3. 质量控制</h3>
        <ul>
          <li>在每个阶段结束后进行质量检查</li>
          <li>重视同行评审意见</li>
          <li>多次迭代修改，不断提升论文质量</li>
        </ul>
      </div>
      
      <div class="practice-item">
        <h3>4. 资源管理</h3>
        <ul>
          <li>合理分配计算资源</li>
          <li>定期备份数据和论文草稿</li>
          <li>管理好参考文献和引用</li>
        </ul>
      </div>
      
      <div class="practice-item">
        <h3>5. 持续改进</h3>
        <ul>
          <li>收集使用过程中的反馈</li>
          <li>不断优化工作流程</li>
          <li>更新MCP组件和Subagents配置</li>
        </ul>
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
  'literature-search': '使用文献调研专家Agent时，关键词应具体明确，时间范围不宜过长，建议2-5年。',
  'feasibility-analysis': '可行性分析需要提供详细的研究方案、文献调研结果和可用资源，以便Agent进行全面评估。',
  'research-design': '研究设计应基于可行性分析结果，明确数据采集、实验步骤和评估指标。',
  'data-acquisition': '数据获取时应确保数据质量和标注准确性，可提供数据集来源和规模信息。',
  'data-preprocessing': '数据预处理包括DICOM转换、窗宽窗位调整、图像增强和标准化等步骤，应根据具体需求选择合适的预处理方法。',
  'data-analysis': '数据分析应包括统计分析和可视化，生成的图表应清晰直观，便于论文撰写使用。',
  'paper-framework': '论文框架应包括摘要、引言、方法、结果、讨论和结论等部分，结构清晰，逻辑连贯。',
  'content-writing': '内容撰写应基于论文框架、文献调研结果和数据分析结果，语言准确流畅，符合学术规范。',
  'figure-insertion': '图表插入应确保图表格式和内容的一致性，图表标题和说明应清晰明确。',
  'language-polishing': '语言润色应提升学术表达的准确性和流畅性，避免语法错误和表达不清。',
  'format-adjustment': '格式调整应按照目标期刊的要求进行，包括字体、行距、段落格式等。',
  'citation-management': '引用管理应确保引用格式符合目标期刊的要求，避免引用错误和遗漏。',
  'peer-review': '同行评审应邀请领域专家进行，重点关注方法的合理性和结果的可重复性。',
  'revision': '修改完善应根据同行评审意见进行，逐条回应评审意见，提升论文质量。',
  'final-check': '最终检查应确保所有问题都已解决，论文质量符合发表要求，包括语言、格式、引用等方面。'
};

// 切换提示词显示状态
const toggleTip = (tipId) => {
  expandedTip.value = expandedTip.value === tipId ? null : tipId;
};
</script>

<style scoped>
.usage-guide-page {
  max-width: 1000px;
  margin: 0 auto;
}

section {
  margin-bottom: 40px;
}

h3 {
  margin-top: 30px;
  margin-bottom: 20px;
  color: #374151;
}

h4 {
  margin-top: 20px;
  margin-bottom: 10px;
  color: #4b5563;
}

.example-step {
  margin-bottom: 25px;
  padding: 15px;
  background-color: #f5f7fa;
  border-radius: 8px;
}

pre {
  background-color: #1f2937;
  color: #f9fafb;
  padding: 15px;
  border-radius: 5px;
  overflow-x: auto;
  margin: 0;
}

code {
  font-family: 'Courier New', Courier, monospace;
}

.practice-item {
  margin-bottom: 30px;
}

ul {
  margin-left: 20px;
  margin-bottom: 15px;
}

li {
  margin-bottom: 8px;
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

/* 提示词内容样式 */
.tip-content {
  margin-top: 10px;
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