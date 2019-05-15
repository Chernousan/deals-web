<template>
  <div id="main">
    <top-menu/>
    <router-view  class="router-conteiner" :key="$route.fullPath"></router-view>
    <bottom-menu/>
  </div>
</template>

<script lang="js">
import Top from './top-menu.vue';
import Bottom from './bottom-menu.vue';
import '../../assets/styles/styles.scss';

export default {
  name: 'main-layout',
  components: {
    'top-menu': Top,
    'bottom-menu': Bottom
  }
}
</script>
<style>
</style>
