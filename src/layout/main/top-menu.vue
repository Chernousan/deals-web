<template>
  <div class="top-menu" v-if="showTopMenu">
    <div class="icon-link align-left" v-if="topMenuBackLink">
      <router-link :to="topMenuBackLink">
        <div class="icon arrow-left-icon"></div>
      </router-link>
    </div>
    <div class="menu-title" v-if="topMenuTitle">
      <p>{{$ub.i18n(topMenuTitle)}}</p>
    </div>
    <div class="approval-button" v-if="topMenuApprovalButton">
     <button class="left" v-on:click="1">{{$ub.i18n('menu_reject_button')}}</button>
     <button class="right" v-on:click="1">{{$ub.i18n('menu_approval_button')}}</button>
    </div>
    <div class="icon-link align-right" v-if="topMenuMoreButton">
      <router-link :to="topMenuBackLink">
         <div class="icon more-vertical-icon"></div>
      </router-link>
    </div>

  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: 'top-menu',
  computed: {
    ...mapState('navigation', ['topMenuTitle', 'topMenuBackLink', 'topMenuApprovalButton', 'showTopMenu', 'topMenuMoreButton'])
  }
}
</script>
<style>
</style>
