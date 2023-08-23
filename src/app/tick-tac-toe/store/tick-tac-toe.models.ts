export interface TickState{
    data : String;
    player1Name : string;
    player2Name:string;
    playground : number[][];
    winner : string;
    losser : string;
    isGameOver : boolean;
    turn : number;
    error : number;
} 

export interface PlaygroundWithError{
    playgroung:number[][],
    error:number,
}