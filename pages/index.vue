<script setup>
import data from '/api/index.json'
const line = ref(4)
</script>
<template>
  <div class="app-card" v-for="item in data">
    <AppCardHeader :data="item"/>
    <div class="app-desc" v-html="item.company_content" :style="{'-webkit-line-clamp': line }">
    </div>
    <a :href="'./details/' + item.id" class="app-more-btn">read more</a>
    <AppInfoBox :data="item" />
    <div class="app-testimonial">
      <p>"{{ item.company_short_evaluate }}"</p>
      <p class="app-testimonial-author"> {{ item['company_short_evaluate_name(position)'] }}</p>
    </div>
    <a :href="'./details/'+ item.id">
      <div class="app-view-btn">Visit Website</div>
    </a>
  </div>
</template>
<script>

</script>

