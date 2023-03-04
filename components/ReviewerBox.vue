<script setup lang="ts">
defineProps<{ data: any }>();
</script>
<template>
  <template v-for="item in data.customer_reviews" :key="item">
    <ReviewerItem :item="item" />
  </template>
</template>
