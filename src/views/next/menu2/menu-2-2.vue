<template>
  <el-card>
    <template #header>
      <div>缓存信息</div>
    </template>
    <el-input
      v-model="content"
      placeholder="请输入信息"
    />
  </el-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core";

export default defineComponent({
  name: "Menu22",
  setup() {
    const content = ref("");
    return {
      content,
    };
  },
});
</script>
