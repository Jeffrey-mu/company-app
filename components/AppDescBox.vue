
<script setup lang="ts" >
defineProps<{ data: any }>();
const count = ref(13)
</script >
<template>
  <div class="app-desc-box">
    <div class="app-desc-short" v-html="data.company_content" :style="{ '-webkit-line-clamp': count }">
    </div>
    <p v-if="count == 13" class="read-more-summary-btn" @click="count = 10000">read more</p>
  </div>
</template>
