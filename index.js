function takeANumber(katzDeli, name) {
  katzDeli.ppush(`${name}`)
  return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`)

}
