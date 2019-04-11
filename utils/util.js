const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  // let ymdArray = [year, month, day]
  // let ymdStr = ymdArray.map(maggieNumber).join('/');

  let yearStr = maggieNumber(year)
  let monthStr = maggieNumber(month)
  let dayStr = maggieNumber(day) 

  let ymdStr = yearStr + "/" + monthStr + "/" + dayStr 

  let hourStr = maggieNumber(hour)
  let minuteStr = maggieNumber(minute)
  let secondStr = maggieNumber(second)

  let hmsStr = hourStr + ":" + minuteStr + ":" +secondStr
  
  return ymdStr + ' ' + hmsStr
}

const maggieNumber = n => {
  if (n > 9) {
    return n.toString()
  } else {
    return '0' + n.toString()
  }
  // n = n.toString()
  // return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}
