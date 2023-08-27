import { PlaygroundWithError } from "./tick-tac-toe.models";
import { playground } from "./tick-tac-toe.selectors";

export function updateplayground(arr:number[][],x:number,y:number,turn:number ): PlaygroundWithError{
    var data = arr.map(function(arr) {
        return arr.slice();
    });

    if(data[x][y]!==0){
        return {playground:arr,error:1};
    }
    data[x][y] = turn;
    return {playground:data,error:0};

}


export function toggle(turn:number){
    if(turn == 1) return 2;
    if(turn == 2) return 1;
    return 0;
}

export function findWinnerAndLosser(turn:number,player1Name:string,player2Name:string){
    if(turn ==1 ) return {winner :player1Name,loser:player2Name} 
    return {winner :player2Name,loser:player1Name};
    
}

export function checkwinStatus(playground:number[][],turn:number){
    //digonal
        if(playground[1][1] == turn){
            if(playground[0][0] == playground[1][1] && playground[1][1] == playground[2][2]) return true;
            if(playground[0][2] == playground[1][1] && playground[1][1] == playground[2][0]) return true;
        }
        //vertical
        for (let i = 0; i < 3; i++) {
            if(playground[i][0]==turn){
                if(playground[i][0] == playground[i][1] && playground[i][1] == playground[i][2]) return true;
            }
        }
    
        //hrotizanatal
        for (let i = 0; i < 3; i++) {
            if(playground[0][i]==turn){
                if(playground[0][i] == playground[1][i] && playground[1][i] == playground[2][i]) return true;

            }
        }

    return false;

    
} 





