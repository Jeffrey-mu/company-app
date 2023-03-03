<script setup>
import Divider from 'components/Divider'
import { useCompanyState } from '../../composables/details'
const show = ref(false)
const [data, LAYOUT_DETAILS] = await useCompanyState()

show.value = true

</script>

<template>
  <div v-if="show" style="padding: 0 10px;">
    <template v-for="item in LAYOUT_DETAILS">
      <component v-if="typeof item !== 'string' && item.component_type !== 'other'" :is="item" :data="data" />
      <template v-else-if="item.component_type == 'other'" v-for="otherItem in item.props">
        <component :is="item.component" v-bind="otherItem" :data="data" />
        <Divider />
      </template>
      <div v-else v-html="item" />
    </template>
  </div>
</template>

