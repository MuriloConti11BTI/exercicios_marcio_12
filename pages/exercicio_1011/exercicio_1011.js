function calculoVolume(raio) {
    let pi = 3.14159
    let volume = (4/3) * pi * Math.pow(raio, 3)
    return volume
}

let volume1 = calcularVolume(3)
let volume2 = calcularVolume(15)
let volume3 = calcularVolume(1523)

console.log(`VOLUME 1 = ${volume1.toFixed(3)}`)
console.log(`VOLUME 2 = ${volume2.toFixed(3)}`)
console.log(`VOLUME 3 = ${volume3.toFixed(3)}`)