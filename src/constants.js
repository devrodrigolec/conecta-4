export const sqVoids = Array(7).fill(null);

export const COLUMNS = [
  [0, 7, 14, 21, 28, 35],
  [1, 8, 15, 22, 29, 36],
  [2, 9, 16, 23, 30, 37],
  [3, 10, 17, 24, 31, 38],
  [4, 11, 18, 25, 32, 39],
  [5, 12, 19, 26, 33, 40],
  [6, 13, 20, 27, 34, 41],
];

export const TURNS = {
  red: "red",
  green: "green",
};

export const WINNER_COMBOS = [
  // Filas
  [0, 7, 14, 21],
  [7, 14, 21, 28],
  [14, 21, 28, 35],
  [1, 8, 15, 22],
  [8, 15, 22, 29],
  [15, 22, 29, 36],
  [2, 9, 16, 23],
  [9, 16, 23, 30],
  [16, 23, 30, 37],
  [3, 10, 17, 24],
  [10, 17, 24, 31],
  [17, 24, 31, 38],
  [4, 11, 18, 25],
  [11, 18, 25, 32],
  [18, 25, 32, 39],
  [5, 12, 19, 26],
  [12, 19, 26, 33],
  [19, 26, 33, 40],
  [6, 13, 20, 27],
  [13, 20, 27, 34],
  [20, 27, 34, 41],
  // Columnas
  [0, 1, 2, 3],
  [1, 2, 3, 4],
  [2, 3, 4, 5],
  [3, 4, 5, 6],
  [7, 8, 9, 10],
  [8, 9, 10, 11],
  [9, 10, 11, 12],
  [10, 11, 12, 13],
  [14, 15, 16, 17],
  [15, 16, 17, 18],
  [16, 17, 18, 19],
  [17, 18, 19, 20],
  [21, 22, 23, 24],
  [22, 23, 24, 25],
  [23, 24, 25, 26],
  [24, 25, 26, 27],
  [28, 29, 30, 31],
  [29, 30, 31, 32],
  [30, 31, 32, 33],
  [31, 32, 33, 34],
  [35, 36, 37, 38],
  [36, 37, 38, 39],
  [37, 38, 39, 40],
  [38, 39, 40, 41],
  // Diagonales (de izquierda a derecha)
  [0, 8, 16, 24],
  [1, 9, 17, 25],
  [2, 10, 18, 26],
  [3, 11, 19, 27],
  [7, 15, 23, 31],
  [8, 16, 24, 32],
  [9, 17, 25, 33],
  [10, 18, 26, 34],
  [14, 22, 30, 38],
  [15, 23, 31, 39],
  [16, 24, 32, 40],
  [17, 25, 33, 41],
  [21, 15, 9, 3],
  [22, 16, 10, 4],
  [23, 17, 11, 5],
  [24, 18, 12, 6],
  [28, 22, 16, 10],
  [29, 23, 17, 11],
  [30, 24, 18, 12],
  [31, 25, 19, 13],
  [35, 29, 23, 17],
  [36, 30, 24, 18],
  [37, 31, 25, 19],
  [38, 32, 26, 20],
];
