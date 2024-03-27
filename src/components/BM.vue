<script setup lang="ts">
import confetti from 'canvas-confetti';
import { formatDuration, intervalToDuration } from 'date-fns';
import { zhCN } from 'date-fns/locale';
import { onBeforeUnmount, onMounted, ref } from 'vue';

const targetDate = new Date('2024-03-31T12:00:00');
const countdown = ref('');

const updateCountdown = () => {
    const now = new Date();
    if (now >= targetDate) {
        countdown.value = '恭喜苞米已成为尊贵的 AMG 车主';
        return;
    }

    // 使用 date-fns 来获取两个日期之间的间隔作为持续时间
    const duration = intervalToDuration({ start: now, end: targetDate });

    // 格式化持续时间
    countdown.value = formatDuration(duration, {
        format: ['days', 'hours', 'minutes', 'seconds'],
        locale: zhCN,
    });
};

onMounted(() => {
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    onBeforeUnmount(() => {
        clearInterval(timer);
    });
});

onMounted(() => {
    confetti({ particleCount: 100, spread: 100 });
});
</script>

<template>
    <div class="flex flex-col items-center justify-between h-full overflow-auto">
        <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-10">苞米今天买车了么？？？</h1>
        <div class="flex flex-col items-center flex-1 mt-[10vh] gap-6">
            <div class="text-lg font-semibold">历经三次退定金，三次换车，无数次换 4S 店后：</div>
            <div class="text-9xl font-extrabold text-red-600">已下单!</div>
            <div class="text-9xl font-extrabold">🎉</div>
            <h2 class="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors">距离苞米提车还有：</h2>
            <div class="text-5xl">{{ countdown }}</div>
        </div>
    </div>
</template>
