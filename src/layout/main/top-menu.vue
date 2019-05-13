<template>
  <div class="top-menu" v-if="showTopMenu">
    <div class="icon-link align-left" v-if="backLink">
      <router-link :to="backLink">
        <div class="icon arrow-left-icon"></div>
      </router-link>
    </div>

    <div class="menu-title" v-if="menuTitle">
      <p>{{$ub.i18n('menuTitle')}}</p>
    </div>

    <div class="approval-button" v-if="approvalButton">
     <button class="left" v-on:click="1">{{$ub.i18n('menu_reject_button')}}</button>
     <button class="right" v-on:click="1">{{$ub.i18n('menu_approval_button')}}</button>

    </div>
    <div class="icon-link align-right" v-if="moreButton">
      <router-link :to="backLink">
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
    ...mapState('navigation', ['menuTitle', 'backLink', 'approvalButton', 'showTopMenu', 'moreButton'])
  }
}
</script>
<style lang="scss">
.top-menu {
		display: flex;
		align-items: center;
		height: 56px;
  }

.icon-link {
    display: flex;
    flex-direction: row;
    align-items: center;
  .icon {
      width: 24px;
      height: 24px;
  }
}
.align-left{
  margin-left: 16px;
  margin-right: auto;
}
.align-right{
  margin-left: auto;
  margin-right: 16px;
}

.menu-title{
  font-family: sans-serif;
  font-size: 20px;
  margin-left: 16px;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.3px;
  color: rgba(0, 0, 0, 0.87);
}
.approval-button{
  .right{
    border-bottom-right-radius: 12px;
    border-top-right-radius: 12px;
    width: 96px;
    height: 24px;
    border: solid 1px;
    background-color: #4a90e2;
    border-color: #4a90e2;
    color: #ffffff;
    font-size: 12px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    font-family: sans-serif;
    line-height: 1.67;
    letter-spacing: 0.2px;
    text-align: center;
  }
  .left{
    border-bottom-left-radius: 12px;
    border-top-left-radius: 12px;
    width: 96px;
    height: 24px;
    border: solid 1px;
    background-color: transparent;
    border-color: #e04140;
    color: #e04140;
    font-size: 12px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    font-family: sans-serif;
    line-height: 1.67;
    letter-spacing: 0.2px;
    text-align: center;
  }

}

button:focus {
    outline:0;
}
button:active {
    transform: scale(0.9);
}
</style>
