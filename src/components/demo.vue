<template lang="pug">
  .demo
    h1 demo page
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
    this.$emit('foot-theme', this.theme)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>
