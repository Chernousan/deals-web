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
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 0;
  display: flex;
  overflow: auto;
  background-color: #4A90E2;
  color: white;
  font-size: 32px;
  overflow: hidden;
  padding-top: 50%;
  justify-content: center;
  text-align: center;

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
