const saveAndLoad = require('./index.js')

const matrix = [
        [1, 2, 3],
        [9, 8, 7],
]

saveAndLoad.saveMatrixToFile(matrix, 'matrix.json')

const loadedMatrix = saveAndLoad.loadMatrixFromFile('matrix.json')

console.log(loadedMatrix)
