<script setup lang="ts">
import type { DataModel } from '../types/DataModel'
 defineProps<{ data: DataModel }>();
</script>
<template>
  <div class="app-card-header">
    <img class="app-logo" :src="data.logo" alt="" />
    <div>
      <h2>{{ data.company_name }}</h2>
      <p class="app-intro">{{ data.company_short_describe }}</p>
      <div><span class="app-star">★★★★★</span>&nbsp;<span class="app-reviews">{{ data.score }}.0&nbsp;(76
          Reviews)</span>
      </div>
    </div>
  </div>
</template>
