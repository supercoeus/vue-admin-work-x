<template>
  <div class="main-container">
    <el-card
      :body-style="{ padding: 0 }"
      shadow="never"
      class="container"
    >
      <div class="text-center"><i class="el-icon-success icon"></i></div>
      <div class="result">
        提交成功
      </div>
      <div class="tip">
        提交结果页用于反馈一系列操作任务的处理结果， 如果仅是简单操作，使用 Message 全局提示反馈即可。 本文字区域可以展示简单的补充说明，如果有类似展示 “单据”的需求，下面这个灰色区域可以呈现比较复杂的内容。
      </div>
      <div class="text-center action">
        <el-button
          type="primary"
          size="small"
        >返回列表</el-button>
        <el-button size="small">查看项目</el-button>
        <el-button size="small">打印</el-button>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Success",
});
</script>

<style lang="scss" scoped>
.container {
  padding: 50px;
  .icon {
    color: #67c23a;
    font-size: 100px;
    margin: 30px 0;
  }
  .result {
    font-size: 24px;
    line-height: 1.8;
    text-align: center;
  }
  .tip {
    font-size: 14px;
    line-height: 1.6;
    text-align: center;
  }
  .action {
    margin-top: 30px;
  }
}
</style>
