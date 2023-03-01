<script setup lang="ts" >
defineProps<{ data: any }>();
</script >
<template>
  <div class="certificate-img-box">
    <img class="certificate-img" :src="item" alt="" v-for="item in data.Certifications" :key="item" />
  </div>
</template>
