
export const checkWin = (matrix) =>{
    let flag = 0;

    for(let i = 0 ; i < 3 ; i++){
        if(matrix[i][0] && matrix[i][0] === matrix[i][1] && matrix[i][0] === matrix[i][2]){
            return true
        }
    }
    for(let j = 0 ; j < 3 ; j++){
        if(matrix[0][j] && matrix[0][j] === matrix[1][j] && matrix[0][j] === matrix[2][j]){
            return true
        }
    }

    if (matrix[0][0] && matrix[0][0] === matrix[1][1] && matrix[0][0] === matrix[2][2]) {
        return true; 
      }
    if (matrix[0][2] && matrix[0][2] === matrix[1][1] && matrix[0][2] === matrix[2][0]) {
        return true; 
      }

    for(let i = 0; i < 3 ; i++){
        for(let  j = 0; j < 3 ; j ++){
            if(matrix[i][j] === null){
                flag = 1;
                break;
            }
        }
    }
    if(flag === 0){
        return "Tie"
    }

    return false
}