const getTime = (time) => {
  const date = new Date(time)
  const y = date.getFullYear()
  const m = date.getMonth() + 1
  const d = date.getDate()
  return [y,m,d]
}

const getToday = () => {
  const time = Date.now()
  return getTime(time)
}

const checkSameIndex = (timeList, todayList) => {
  for (let i=0;i<timeList.length;i++) {
    const date = getTime(timeList[i].time);
    const same = date.every((num,idx) => {
      if (num === todayList[idx]){
        return true
      }
      return false
    })
    if (date.length === todayList.length && same) {
      return i
    }
  }
  return -1
}

export const sliceBeforeToday = (timeList) => {
  const todayList = getToday()
  const slice_idx = checkSameIndex(timeList,todayList)
  if (slice_idx > -1) {
    return timeList.slice(slice_idx)
  }
  return []
}

// TESTCODE
// const BEFORE = 1627408300000 // 2021,7,28
// const YESTERDAY = 1627608300000 // 2021, 7,30
// const TODAY = 1627719716197 // 2021, 07 , 31
// const TestDate = () => {
//   sliceBeforeToday([{time:BEFORE},{time:BEFORE},{time:BEFORE},{time:BEFORE}])
//   sliceBeforeToday([])
//   sliceBeforeToday([{time:BEFORE},{time:BEFORE},{time:YESTERDAY},{time:TODAY}])
//   sliceBeforeToday([{time:TODAY},{time:TODAY},{time:TODAY}])
//   sliceBeforeToday([{time:TODAY}])
//   sliceBeforeToday([{time:YESTERDAY}])
//   sliceBeforeToday([{time:BEFORE}])
// }