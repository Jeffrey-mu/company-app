<script>
export default {
  props: ['data'],
  data() {
    return {
      show: false
    }
  }
}
</script>
<template>
  <p><b>clients & Portfolios</b></p>
  <p class="reviewer-title">Key clients</p>
  <div class="clients-tags-box">
    <div class="clients-tags" v-for="item in data.clients_portfolios.key_clients" :key="item">{{ item }}</div>
  </div>
  <p class="reviewer-title">Portfolios</p>
  <div class="portfolio-card-box" :class="{ '-more': show }">
    <div class="portfolio-card" v-for="item in data.clients_portfolios.Portfolios" :key="item">
      <img class="portfolio-img" :src="item.img" alt="" />
      <div class="portfolio-title">{{ item.label }}</div>
    </div>
    <div class="show-more-section-btn" @click="show = !show">
      <svg xmlns="http://www.w3.org/2000/svg" width="21px" height="11px" viewBox="0 0 21 11">
        <use xlink:href="#svg_arrow"></use>
      </svg>
    </div>
  </div>
</template>
