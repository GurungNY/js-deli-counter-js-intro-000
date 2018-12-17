function takeANumber(line, name) {
  line.push(name)

  return `Welcome, ${name}. You are number ${line.length} in line.`
}


function nowServing(katzDeliLine) {
  if (!katzDeliLine.length) {

    return 'There is nobody waiting to be served!'
  }

    return `Currently serving ${katzDeliLine.shift()}.`
};


function currentLine(line) {
  if (!line.length) {

    return 'The line is currently empty.'
}
  const list = []

    for (let i = 0, l = line.length; i < l; i++) {
//      numberName.push(`${i + 1}. ${line[i]}`)
      console.log(`The line is currently: ${i + 1}. ${line[i]}`)
//     return (`The line is currently: ${i + 1}. ${name[i]}`)
  }
}

    // return
    //   (`The line is curretly ${line}. ${name}`)
    // }


//     for(let i = 0, n = name.length; i < n; i++) {
//       welcome.push(`Welcome, ${name}. You are number ${position} in line.`)
//     }
//
//   return welcome
// }
//
// function takeANumber(name, number) {
//   const welcome = []
//
//   let i = 0
//   while (i < greet.length) {
//     welcome.push(`Welcome, ${name}. You are number ${number} in line.`)
//     number++
//   }
//
//   return welcome
// }
