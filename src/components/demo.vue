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
    this.$emit('get-theme', this.theme)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .demo
    margin-top 7vh
</style>
