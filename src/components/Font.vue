<template lang="pug">
  .font
    .font-title Proxima dova
    .font-list
      mixin font-content
        .zi a b c d e f g h j
        .daz A B C D E F G H I
        .shu 1 2 3 4 5 6 7 8 9 0
      .light 
        +font-content
      .light.italic
        +font-content
      .regular
        +font-content
      .regular.italic
        +font-content
      .semibold
        +font-content
      .semibold.italic
        +font-content
      .bold
        +font-content
      .bold.italic
        +font-content
      .extrabold
        +font-content
      .black
        +font-content
      .cond.light
        +font-content
      .cond.light.italic
        +font-content
      .cond.regular
        +font-content
      .cond.regular.italic
        +font-content
      .cond.semibold
        +font-content
      .cond.semibold.italic
        +font-content
</template>

<script>
export default {
  name: 'font',
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
  .cond
    font-family proxima-dova-cond
  .italic
    font-style italic
  .light
    font-weight 300
  .regular
    font-weight 400
  .semibold
    font-weight 600
  .bold
    font-weight 700
  .extrabold
    font-weight 800
  .black
    font-weight 900
</style>
