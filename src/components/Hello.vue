<template lang="pug">
  .hello
    .banner
      img
      .text-content
        .title Learn and know
        .text Wellcom to the homepage of zhiyi
    .project-list

</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      theme: 'light'
    }
  },
  mounted () {
    this.$emit('get-theme', this.theme)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import '../assets/stylus/color'
  .banner
    width 100%
    height 100vh
    img
      width 100%
      height 100%
      background url('../assets/images/home.jpg') no-repeat
      background-size 100% 100%
      @media (max-width: 767px)
        background url('../assets/images/home-mobile.jpg') no-repeat
        background-size 100% 100%
    .text-content
      position absolute
      bottom 0
      width inherit
      height inherit
      display flex
      flex-direction column
      justify-content center
      background rgba(c-forceblue, 0.25)
      font-weight 300
      .title
        color darken(c-white, 6%)
        font-size 3rem
        margin-bottom 0.5rem
      .text 
        color darken(c-white, 6%)
        font-size 1.5rem
      @media (max-width: 767px)
        .title
            font-size 3.5rem
        .text 
            font-size 1.5rem
</style>
