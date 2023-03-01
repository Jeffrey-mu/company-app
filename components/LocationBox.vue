<script setup lang="ts" >
defineProps<{ data: any }>();
const show = ref(false)
</script>
<template>
  <div class="location-box" :class="{'-more': show}">
    <div class="location-item" v-for="item, index in data.address_list" :key="item" v-show="show || !index">
      <p class="reviewer-title location-row">
        <img class="country-flag" :src="item.icon" alt="">
        {{ item.name }}
      </p>
      <p>{{ item.company_name }}</p>
      <p>{{ item.details }}</p>
      <p class="location-row">
        <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink">
          <use xlink:href="#svg_telephone"></use>
        </svg>
        <span class="location-phone-num">{{ item.tel }}</span>
      </p>
    </div>

    <div class="show-all-location-btn " @click="show = !show"></div>
  </div>
</template>
