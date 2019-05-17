<template>
  <div class="bottom-menu" v-bind:class="{'modal-mask': showFullMenu}" v-touch:swipe="swipeUpDown" v-show="showBottomMenu" @click="menuOpenClose">
    <div v-if="!showFullMenu" class="bottom-menu-small icon-link" @click.stop>
      <div class="icon menu-hamburger-icon align-menu-icon" v-on:click="menuOpenClose"/>
      <div class="icon-link" v-if="bottomMenuEditButton">
        <div class="icon menu-download-icon align-menu-icon"/>
        <div class="icon menu-edit-icon align-menu-icon"/>
        <div class="icon menu-delete-icon align-menu-icon"/>
      </div>
      <button  class="big-button menu-enable-icon set-big-button-icon float" v-if="bottomMenuBigButton"></button>
      <div class="icon-link  align-right" v-if="bottomMenuFindButton">
        <div class="icon menu-find-icon"/>
      </div>
    </div>
    <transition name="slide-fade">
      <div v-if="showFullMenu"  v-bind:class="{'bottom-menu-full': showFullMenu}" @click.stop >
        <div class="modal-content" >
          <div  class="bottom-menu-modal-header icon-link ">
             <div class="menu-anonym-icon  set-big-icon"></div>
             <div class="bottom-top-menu-block-text">
               <div class="bottom-top-menu-block-text-user-name">{{$ub.i18n(userName)}}</div>
               <div class="bottom-top-menu-block-text-organosation">{{$ub.i18n(userOrganisation)}}</div>
             </div>
              <router-link to="/login" class="icon menu-logout-icon  align-right"></router-link>
          </div>
          <div  class="bottom-menu-modal-body">
            <nav  v-on:click="menuOpenClose">
              <menu-button icon="icon menu-deal-icon align-bottom-menu-icon" label="bottom_menu_title_myDeal" :budgeValue="newDeal" route="/deal"/>
              <menu-button icon="icon menu-task-icon align-bottom-menu-icon" label="bottom_menu_title_myTask" :budgeValue="newTask" route="/task"/>
              <menu-button icon="icon menu-invite-icon align-bottom-menu-icon" label="bottom_menu_title_myInvite" route="/invite"/>
              <menu-button icon="icon menu-file-icon align-bottom-menu-icon" label="bottom_menu_title_myFile" route="/file"/>
              <menu-button icon="icon menu-archive-icon align-bottom-menu-icon" label="bottom_menu_title_myArchive" route="/archive"/>
              <div class="divider"/>
              <menu-button icon="icon menu-wallet-icon align-bottom-menu-icon" label="bottom_menu_title_myWallet" route="/wallet"/>
              <menu-button icon="icon menu-settings-icon align-bottom-menu-icon" label="bottom_menu_title_mySettings" route="/settings"/>
              <menu-button icon="icon menu-add-user-icon align-bottom-menu-icon" label="bottom_menu_title_myAddUser" route="/add_user"/>
              <menu-button icon="icon menu-support-icon align-bottom-menu-icon" label="bottom_menu_title_mySupport" route="/support"/>
            </nav>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import Button from '../../components/common/menu-button.vue';
export default {
  name: 'bottom-menu',
  components: {
    'menu-button': Button
  },
  data: function(){
    return{
      showFullMenu: false
    }
  },
  computed: {
    ...mapState('navigation', ['showBottomMenu', 'bottomMenuEditButton', 'bottomMenuBigButton', 'bottomMenuFindButton', 'userName', 'userOrganisation','newTask', 'newDeal'])
  },
  methods: {
    menuOpenClose: function(){
      this.showFullMenu ? this.showFullMenu = false : this.showFullMenu = true;
    },
    swipeUpDown: function(direction){
      direction == "bottom" ? this.showFullMenu = false : this.showFullMenu = true;
    }
  }
}
</script>
