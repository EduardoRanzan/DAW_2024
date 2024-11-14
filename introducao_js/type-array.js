const arrayValor = [1, 2, 3, 4, 5, 6]

const arrayObject = [
    { valor: 1, valor2: 'aipapai', valor3: 'Três' },
    { valor: 1, valor2: 'aipapai', valor3: 'Três' },
    { valor: 1, valor2: 'aipapai', valor3: 'Três' }
]

console.table(arrayObject)

arrayObject.push({valor: 1, valor2: 'OLOCO', valor3: 'cuatro'})

console.table(arrayObject)