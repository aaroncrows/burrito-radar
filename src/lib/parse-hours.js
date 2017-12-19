const parseHours = time => {
  const hours = parseInt(time.slice(0, 2))
  const isPM = hours > 11
  if (!hours) return '12:00AM'

  return `${isPM ? hours - 12 : hours}:${time.slice(2)}${isPM ? 'PM' : 'AM'}`
}

export default parseHours
