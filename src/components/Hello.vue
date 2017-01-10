<template lang="pug">
  .hello
    img
    .text-content
      .title Learn and know
      .text Wellcom to the homepage of zhiyi
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import '../assets/stylus/color'
  .hello
    width 100%
    height 91vh
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
      background rgba(c-yellow, 0.15)
      font-weight 300
      .title
        color darken(c-white, 6%)
        font-size 5rem
        margin-bottom 1rem
      .text 
        color darken(c-white, 6%)
        font-size 2rem
      @media (max-width: 767px)
        .title
            font-size 3.5rem
        .text 
            font-size 1.5rem
</style>
