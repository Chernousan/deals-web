<template>
  <div class="container bottom-menu"
        v-bind:class="{'bottom-menu-small': !halfMenu,
                       'modal-mask': halfMenu && !fullMenu,
                       'bottom-menu-full': fullMenu}"
        v-touch:swipe="swipeUpDown"
        v-show="showBottomMenu"
        @click="closeMenu"
        >

    <div v-if="!halfMenu" class="icon-link" @click.stop>
      <div class="icon menu-hamburger-icon align-menu-icon" v-on:click="closeMenu"></div>
      <div class="icon-link" v-if="bottomMenuEditButton">
        <div class="icon menu-download-icon align-menu-icon"></div>
        <div class="icon menu-edit-icon align-menu-icon"></div>
        <div class="icon menu-delete-icon align-menu-icon"></div>
      </div>
      <button  class="big-button menu-enable-icon set-big-button-icon float" v-if="bottomMenuBigButton"></button>
      <div class="icon-link  align-right" v-if="bottomMenuFindButton">
        <div class="icon menu-find-icon"></div>
      </div>
    </div>


    <div v-show="halfMenu"  v-bind:class="{'bottom-menu-half': halfMenu && !fullMenu}" @click.stop >
      <div class="modal-content" >
        <div  class="bottom-menu-modal-header icon-link ">
           <div class="menu-anonym-icon  set-big-icon"></div>
           <div class="bottom-top-menu-block-text">
             <div class="bottom-top-menu-block-text-user-name">
                 {{$ub.i18n(userName)}}
             </div>
             <div class="bottom-top-menu-block-text-organosation">
               {{$ub.i18n(userOrganisation)}}
             </div>
           </div>
            <router-link to="/login" class="icon menu-logout-icon  align-right"></router-link>
        </div>

        <div  class="bottom-menu-modal-body">
          <nav>
            <div class="content-block" v-on:click="closeMenu" >
               <router-link to="/deal" class="icon-link content-block-button">
                 <div class="icon menu-deal-icon align-bottom-menu-icon"></div>
                 <div class="content-block-button-text">
                   {{$ub.i18n('bottom_menu_title_myDeal')}}
                 </div>
                 <div class="icon menu-budge-icon align-bottom-menu-icon-right"></div>
               </router-link>
            </div>
            <div class="content-block" v-on:click="closeMenu">
               <router-link to="/task" class="icon-link content-block-button">
                 <div class="icon menu-task-icon align-bottom-menu-icon"></div>
                 <div class="content-block-button-text">
                   {{$ub.i18n('bottom_menu_title_myTask')}}
                 </div>
                <div class="icon menu-budge-icon align-bottom-menu-icon-right"></div>
               </router-link>
            </div>
            <div class="content-block" v-on:click="closeMenu">
              <router-link to="/invite" class="icon-link content-block-button">
                <div class="icon menu-invite-icon align-bottom-menu-icon"></div>
                <div class="content-block-button-text">
                  {{$ub.i18n('bottom_menu_title_myInvite')}}
                </div>
              </router-link>
            </div>
            <div class="content-block" v-on:click="closeMenu">
              <router-link to="/file" class="icon-link content-block-button">
                <div class="icon menu-file-icon align-bottom-menu-icon"></div>
                <div class="content-block-button-text">
                  {{$ub.i18n('bottom_menu_title_myFile')}}
                </div>
              </router-link>
            </div>
            <div class="content-block" v-on:click="closeMenu">
               <router-link to="/archive" class="icon-link content-block-button">
                  <div class="icon menu-archive-icon align-bottom-menu-icon"></div>
                  <div class="content-block-button-text">
                    {{$ub.i18n('bottom_menu_title_myArchive')}}
                  </div>
                </router-link>
            </div>

            <div v-if="fullMenu">
              <div class="divider"></div>
              <div class="content-block" v-on:click="closeMenu">
                 <router-link to="/wallet" class="icon-link content-block-button">
                   <div class="icon menu-wallet-icon align-bottom-menu-icon"></div>
                   <div class="content-block-button-text">
                     {{$ub.i18n('bottom_menu_title_myWallet')}}
                   </div>
                 </router-link>
              </div>
              <div class="content-block" v-on:click="closeMenu">
                <router-link to="/settings" class="icon-link content-block-button">
                  <div class="icon menu-settings-icon align-bottom-menu-icon"></div>
                  <div class="content-block-button-text">
                    {{$ub.i18n('bottom_menu_title_mySettings')}}
                  </div>
                </router-link>
              </div>
              <div class="content-block" v-on:click="closeMenu">
                <router-link to="/add_user" class="icon-link content-block-button">
                  <div class="icon menu-add-user-icon align-bottom-menu-icon"></div>
                  <div class="content-block-button-text">
                    {{$ub.i18n('bottom_menu_title_myAddUser')}}
                  </div>
                </router-link>
              </div>
              <div class="content-block" v-on:click="closeMenu">
                 <router-link to="/support" class="icon-link content-block-button">
                    <div class="icon menu-support-icon align-bottom-menu-icon"></div>
                    <div class="content-block-button-text">
                      {{$ub.i18n('bottom_menu_title_mySupport')}}
                    </div>
                  </router-link>
              </div>
            </div>
          </nav>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: 'bottom-menu',
  data: function(){
    return{
      halfMenu: false,
      fullMenu: false
    }
  },
  computed: {
    ...mapState('navigation', ['showBottomMenu', 'bottomMenuEditButton', 'bottomMenuBigButton', 'bottomMenuFindButton', 'userName', 'userOrganisation'])
  },
  methods: {
    closeMenu: function(){
      this.halfMenu ? this.halfMenu = false : this.halfMenu = true;
      this.fullMenu = false;
    },
    swipeUpDown: function(direction){

      switch(direction) {
        case 'top':
          this.fullMenu = this.halfMenu;
          this.halfMenu = true;
        break;
        case 'bottom':
          this.halfMenu = this.fullMenu;
          this.fullMenu = false;
        break;
        default:
          this.halfMenu = false;
          this.fullMenu = false;
        break;
      }
    }
  }
}
</script>

<style lang="scss">

.content-block-button-text{
  text-decoration: none;
}
.content-block-button{
  height: 40px;
  padding-top: 0px;
  padding-bottom: 0px;
  margin-top: 4px;
  margin-bottom: 4px;
  display: contents;
  text-decoration: none;
  color: #9A9A9A;
}
.bottom-menu-modal-header{
    height: 78px;
    border-bottom: 2px solid #fafafa;
    width: 100%;
    top: 0px;
}
.bottom-menu-modal-body{
    height: 100%;
    padding-top: 4px;
    height: 236px;
}

.modal-content{
      display: block;
      width: 100%;
      height: 100%;
      font-size: 14px;
      font-weight: 500;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      font-family: sans-serif;
      background: #FFF;
      border-top-left-radius: inherit;
      border-top-right-radius: inherit;
}

.bottom-menu-small{
  border-top: 2px solid #fafafa;
  height: 56px;
}
.bottom-menu-half {
  background-color: #fff;
  height: 320px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  width: 100%;
  position: absolute;
  bottom: 0px;
}

.bottom-menu-full {
  height: 100%;
  overflow: auto;
}

.modal-mask {
  border-top: 0px solid #fafafa;
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
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
