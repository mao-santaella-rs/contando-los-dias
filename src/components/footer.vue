<template lang="pug">
  .footer
    .footer__header
      span Contando los dias
    .footer__links
      router-link(:to="{name:'conocernos'}") /de Encontrarnos
      router-link(:to="{name:'vernos'}") /para Verte
</template>

<script>
export default {
  name: 'footer'
}
</script>

<style lang="sass" scoped>
.footer
  padding: 10px 0
  position: relative

.footer__header
  text-align: center
  padding-bottom: 5px

.footer__links
  display: flex
  justify-content: space-around

  a
    text-decoration: none
</style>
