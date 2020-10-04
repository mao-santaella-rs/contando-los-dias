<template lang="pug">
  .contador
    .main-container(v-if="days" :class="{delay: delay}")
      .days__container(@click="shieldClick")
        .shield__container
          .hearts
            div(v-for="(heart, index) in 20" :key="`heart-${index}`" :class="`heart-${index}`")
              img(:src="`shields/heart.svg`")
          .shield
            img(:src="`shields/heart-${propNumber < 10 ? '0'+propNumber : propNumber }.svg`")
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
        h1 {{phrases[phraseNumber]}}

</template>

<script>
import mixins from '../mixins/mixins'
export default {
  name: 'Juntos',
  props: {
    propNumber: {
      type: Number,
      default: 0
    },
    delay: {
      type: Boolean
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
      'Desde que somos novios',
      'Desde que eres mi mujer',
      'Desde que soy tu hombre',
      'Desde el día que me dijiste sí quiero',
      'Desde el día que no quiero soltar tu mano',
      'Desde que entramos en la aventura más emocionante de mi vida',
      'Desde que mis ojos brillan cuando te ven',
      'Desde que nuestras almas se tomaron de las manos para nunca soltarse',
      'Desde que me siento la persona más afortunada de la tierra',
      'Desde que siento que puedo conquistar el mundo a tu lado'
    ],
    phraseNumber: 0
  }),
  created() {
    this.timeOut = setInterval(this.updateDateTime, 1000)
    this.phraseNumberRandomizer()
  },
  beforeDestroy() {
    clearInterval(this.timeOut)
  },
  methods: {
    updateDateTime() {
      const now = new Date()
      const firstDate = new Date(2020, 7, 2, 18, 0, 0)
      const timeCalculated = this.timeCalculation(now, firstDate)
      this.days = timeCalculated.days
      this.hours = timeCalculated.hours
      this.minutes = timeCalculated.minutes
      this.seconds = timeCalculated.seconds
    },
    phraseNumberRandomizer() {
      this.phraseNumber = Math.floor(Math.random() * this.phrases.length)
    },
    shieldClick() {
      this.$emit('new-numbers')
      this.phraseNumberRandomizer()
    }
  }
}
</script>

<style lang="sass" scoped>
.shield
  width: 55%
  filter: drop-shadow(5px 10px 5px rgba(0,0,0,.2))


.days
  top: 35%
  h1
    font-size: 16em

.hearts
  width: 50%
  height: 250px
  position: absolute
  bottom: 80%

  span
    color: white

@media screen and (max-width: 750px)
  .hearts
    width: 65%

@media screen and (max-width: 450px)
  .hearts
    width: 75%

$delay: 0s
@for $i from 0 through 20
  .#{"heart-"}#{$i}
    margin-left: 5% * $i
    position: absolute
    opacity: 0
    width: 15px + random(20)
    animation-name: animateBubble + random(10), sideWays + random(10)
    animation-duration: 3s + .1s * random(10), 1s + .1s * random(10)
    animation-timing-function: ease-in, ease-in-out
    animation-delay: $delay + .1s * (random(30) - 1), 0s
    animation-iteration-count: infinite
    animation-direction: normal, alternate


@for $i from 0 through 9
  @keyframes sideWays#{$i}
      0%
        left: 0
      100%
        left: 1% * $i

  @keyframes animateBubble#{$i}
    0%
      opacity: .7
      bottom: 0%
    100%
      opacity: 0
      bottom: 50% + 5% * $i

@media screen and (max-width: 750px)
  .shield
    width: 70%

@media screen and (max-width: 600px)
  .shield
    width: 75%

  .days
    h1
      font-size: 14em

@media screen and (max-width: 450px)
  .shield
    width: 80%
    filter: drop-shadow(5px 5px 5px rgba(0,0,0,.2))
  .days
    h1
      font-size: 12em
</style>
