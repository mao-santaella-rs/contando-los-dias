<template lang="pug">
  .contador
    .main-container(v-if="days")
      .days__container
        .shield__container
          .shield
            img(src="../assets/frame.svg")
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
  name: 'ParaVernos',
  mixins: [mixins],
  props: {
    selectedColors: {
      type: Object,
      default: () => ({}),
    },
    propNumber: {
      type: Number,
      default: 0,
    },
  },
  data: () => ({
    timeOut: null,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    phrases: [
      'Para volver a besarte',
      'Para hacerte el amor de nuevo',
      'Para acariciarte en las noches',
      'Para agarrarte de la mano',
      'Para besarte de nuevo',
    ],
  }),
  computed: {
    selectedPhrase() {
      const randomNum = Math.floor(Math.random() * this.phrases.length)
      return this.phrases[randomNum]
    },
  },
  created() {
    this.timeOut = setInterval(this.updateDateTime, 1000)
  },
  beforeDestroy() {
    clearInterval(this.timeOut)
  },
  methods: {
    updateDateTime() {
      const now = new Date()
      const firstDate = new Date(2021, 3, 17, 8, 0, 0)
      const timeCalculated = this.timeCalculation(firstDate, now)
      this.days = timeCalculated.days
      this.hours = timeCalculated.hours
      this.minutes = timeCalculated.minutes
      this.seconds = timeCalculated.seconds
    },
  },
}
</script>

<style lang="sass" scoped>
.shield
  filter: drop-shadow(5px 10px 5px rgba(0,0,0,.2))

.days
  top: 43%
  h1
    font-size: 16em


@media screen and (max-width: 600px)
  .days
    h1
      font-size: 14em

@media screen and (max-width: 450px)
  .shield
    width: 75%
    filter: drop-shadow(5px 5px 5px rgba(0,0,0,.2))
  .days
    h1
      font-size: 12em
</style>
