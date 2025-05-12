function bonus(totalVendas) {
    let porcentagem = 0.15
    let bonus = totalVendas * porcentagem
    return bonus
}

function salario(salarioFixo, totalVendas) {
    let salarioTotal = salarioFixo + bonus(totalVendas)
    return salarioTotal
}

let valor1 = salario(500, 1230.3)
let valor2 = salario(700, 0)
let valor3 = salario(1700, 1230.5)

console.log (`TOTAL 1 = ${valor1.toFixed(2)}`)
console.log (`TOTAL 2 = ${valor2.toFixed(2)}`)
console.log (`TOTAL 3 = ${valor3.toFixed(2)}`)