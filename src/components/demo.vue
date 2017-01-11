<template lang="pug">
  .demo
    h1 demo page 字體
</template>

<script>
export default {
  name: 'demo',
  data () {
    return {
      theme: 'dark'
    }
  },
  mounted () {
    this.$emit('app-theme', this.theme)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .demo
    position absolute
    left 0
    right 0
    top 7vh
</style>
