<template>
  <div :class="{ loader: true, fadeout: !isLoading }">
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

<style>
.loader {
  background-color: #63ab97;
  bottom: 0;
  color: white;
  display: block;
  font-size: 32px;
  left: 0;
  overflow: hidden;
  padding-top: 10vh;
  position: fixed;
  right: 0;
  text-align: center;
  top: 0;
}

.fadeout {
  animation: fadeout 1s forwards;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
