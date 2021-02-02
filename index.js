function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`)
  return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`)

}

function nowServing(katzDeliLine) {
  let i = 0
  while (i < katzDeliLine.length) {
    i++
  }
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  }else{
    return (`Currently serving ${katzDeliLine.shift()}.`)
  }
}

function currentLine(katzDeliLine) {
  for (i = 0; i < katzDeliLine.length; i++) {
    line.push(` + [i + 1] +    + katzDeli[i]`)
  }
  return (`The line is currently: + line`)

}
