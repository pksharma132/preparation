function spiral(matrix) {
    let left = 0;
    let right = matrix[0].length - 1;
    let top = 0;
    let bottom = matrix.length - 1;
    const res = [];


    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) {
            res.push(matrix[top][i]);
        }
        top++;

        for (let i = top; i <= bottom; i++) {
            res.push(matrix[i][right])
        }
        right--;

        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                res.push(matrix[bottom][i])
            }
            bottom--;

        } 

       
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                res.push(matrix[i][left])
            }
            left++;

        }

       
    }

    return res;
}




const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

console.log(spiral(matrix)); // [1, 2, 3, 6, 9, 8, 7, 4, 5]