<template lang="pug">
  footer(:class="footTheme")
    .footer-main
      .reg © 2017 ZHIYI. Created by Jason Huang.
      a.record(href="//www.miibeian.gov.cn/" target="_blank" rel="nofollow me noopener noreferrer") 粤ICP备17001438号
</template>

<script>
export default {
  name: 'footer',
  props: {
    footTheme: {
      type: String
    }
  }
}
</script>

<style lang="stylus" scoped>
  footer
    display table
  .footer-main
    display table-cell
    vertical-align middle
    .reg 
      margin-bottom 0.2rem
</style>