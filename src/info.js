import $day from "dayjs"
console.log($day().startOf('M').format('YYYY-MM-DD'))

const dom = $('.info')
dom.addClass('white')