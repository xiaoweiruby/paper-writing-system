<template>
  <div class="troubleshooting-page">
    <h1>故障排除</h1>
    
    <section class="common-issues">
      <h2>常见问题及解决方案</h2>
      
      <div class="issue-item">
        <h3>1. MCP服务器连接问题</h3>
        <div class="issue-content">
          <p><strong>问题描述：</strong>无法连接到MCP服务器，系统提示连接失败。</p>
          <p><strong>解决方案：</strong></p>
          <ul>
            <li>检查MCP服务器是否已启动</li>
            <li>验证MCP配置是否正确</li>
            <li>检查网络连接和防火墙设置</li>
          </ul>
        </div>
      </div>
      
      <div class="issue-item">
        <h3>2. Agent响应问题</h3>
        <div class="issue-content">
          <p><strong>问题描述：</strong>发送指令后，Agent没有响应或响应超时。</p>
          <p><strong>解决方案：</strong></p>
          <ul>
            <li>检查Agent配置文件是否存在</li>
            <li>验证输入格式是否正确</li>
            <li>检查Agent依赖是否已安装</li>
          </ul>
        </div>
      </div>
      
      <div class="issue-item">
        <h3>3. 输出质量问题</h3>
        <div class="issue-content">
          <p><strong>问题描述：</strong>Agent生成的输出质量不符合预期，如内容不准确、格式错误等。</p>
          <p><strong>解决方案：</strong></p>
          <ul>
            <li>提供更具体的输入信息</li>
            <li>调整Agent的输出格式要求</li>
            <li>尝试使用多个Agent协作</li>
          </ul>
        </div>
      </div>
      
      <div class="issue-item">
        <h3>4. 依赖安装问题</h3>
        <div class="issue-content">
          <p><strong>问题描述：</strong>安装系统依赖时出现错误，如包版本冲突、网络超时等。</p>
          <p><strong>解决方案：</strong></p>
          <ul>
            <li>确保使用指定版本的Python和Node.js</li>
            <li>尝试使用国内镜像源安装依赖</li>
            <li>检查网络连接，确保可以访问外部资源</li>
          </ul>
        </div>
      </div>
      
      <div class="issue-item">
        <h3>5. 配置文件错误</h3>
        <div class="issue-content">
          <p><strong>问题描述：</strong>配置文件格式错误，导致系统无法正常启动。</p>
          <p><strong>解决方案：</strong></p>
          <ul>
            <li>使用JSON格式验证工具检查配置文件</li>
            <li>确保配置项名称和值的类型正确</li>
            <li>参考系统提供的配置示例</li>
          </ul>
        </div>
      </div>
    </section>
    
    <section class="contact-support">
      <h2>联系支持</h2>
      <p>如果您遇到了无法解决的问题，可以通过以下方式联系我们的支持团队：</p>
      <ul>
        <li>发送邮件至：support@academic-writing-system.com</li>
        <li>提交Issue至GitHub仓库：<a href="#" target="_blank">https://github.com/academic-writing-system/support</a></li>
        <li>加入官方QQ群：123456789</li>
      </ul>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.troubleshooting-page {
  max-width: 1000px;
  margin: 0 auto;
}

section {
  margin-bottom: 40px;
}

.issue-item {
  margin-bottom: 30px;
  padding: 20px;
  background-color: #f5f7fa;
  border-radius: 8px;
}

.issue-content {
  margin-top: 15px;
}

h3 {
  margin-top: 0;
  margin-bottom: 10px;
  color: #374151;
}

ul {
  margin-left: 20px;
  margin-bottom: 15px;
}

li {
  margin-bottom: 8px;
}

a {
  color: #3b82f6;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>