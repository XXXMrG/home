<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import { format } from 'date-fns';

const currentTime = ref(new Date());

// 使用 date-fns 的 format 函数来格式化日期和时间
const formattedDateTime = computed(() => {
  const date = format(currentTime.value, 'yyyy-MM-dd');
  const time = format(currentTime.value, 'HH:mm:ss.SSS');
  
  return [date, time];
});

onMounted(() => {
  const updateFrequency = 1; // 每1毫秒更新一次
  const timer = setInterval(() => {
    currentTime.value = new Date(); // 更新时间
  }, updateFrequency);

  onBeforeUnmount(() => {
    clearInterval(timer); // 组件销毁前清除定时器
  });
});

</script>

<template>
    <div class="flex flex-col items-center justify-between h-full">
        <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-10">苞米今天买车了么？？？</h1>
        <div class="flex flex-col items-center flex-1 mt-[10vh] gap-6">
            <h2 class="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors">现在是：</h2>
            <div class="text-5xl">{{ formattedDateTime[0] }}</div>
            <div class="text-5xl">{{ formattedDateTime[1] }}</div>
            <div class="text-lg font-semibold">苞米今天买车了么？</div>
            <div class="text-9xl font-extrabold text-red-600">没有!</div>
            <div class="text-9xl">🙄</div>
        </div>
    </div>
</template>

