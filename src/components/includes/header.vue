<template lang="pug">
  header
    router-link(to="/").logo
      img.black(src="../../assets/images/logo-zhiyi-black.png", alt="")
      img.white(src="../../assets/images/logo-zhiyi-white.png", alt="")
      | ZHIYI
    ul.menu
      router-link(to="/home" tag="li") home
      router-link(to="/demo" tag="li") demo
</template>

<script>
export default {
  name: 'header',
  components: {
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../assets/stylus/color'
  .logo
    display flex
    flex-direction row
    align-items center
    padding 0 1.5rem
    font-size 1.4rem
    font-weight 400
    height inherit
    img
      display none
      height 2.5rem
      margin-right .5rem
      .light &.white
      .dark &.black
        display block
  .menu
    display flex
    height inherit
    line-height @height
    margin-left 5rem
    li
      padding 0 1.5rem
      cursor pointer
      border-top 0.2rem solid transparent
      transition border-top-color 0.8s ease
      &.z-link-active
        border-top-color c-link-active
</style>