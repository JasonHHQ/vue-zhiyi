<template lang="pug">
  .simple
    | Simple
</template>

<script>
export default {
  name: 'template',
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
  .simple
    line-height 40vh
</style>
