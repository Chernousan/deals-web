<template>
  <div id="shell" class="shell">
    <div class="layout">
      <splash-layout/>
      <div class="layout-container" v-if="!isLoading">
        <router-view/>
      </div>
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
<style>
.shell {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 0;
}
.layout{
    position: relative;
    margin: auto;
    max-width: 990px;
    width:100%;
    min-width: 360px;
    height: 100%;
}
.layout-container{
  
}
</style>
