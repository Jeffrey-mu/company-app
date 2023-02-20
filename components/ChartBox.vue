<script>
export default {
  props: ['data', 'typeName', 'type'],
  data() {
    return {
      colors: [
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
    }
  }
}
</script>
<template>
  <div class="chart-box" v-if="data.focus_area[type]">
    <p class="reviewer-title">{{ typeName }}</p>
    <div class="chart-bar-box">
      <div v-for="item, index in data.focus_area[type]" :key="item"
        :style="{ width: item.count + '%', backgroundColor: colors[index] }"></div>
    </div>
    <div class="chart-legend-box">
      <div class="chart-text-box" v-for="item, index in data.focus_area[type]" :key="item">
        <div class="chart-dot" :style="{ backgroundColor: colors[index] }"></div>
        <div class="chart-text">{{ item.label }}</div>
        <div class="chart-per">{{ item.count }}%</div>
      </div>
      <div class="show-more-legend-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="21px" height="11px" viewBox="0 0 21 11">
          <use xlink:href="#svg_arrow"></use>
        </svg>
      </div>
    </div>
  </div>
</template>
