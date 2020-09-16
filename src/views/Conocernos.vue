<template lang="pug">
  .contador
    .main-container(v-if="days" :class="{'fade-in':loading}")
      .days__container
        .wings__container
          .wing.wing--left
            img(src="../assets/ala-izq.svg")
          .wing.wing--right
            img(src="../assets/ala-der.svg")
        .shield__container
          .shield
            img(:src="`shields/escudo-0${propNumber}.svg`")
          .days
            h1 {{days.toLocaleString()}}

      .time__main__container
        .time__container
          .time__number
            h2 {{hours}}
          .time__sub-text
            h3 Horas
        .time__container
          .time__number
            h2 {{minutes}}
          .time__sub-text
            h3 Minutos
        .time__container
          .time__number
            h2 {{seconds}}
          .time__sub-text
            h3 Segundos

      .text
        h1 {{selectedPhrase}}

</template>

<script>
import mixins from '../mixins/mixins'
export default {
  name: 'DeConocernos',
  props: {
    selectedColors: {
      type: Object,
      default: () => ({})
    },
    propNumber: {
      type: Number,
      default: 0
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  mixins: [mixins],
  data: () => ({
    timeOut: null,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    phrases: [
      'Desde que dios me permitió encontrarte',
      'Desde que nuestros universos se cruzaron',
      'Desde que se me hizo el milagrito',
      'Desde que la mujer de mi vida se me reveló',
      'Desde que me haces feliz',
      'Desde que mi vida es más linda gracias a ti',
      'Desde que me cambiaste la vida',
      'Desde que me iluminas la vida',
      'Desde que mi vida se ve de colores',
      'Desde que tengo el privilegio de conocer a la mujer de mi vida',
      'Desde que nuestros corazones se agarraron de la mano'
    ]
  }),
  created() {
    this.timeOut = setInterval(this.updateDateTime, 1000)
  },
  beforeDestroy() {
    clearInterval(this.timeOut)
  },
  computed: {
    selectedPhrase() {
      const randomNum = Math.floor(Math.random() * this.phrases.length)
      return this.phrases[randomNum]
    }
  },
  methods: {
    updateDateTime() {
      const now = new Date()
      const firstDate = new Date(2020, 5, 24, 17, 27, 0)
      const timeCalculated = this.timeCalculation(now, firstDate)
      this.days = timeCalculated.days
      this.hours = timeCalculated.hours
      this.minutes = timeCalculated.minutes
      this.seconds = timeCalculated.seconds
    }
  }
}
</script>

<style lang="sass"></style>
