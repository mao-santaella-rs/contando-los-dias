<template lang="pug">
  #app
    .app-container
      .background-color(
        v-for="color in selectedColors"
        :key="'c-'+Math.floor(Math.random() * 10000)"
        :style="{'background-image': `radial-gradient(${color.start}, ${color.end})`}"
      )
      router-view(
        :prop-number="propNumber"
        :delay="delay"
        @new-numbers="randomNumbers"
      )
      Footer


    .images-loader
      .image-test(
        v-for="(img,index) in colors" 
        :key="'img-test-'+index"
      )
        img(src="./assets/ala-izq.svg")
        img(src="./assets/ala-der.svg")
        img(:src="`shields/escudo-${index +1 < 10 ? '0'+(index +1) : index +1 }.svg`")
        img(:src="`shields/heart-${index +1 < 10 ? '0'+(index +1) : index +1 }.svg`")

</template>

<script>
import Footer from './components/footer'
export default {
  name: 'App',
  components: { Footer },
  data: () => ({
    propNumber: 0,
    selectedColors: [],
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
        start: '#ffedbc',
        end: '#ed4264 '
      },
      {
        start: '#f86b64',
        end: '#fa5293 '
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
      },
      {
        start: '#a8e063',
        end: '#56ab2f '
      }
    ],
    delay: true
  }),
  created() {
    this.randomNumbers()
  },
  watch: {
    $route(to, from) {
      if (from.name && to.name != from.name) this.randomNumbers()
    }
  },
  methods: {
    randomNumbers() {
      const newColorNumber = Math.floor(Math.random() * this.colors.length)

      const newColorsArr = []
      let newColor = this.colors[newColorNumber]

      if (this.selectedColors.length > 1) {
        newColor = this.colors[newColorNumber]
        while (newColor.start === this.selectedColors[0].start) {
          newColor = this.colors[Math.floor(Math.random() * this.colors.length)]
        }
        newColorsArr.push(newColor)
        newColorsArr.push(this.selectedColors[0])
        this.delay = false
      } else {
        newColorsArr.push(newColor)
        newColorsArr.push(newColor)
      }

      this.selectedColors = newColorsArr

      this.propNumber = Math.floor(Math.random() * this.colors.length) + 1
    }
  }
}
</script>

<style lang="sass">
@import './assets/normalize.css'
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap')

html, #app
  position: relative
  width: 100%
  min-height: 100%

html, body
  display: flex
  flex-grow: 1



.app-container
  flex-grow: 1
  display: flex
  flex-direction: column
  transition: background-image 1s ease-in-out
  -webkit-transition: background-image 1s ease-in-out
  height: 100%
  & > :nth-child(2)
    animation: fade-out 1s ease-out forwards

*
  font-family: 'Lobster', cursive
  color: white
  line-height: 1em
  margin: 0
  font-weight: 500

.background-color
  position: absolute
  top: 0
  right: 0
  bottom: 0
  left: 0

.contador
  flex-grow: 1
  display: flex
  justify-content: center
  align-items: center

.main-container
  position: relative
  padding: 50px 0 20px 0
  width: 90%
  max-width: 900px
  opacity: 0
  animation: fade-in 0.5s ease-out forwards

.dealy
  animation-delay: 0.5s

.fade-in
  animation: fade-in 0.5s ease-out forwards


.days__container
  position: relative
  margin-bottom: 15px
  cursor: pointer

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
    font-size: 20em
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


.images-loader
  position: fixed
  top: 0
  pointer-events: none
  opacity: 0

  img
    width: 5px
    display: block


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

@keyframes fade-out
  0%
    opacity: 1
  100%
    opacity: 0

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
