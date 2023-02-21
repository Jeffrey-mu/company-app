<script setup>
import AppCardHeader from 'components/AppCardHeader'
import AppInfoBox from 'components/AppInfoBox'
import AppDescBox from 'components/AppDescBox'
import Certifications from 'components/Certifications'
import LocationBox from 'components/LocationBox'
import Divider from 'components/Divider'
import ChartBox from 'components/ChartBox'
import ReviewerBox from 'components/ReviewerBox'
import ClientsPortfolios from 'components/ClientsPortfolios'
const route = useRoute()
const show = ref(false)
const data = ref({})
let temData = await import.meta.glob('/api/*.json')[`/api/${route.params.id}.json`]()
data.value = temData.default[0]
useHead({
  script: [
    {

    }
  ]
})
show.value = true
const colors = [
  "#00bfa9",
  "#07b1ad",
  "#0da4b0",
  "#1496b4",
  "#1b89b7",
  "#227bbb",
  "#286ebe",
  "#2f60c2",
  "#4459b8",
  "#5a52ae",
  "#6f4ba4",
  "#85459a",
  "#9a3e90",
  "#b03786"]
</script>

<template>
  <div v-if="show" style="padding: 0 10px;">

    <AppCardHeader :data="data" />

    <p><b>Overview</b></p>
    <AppInfoBox :data="data" />

    <AppDescBox :data="data" />

    <p><b>Certifications</b></p>

    <Certifications :data="data" />

    <LocationBox :data="data" />

    <Divider />

     <p><b>Focus Area</b></p>

    <ChartBox :data="data" typeName="Service Focus" type="service_focus"/>

    <Divider />

    <ChartBox :data="data" typeName="Client Focus" type="client_focus"/>

    <Divider />

    <ChartBox :data="data" typeName="Industries Focus" type="industries_focus"/>

    <Divider />

    <p><b>Customer Reviews</b></p>
    <div class="reviewer-score"><span class="reviewer-star">★★★★★</span>&nbsp;<span>5.0&nbsp;(76 Reviews)</span></div>

    <template v-for="item in data.customer_reviews" :key="item">
      <ReviewerBox :item="item" />
    </template>


    <ClientsPortfolios :data="data"/>
  </div>
</template>

