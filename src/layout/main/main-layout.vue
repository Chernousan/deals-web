<template>
  <div id="app">
    <top-menu/>
		<router-view :key="$route.fullPath"></router-view>
    <bottom-menu/>
  </div>
</template>

<script>
import Top from './top-menu.vue';
import Bottom from './bottom-menu.vue';
export default {
  name: 'main-layout',
  components: {
    'top-menu': Top,
    'bottom-menu': Bottom
  }
}
</script>
