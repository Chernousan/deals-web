<template>
  <div id="shell" class="shell">
    <div class="layout">
      <splash-layout/>
      <router-view v-if="!isLoading"/>
    </div>
  </div>
</template>
<script>
import SplashLayout from './splash';
import {mapState} from 'vuex';
export default {
  components: {
    'splash-layout': SplashLayout
  },
  name: 'shell',
  data() {
    return{
    }
  },
  computed: {
    ...mapState('navigation', ['isLoading'])
  }
}
</script>
