import $day from "expose-loader?exposes=$day!dayjs"
const d = $day()
console.log(d)

const dom = $('.info')
dom.addClass('white')