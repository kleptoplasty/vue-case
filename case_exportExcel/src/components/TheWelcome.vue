<script setup>
// 安装：https://docs.sheetjs.com/docs/getting-started/installation/nodejs
import exportJSON from './exportJSON';
const exportExcel = () => {
  const title = {
    BGQ: "报告期",
    C01_2: "商品购进额本月"
  }
  const data = [
    {
      BGQ: "2022年2月",
      C01_2: 123
    },
    {
      BGQ: "2022年3月",
      C01_2: 456
    },
    {
      BGQ: "2022年4月",
      C01_2: 789
    }
  ]
  exportJSON.loadExcel(title, data, '统计数据');
}
</script>

<template>
  <div>
    <button @click="exportExcel()">下载Excel</button>
  </div>
</template>
