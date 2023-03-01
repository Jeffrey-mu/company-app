
<script setup lang="ts" >
defineProps<{ data: any }>();
</script >
<template>
  <div class="app-info-box">
    <div class="app-info">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
        viewBox="0 0 34 34" version="1.1">
        <use xlink:href="#svg_dollar"></use>
      </svg>
      <span class="app-info-text">
        {{ data.hourly_wage }}</span>
    </div>
    <div class="app-info">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
        viewBox="0 0 34 34" version="1.1">
        <use xlink:href="#svg_people"></use>
      </svg>
      <span class="app-info-text">{{ data.scale }}</span>
    </div>
  </div>
  <div class="app-info-box">
    <div class="app-info">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
        viewBox="0 0 34 34" version="1.1">
        <use xlink:href="#svg_calendar"></use>
      </svg>
      <span class="app-info-text">{{ data.creation_time }}</span>
    </div>
    <div class="app-info">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
        viewBox="0 0 34 34" version="1.1">
        <use xlink:href="#svg_location"></use>
      </svg>
      <span class="app-info-text">{{ data.address }}</span>
    </div>
  </div>
</template>
