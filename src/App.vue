<template lang="pug">
  #app(:style="{'background-image': `radial-gradient(${selectedColors.start}, ${selectedColors.end})`}")
    router-view(
      :selecte-colors="selectedColors"
      :prop-number="propNumber"
      :loading="loading"
    )
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    loading: false,
    propNumber: 0,
    colorNumber: 0,
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
    ]
  }),
  created() {
    this.randomNumbers()
  },
  mounted() {
    setTimeout(() => {
      this.loading = true
    }, 1500)
  },
  computed: {
    selectedColors() {
      return this.colors[this.colorNumber]
    }
  },
  methods: {
    randomNumbers() {
      this.colorNumber = Math.floor(Math.random() * this.colors.length)
      this.propNumber = Math.floor(Math.random() * this.colors.length) + 1
    }
  }
}
</script>

<style lang="sass">
@import './assets/normalize.css'
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
