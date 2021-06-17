
const  N_QUEENS = 8;

// A utility function to print solution
function print( board: Array<Array<number>>) {
    const N = board.length;
    let str = '';
    for(let i = 0; i < N; i++)
    {

        for(let j = 0; j < N; j++)
            str+=board[i][j] +  "  ";

       str+="\n";
    }
    console.log(`%c${str}`, "font-family:sans-serif; font-size: 20px; padding-bottom: 0");
}

// A Optimized function to check if a queen
// can be placed on board[row][col]
function  isSafe( row: number,  col: number,
    slashCode: Array<Array<number>>,
    backslashCode: Array<Array<number>>,
    rowLookup: Array<boolean>,
    slashCodeLookup: Array<boolean>,
    backslashCodeLookup: Array<boolean>): boolean
{
    if (slashCodeLookup[slashCode[row][col]] ||
        backslashCodeLookup[backslashCode[row][col]] ||
        rowLookup[row])
        return false;

    return true;
}

// A recursive utility function to
// solve N Queen problem
function  solveNQueensUtil(
    board:  Array<Array<number>>,  col: number,  slashCode:  Array<Array<number>>,
    backslashCode:  Array<Array<number>>, rowLookup: Array<boolean>,
    slashCodeLookup: Array<boolean>,
    backslashCodeLookup: Array<boolean>): boolean
{

    // Base case: If all queens are placed
    // then return true
    let N = board.length;

    if (col >= N)
        return true;

    // Consider this column and try placing
    // this queen in all rows one by one
    for(let i = 0; i < N; i++)
    {
        // Check if queen can be placed on board[i][col]
        if (isSafe(i, col, slashCode, backslashCode,
            rowLookup, slashCodeLookup,
            backslashCodeLookup))
        {

            // Place this queen in board[i][col]
            board[i][col] = 1;
            rowLookup[i] = true;
            slashCodeLookup[slashCode[i][col]] = true;
            backslashCodeLookup[backslashCode[i][col]] = true;

            // recur to place rest of the queens
            if (solveNQueensUtil(
                board, col + 1, slashCode,
                backslashCode, rowLookup,
                slashCodeLookup,
                backslashCodeLookup))
                return true;

            // If placing queen in board[i][col] doesn't
            // lead to a solution, then backtrack

            // Remove queen from board[i][col]
            board[i][col] = 0;
            rowLookup[i] = false;
            slashCodeLookup[slashCode[i][col]] = false;
            backslashCodeLookup[backslashCode[i][col]] = false;
        }
    }

    // If queen can not be place in any row
    // in this column col then return false
    return false;
}

/*
 * This function solves the N Queen problem using Branch
 * and Bound. It mainly uses solveNQueensUtil() to solve
 * the problem. It returns false if queens cannot be
 * placed, otherwise return true and prints placement of
 * queens in the form of 1s. Please note that there may
 * be more than one solutions, this function prints one
 * of the feasible solutions.
 */
function solveNQueens() : boolean
{
    const board: Array<Array<number>> = Array.from({ length: N_QUEENS }, () =>Array.from({ length: N_QUEENS }, () => 0));

    // Helper matrices
    const slashCode: Array<Array<number>> =Array.from({ length: N_QUEENS }, () =>Array.from({ length: N_QUEENS }, () => 0));
    const backslashCode: Array<Array<number>> =Array.from({ length: N_QUEENS }, () =>Array.from({ length: N_QUEENS }, () => 0));

    // Arrays to tell us which rows are occupied
    const rowLookup: Array<boolean> = [];

    // Keep two arrays to tell us
    // which diagonals are occupied
    const slashCodeLookup: Array<boolean> = [];
    const backslashCodeLookup: Array<boolean> = [];

    // Initialize helper matrices
    for(let r = 0; r < N_QUEENS; r++)
        for(let c = 0; c < N_QUEENS; c++)
        {
            slashCode[r][c] = r + c;
            backslashCode[r][c] = r - c + 7;
        }

    if (solveNQueensUtil(board, 0, slashCode,
        backslashCode, rowLookup,
        slashCodeLookup,
        backslashCodeLookup) == false)
    {
        console.log("Solution does not exist");
        return false;
    }

    // Solution found
    print(board);
    return true;
}
export function nQueenBranchAndBound() {
    solveNQueens();
}
