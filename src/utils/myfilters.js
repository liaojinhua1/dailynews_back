export const dateFormat = (date, spe) => {
  date = new Date(date)
  spe = spe || '/'
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  return year + spe + month + spe + day
}
