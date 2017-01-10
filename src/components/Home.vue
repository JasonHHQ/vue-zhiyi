<template lang="pug">
  .home
    h1 home page
</template>

<script>
export default {
  name: 'home',
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
  .home
    margin-top 7vh

</style>
