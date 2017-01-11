<template lang="pug">
  .hello
    .banner
      img
      .text-content
        .title Learn and know
        .text Wellcom to the homepage of zhiyi
    .project-title
      | Project List
    .project-group
      .project
        .title 
          .text Test 1<br>Huu<br>oo
        .des.des-left Gyqiuh hwqyahw didbwqu qywuqbi wuqwv awhqw jkqwudq wbq dqjdyqd quqif
      .project
        .title 
          .text Test 2<br>Huuuuu
        .des.des-right Gyqiuh hwqyahw didbwqu qywuqbi wuqwv awhqw jkqwudq wbq dqjdyqd quqif
      .project
        .title 
          .text Test 3<br>Huuuuu
        .des.des-left Gyqiuh hwqyahw didbwqu qywuqbi wuqwv awhqw jkqwudq wbq dqjdyqd quqif
    .project-group
      .project
        .title 
          .text Test 4<br>Huuuuu
        .des.des-right Gyqiuh hwqyahw didbwqu qywuqbi wuqwv awhqw jkqwudq wbq dqjdyqd quqif
      .project
        .title 
          .text Test 5<br>Huuuuu
        .des.des-left Gyqiuh hwqyahw didbwqu qywuqbi wuqwv awhqw jkqwudq wbq dqjdyqd quqif
      .project
        .title 
          .text Test 6<br>Huuuuu
        .des.des-right Gyqiuh hwqyahw didbwqu qywuqbi wuqwv awhqw jkqwudq wbq dqjdyqd quqif
    .project-group
      .project
        .title 
          .text Test 7<br>Huuuuu
        .des.des-left Gyqiuh hwqyahw didbwqu qywuqbi wuqwv awhqw jkqwudq wbq dqjdyqd quqif
      .project
        .title 
          .text Test 8<br>Huuuuu
        .des.des-right Gyqiuh hwqyahw didbwqu qywuqbi wuqwv awhqw jkqwudq wbq dqjdyqd quqif
      .project
        .title 
          .text Test 9<br>Huuuuu
        .des.des-left Gyqiuh hwqyahw didbwqu qywuqbi wuqwv awhqw jkqwudq wbq dqjdyqd quqif
    .project-end
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
    this.$emit('app-theme', this.theme)
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll (e) {
      if (this.getPageScroll().scrollY > 100) {
        this.theme = 'dark'
      } else {
        this.theme = 'light'
      }
      this.$emit('app-theme', this.theme)
    },
    getPageScroll () {
      var x, y
      if (window.pageYOffset) { // all except IE
        y = window.pageYOffset
        x = window.pageXOffset
      } else if (document.documentElement && document.documentElement.scrollTop) { // IE 6 Strict
        y = document.documentElement.scrollTop
        x = document.documentElement.scrollLeft
      } else if (document.body) { // all other IE
        y = document.body.scrollTop
        x = document.body.scrollLeft
      }
      return {scrollX: x, scrollY: y}
    }
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
      background url('../assets/images/hello.jpg') no-repeat
      background-size 100% 100%
      @media (max-width: 767px)
        background url('../assets/images/hello-mobile.jpg') no-repeat
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
  .project-title
    font-size 2rem
    color darken(c-forceblue, 10%)
    margin 7rem 0 5rem
  .project-group
    width 100%
    height 40rem
    .project
      height 30%
      display flex
      align-items center
      justify-content center
      color c-font-l
      w = 6.8rem
      .title
        height h=(w/1.732)
        width w
        background-image linear-gradient(180deg, darken(c-forceblue, 15%), darken(c-blue, 15%))
        font-size 1rem
        display flex
        flex-direction row
        align-items center
        justify-content center
        .text
          color c-font-d
          width w
          margin-left -(w)
        &:before
        &:after
          content ""
          border-left (w/2) solid transparent
          border-right (w/2) solid transparent
        &:before
          border-bottom (h/2) solid darken(c-forceblue, 15%)
          margin-top -(3*h/2)
        &:after 
          border-top (h/2) solid darken(c-blue, 15%)
          margin-top (3*h/2)
          margin-left -(w)
      
      .des
        position absolute
        width 30rem
        line-height 1.2
        &.des-left
          left 9rem
        &.des-right
          right 9rem
  .project-end
    margin-top  -40vh
    width 100%
    height 100vh
    background url('../assets/images/hello-footer.jpg') no-repeat
      
</style>
