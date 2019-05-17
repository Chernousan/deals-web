<template>
    <div class="button-block" >
       <router-link :to="route" class="icon-link button-block-content">
         <div :class="icon"></div>
         <div class="content-block-button-text">
           {{$ub.i18n(label)}}
         </div>
         <div class="icon align-bottom-menu-icon-right">
           <budge v-if="budgeValue" :count="budgeValue"/>
         </div>
       </router-link>
    </div>

</template>

<script lang="js">
import '../../assets/styles/styles.scss';
import Budge from'../../components/common/budge.vue';

export default {
  name: 'menu-button',
  props:{
    icon: null,
    label: null,
    budgeValue: null,
    route: null
  },
  components: {
    'budge': Budge

  }
}
</script>
<style lang="scss">
.button-block{
}
.button-block-content{
  background: #FFF;
  border-radius: 8px;
  height: 40px;
  padding-top: 0px;
  padding-bottom: 0px;
  margin-top: 4px;
  margin-bottom: 4px;
  text-decoration: none;
  color: #9A9A9A;
}

.active, .button-block:hover {
    background: #65a1fd;
    border-radius: 8px;
    height: 40px;
    padding-top: 0px;
    padding-bottom: 0px;
    margin-top: 4px;
    margin-bottom: 4px;
    text-decoration: none;
    color: #FFF;
}

.button-block:hover {
    background: #FFF;
    border-radius: 8px;
    height: 40px;
    padding-top: 0px;
    padding-bottom: 0px;
    margin-top: 4px;
    margin-bottom: 4px;
    text-decoration: none;
    color: #FFF;
}

.align-bottom-menu-icon{
  margin-left: 8px;
  margin-right: 32px;
}
.align-bottom-menu-icon-right{
  margin-left: auto;
  margin-right: 8px;
}

</style>
