<template>
  <div class="flex flex-col flex-items-center gap-2">
    <h2>{{ t("demo") }}</h2>
    <!-- 国际化 -->
    <Language />
    <!-- https://www.naiveui.com/zh-CN/light -->
    <n-date-picker type="datetimerange" clearable />
    <div>{{ t("hello") }}</div>
    <!-- 主题切换 -->
    <ToggleTheme />
    <!-- echarts -->
    <ECharts
      id="demo-echarts"
      width="400px"
      height="400px"
      :loading="loading"
      :fullOptions="{ options: chartOptions.setOption2() }"
    />
  </div>
</template>

<script setup>
import { chartOptions } from "@/components/ECharts/optionsConfig";
const { t } = useI18n();

const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 1000);
});

// 调用api》modules》demo 中的接口, 采用以下方式即可
// const { API_DEMO_POST } = useRequest();
</script>
