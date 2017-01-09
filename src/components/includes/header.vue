<template lang="pug">
  header
    router-link(to="/").logo
      img(src="../../assets/images/logo-zhiyi.png", alt="")
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
    width 5.5rem
    height inherit
    img
      height 2.5rem
      margin-left 1.5rem
      margin-right .5rem
  .menu
    display flex
    height 4rem
    line-height @height
    margin-left 5rem
    li
      width 4rem
      border-top 0.2rem solid transparent
      &.z-link-active
        border-top-color c-link-active
</style>