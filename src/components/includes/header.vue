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
    height inherit
    padding 0 1rem
    margin-left 8rem
    font-size 1.3rem
    font-weight 400
    @media (max-width: 767px)
      margin-left 0.5rem
    img
      display none
      height 2rem
      margin-right .5rem
      .light &.white
      .dark &.black
        display block
  .menu
    display flex
    flex-direction row
    justify-content flex-end
    margin-right 9rem
    width 100%
    height inherit
    line-height @height
    li
      padding 0 2rem
      cursor pointer
      border-top 0.2rem solid transparent
      transition border-top-color 0.8s ease
      &.z-link-active
        border-top-color c-link-active
    @media (max-width: 767px)
      margin-right 1.5rem
      li
        padding 0 1rem
</style>