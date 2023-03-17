// Задача про ряды и театр
function seatsInTheater(nCols, nRows, col, row) {
    return ((nCols - col) + 1) * (nRows - row); 
}