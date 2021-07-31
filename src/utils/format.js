export function timeFormat(time) {
  const date = new Date(time)
  const y = date.getFullYear()
  const m = date.getMonth() + 1
  const d = date.getDate()
  const hour = date.getHours()
  const min = date.getMinutes()
  const sec = date.getSeconds()
  return `${y}.${F(m)}.${F(d)} ${F(hour)}:${F(min)}:${F(sec)}`
}
const F = (t) => {
  return t < 10 ? '0'+t : t
}

export function moneyFormat(price) {
  if (isNaN(Number(price))) {
    return;
  }

  let result = '';
  let count = 0;

  while (price > 0) {
    const num = price % 10;
    price = Math.floor(price / 10);
    result = String(num) + result;
    count++;

    if (count === 3 && price > 0) {
      count = 0;
      result = ',' + result;
    }
  }

  return result;
}