<template lang="pug">
  .footer
    .footer__header
      span Contando los dias
    .footer__links
      router-link(:to="{name:'conocernos'}") de Encontrarnos
      router-link(:to="{name:'juntos'}") Juntos
      router-link( v-if="showVernos" :to="{name:'vernos'}") Para Verte
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    showVernos() {
      return new Date(2021, 3, 17, 8, 0, 0, 0) >= new Date()
    },
  },
}
</script>

<style lang="sass" scoped>
.footer
  padding: 10px 0
  position: relative
  display: flex
  flex-direction: column
  align-items: center

.footer__header
  text-align: center
  padding-bottom: 5px

.footer__links
  display: flex
  width: 100%
  max-width: 400px
  justify-content: space-around

  a
    text-decoration: none
</style>
