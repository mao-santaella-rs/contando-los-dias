<template lang="pug">
  .contador(:style="{'background-image': `radial-gradient(${selectedColors.start}, ${selectedColors.end})`}")
    .main-container(v-if="days" :class="{'fade-in':loading}")
      .days__container
        .wings__container
          .wing.wing--left
            img(src="../assets/ala-izq.svg")
          .wing.wing--right
            img(src="../assets/ala-der.svg")
        .shield__container
          .shield
            img(:src="`shields/escudo-0${shieldNumber}.svg`")
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
export default {
  name: 'Home',
  data: () => ({
    loading: false,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    timeOut: null,
    colorNumber: 0,
    shieldNumber: 0,
    colors: [
      {
        start: '#ffab1d',
        end: '#f8501c'
      },
      {
        start: '#42df90',
        end: '#149e8e'
      },
      {
        start: '#f86b64',
        end: '#fa5293'
      },
      {
        start: '#ff3b57',
        end: '#892168'
      },
      {
        start: '#888bf4',
        end: '#5151c6'
      },
      {
        start: '#42ffdb',
        end: '#00c9c9'
      },
      {
        start: '#f573c3',
        end: '#c13dff'
      },
      {
        start: '#2dc8ed',
        end: '#548af0'
      }
    ],
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
    this.colorNumber = Math.floor(Math.random() * this.colors.length)
    this.shieldNumber = Math.floor(Math.random() * this.colors.length) + 1
    this.timeOut = setInterval(this.updateDateTime, 1000)
  },
  mounted() {
    setTimeout(() => {
      this.loading = true
    }, 2000)
  },
  beforeDestroy() {
    clearInterval(this.timeOut)
  },
  computed: {
    selectedColors() {
      return this.colors[this.colorNumber]
    },
    selectedPhrase() {
      const randomNum = Math.floor(Math.random() * this.phrases.length)
      return this.phrases[randomNum]
    }
  },
  methods: {
    updateDateTime() {
      const now = new Date()
      const firstDate = new Date(2020, 5, 24, 17, 27, 0)

      let seconds = Math.floor((now - firstDate) / 1000)
      let minutes = Math.floor(seconds / 60)
      let hours = Math.floor(minutes / 60)
      const days = Math.floor(hours / 24)

      hours = hours - days * 24
      minutes = minutes - days * 24 * 60 - hours * 60
      seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60

      this.days = days
      this.hours = hours < 10 ? '0' + hours : hours
      this.minutes = minutes < 10 ? '0' + minutes : minutes
      this.seconds = seconds < 10 ? '0' + seconds : seconds
    }
  }
}
</script>

<style lang="sass">
@import '../assets/normalize.css'
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap')
html, body, #app
  width: 100%
  height: 100%

h1, h2, h3, h4, h5, .days
  font-family: 'Lobster', cursive
  color: white
  line-height: 1em
  margin: 0
  font-weight: 500

.contador
  min-height: 100%
  display: flex
  justify-content: center
  align-items: center


.main-container
  padding: 50px 0
  width: 90%
  max-width: 900px
  opacity: 0

.fade-in
  animation: fade-in 0.5s ease-out forwards

.days__container
  position: relative
  margin-bottom: 15px

.shield__container
  display: flex
  justify-content: center
  position: relative

.wings__container
  position: absolute
  width: 100%
  display: flex
  justify-content: space-between

.wing
  width: 40%
  filter: drop-shadow(15px 15px 10px rgba(0,0,0,.5))

.wing--left
  transform-origin: center right
  animation: ala-izq-animation 10s ease-in-out infinite alternate

.wing--right
  transform-origin: center left
  animation: ala-der-animation 10s ease-in-out infinite alternate

.shield
  width: 45%
  filter: drop-shadow(20px 20px 10px rgba(0,0,0,.4))
  position: relative
  svg
    width: 100%

.days
  display: block
  position: absolute
  top: 35%
  left: 50%
  transform: translate(-50%,-50%)

  h1
    font-size: 22em
    line-height: 1em
    text-shadow: 1px 1px 1px #b3b3b3, 1px 2px 1px #b3b3b3, 1px 3px 1px #b3b3b3, 1px 4px 1px #b3b3b3, 1px 5px 1px #b3b3b3, 1px 6px 1px #b3b3b3, 1px 7px 1px #b3b3b3, 1px 8px 1px #b3b3b3, 1px 9px 1px #b3b3b3, 1px 10px 1px #b3b3b3, 1px 11px 1px #b3b3b3, 1px 12px 1px #b3b3b3, 1px 13px 1px #b3b3b3, 1px 14px 1px #b3b3b3, 1px 15px 1px #b3b3b3,1px 18px 6px rgba(16,16,16,0.2),1px 22px 10px rgba(16,16,16,0.2),1px 25px 35px rgba(16,16,16,0.2),1px 30px 60px rgba(16,16,16,0.4)


.time__main__container
  display: flex
  justify-content: center
  margin-bottom: 15px
  h2
    font-size: 4em
    text-shadow: 2px 2px 2px rgba(0,0,0,0.2)

.time__number
  display: flex
  justify-content: center

.time__container
  padding: 0 10px

.text
  text-align: center
  h1
    font-size: 4em
    line-height: 1em
    text-shadow: 2px 2px 3px rgba(0,0,0,0.2)

.time__sub-text
  h3
    text-align: center
    text-shadow: 2px 2px 2px rgba(0,0,0,0.2)

@media screen and (max-width: 900px)
  .shield
    width: 50%
  .days
    h1
      font-size: 20em

@media screen and (max-width: 750px)
  .shield
    width: 60%
  .days
    h1
      font-size: 18em

@media screen and (max-width: 600px)
  .shield
    width: 65%
  .days
    h1
      font-size: 16em

  .text
    text-align: center
    h1
      font-size: 2.5em

@media screen and (max-width: 450px)

  .main-container
    width: 99%
  .wings__container
    transform: translate(0,35px)
  .shield
    // width: 70%
  .days
    h1
      font-size: 13em

@keyframes fade-in
  0%
    opacity: 0
    transform: translate(0,-50px)
  100%
    opacity: 1
    transform: translate(0,0)

@keyframes ala-izq-animation
  0%, 100%
    transform: rotate(10deg)
  50%
    transform: rotate(0)

@keyframes ala-der-animation
  0%, 100%
    transform: rotate(-10deg)
  50%
    transform: rotate(0)
</style>
