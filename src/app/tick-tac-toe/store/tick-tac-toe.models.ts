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
    checkwinStatus:boolean;
} 

export interface PlaygroundWithError{
    playground:number[][],
    error:number,
}