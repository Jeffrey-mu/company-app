<script setup lang="ts" >
defineProps<{ data: any }>();
const show = ref(false)
</script>
<template>
  <p><b>{{ data.interview_title }}</b></p>
  <div class="reviewer-box card-box" :class="{ '-more': show }">
    <div class="reviewer-box-header">
      <img :src="data.interview_avatar" alt="" class="reviewer-avatars" />
      <div>
        <div class="reviewer-name">{{ data.interview_name }}</div>
        <div class="reviewer-position">{{ data.interview_postion }}</div>
      </div>
    </div>
    <div class="reviewer-desc-short" v-html="data.interview_content">
    </div>
    <div class="show-more-review-btn" @click="show = !show">
      <svg xmlns="http://www.w3.org/2000/svg" width="21px" height="11px" viewBox="0 0 21 11"
        :style="{ transform: show ? 'rotate(180deg)' : '' }">
        <use xlink:href="#svg_arrow"></use>
      </svg>
    </div>
  </div>

  <div class="reviewer-divider"></div>
</template>

