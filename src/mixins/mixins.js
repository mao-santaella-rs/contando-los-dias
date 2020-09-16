export default {
  methods: {
    timeCalculation(dateOne, dateTwo) {
      let seconds = Math.floor((dateOne - dateTwo) / 1000)
      let minutes = Math.floor(seconds / 60)
      let hours = Math.floor(minutes / 60)
      const days = Math.floor(hours / 24)

      hours = hours - days * 24
      minutes = minutes - days * 24 * 60 - hours * 60
      seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60

      return {
        days: days,
        hours: hours < 10 ? '0' + hours : hours,
        minutes: minutes < 10 ? '0' + minutes : minutes,
        seconds: seconds < 10 ? '0' + seconds : seconds
      }
    }
  }
}
