import { PlaygroundWithError } from "./tick-tac-toe.models";

export function updateplayground(arr:number[][],x:number,y:number,turn:number ): PlaygroundWithError{
    var data = arr.map(function(arr) {
        return arr.slice();
    });

    if(data[x][y]!==0){
        return {playgroung:arr,error:1};
    }
    data[x][y] = turn;
    return {playgroung:data,error:0};

}


export function toggle(turn:number){
    if(turn == 1) return 2;
    if(turn == 2) return 1;
    return 0;
}



