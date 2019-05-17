<template>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <g fill="none" fill-rule="evenodd">
              <circle cx="12" cy="12" r="9.5" fill="#C75B5A" stroke="#FFF" stroke-opacity=".64"/>
              <text text-anchor="middle" fill="#FFF" fill-opacity=".87" font-family="Roboto-Medium, Roboto" font-size="12" font-weight="400" letter-spacing=".214">
                  <tspan x="12" y="16" >{{count}}</tspan>
              </text>
          </g>
      </svg>
</template>

<script lang="js">
import '../../assets/styles/styles.scss';

export default {
  name: 'budge',
  props: {
    count: null
  }
}
</script>
<style>
</style>
