<script setup>
import Header from 'components/Header.vue'
import Footer from 'components/Footer.vue'
import SvgList from 'components/SvgList.vue'
import adv from '/api/index_1.json'
</script>
<template>
  <SvgList />
  <Header />
  <head>
    <div v-html="adv.find(el => el.position_id === 1).script">
    </div>
  </head>
  <div>
    Advertisement
    <div v-html="adv.find(el => el.position_id === 2).script">
    </div>
  </div>
  <div class="main">
    <NuxtPage />
  </div>
  <Footer />
</template>

<style>
@import "/css/detail.css";
@import "/css/index.css";

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
