<template>
  <div class="loader" v-bind:class="{fadeout: !isLoading}">
    Loading ...
  </div>
</template>
<script>
import {mapState, mapActions, mapMutations} from 'vuex';
import store from '../../store';
export default {
  name: "splash-layout",
  computed: {
    ...mapState('navigation', ['isLoading'])
  },
  methods: {
    activate() {
      setTimeout(() => store.commit('navigation/value', {type: 'isLoading', value: false}), 500);
    }
  },
  mounted() {
    this.activate();
  }
};
</script>
