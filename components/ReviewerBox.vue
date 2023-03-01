<script setup lang="ts" >
defineProps<{ data: any }>();
const show = ref(false)
</script>
<template>
  <div class="reviewer-box" :class="{ '-more': show }">
    <p class="reviewer-title">
      {{ item.short_describe }}
    </p>
    <div class="reviewer-box-header">
      <img :src="item.head_portrait" alt="" class="reviewer-avatars" />
      <div>
        <div class="reviewer-name">{{ item.name }}</div>
        <div class="reviewer-position">{{ item.position }}</div>
        <div class="reviewer-time">{{ item.date }}</div>
      </div>
    </div>
    <p class="reviewer-desc-short">
      {{ item.describe }}
    </p>
    <div class="reviewer-divider"></div>
    <template v-if="show">

      <p class="reviewer-title">Pros&nbsp;:</p>
      <ul class="reviewer-pros-ul">
        <li v-for="el in item.pros" :key="el">
          <p>
            {{ el }}
          </p>
        </li>
      </ul>
      <div class="reviewer-divider"></div>
      <p class="reviewer-title">Cons&nbsp;:</p>
      <ul class="reviewer-cons-ul">
        <li v-for="el in item.cons" :key="el">
          <p>
            {{ el }}
          </p>
        </li>
      </ul>
      <div class="reviewer-divider"></div>
      <div class="reviewer-rating">
        <div class="reviewer-rating-list" v-for="el in Object.keys(item.score)" :key="el">
          <div>{{ el.replaceAll('_', ' ') }}</div>
          <div class="reviewer-star">★★★★★</div>
        </div>

      </div>
      <div class="odometer-graph-box">
        <div class="odometer-graph">
          <div class="odometer-circle-box">
            <div class="odometer-circle">
              <div class="odometer-circle-part"></div>
              <div class="odometer-circle-part"></div>
              <div class="odometer-circle-part"></div>
              <div class="odometer-circle-part"></div>
              <div class="odometer-circle-part"></div>
              <div class="odometer-circle-part"></div>
              <div class="odometer-circle-part"></div>
              <div class="odometer-circle-part"></div>
              <div class="odometer-circle-part"></div>
              <div class="odometer-circle-part"></div>
              <div class="odometer-inner-circle">
                <span class="odometer-score">10</span>
                <span>User Score</span>
              </div>
              <div class="odometer-arrow"></div>
              <div class="odometer-transparent-circle"></div>
            </div>
          </div>
        </div>
        <div class="odometer-label">User Recommendation Score</div>
      </div>
    </template>

    <div class="show-more-review-btn" @click="show = !show">
      <svg xmlns="http://www.w3.org/2000/svg" width="21px" height="11px" viewBox="0 0 21 11" :style="{transform: show ? 'rotate(180deg)' : ''}">
        <use xlink:href="#svg_arrow"></use>
      </svg>
    </div>
  </div>

  <div class="reviewer-divider"></div>
</template>
