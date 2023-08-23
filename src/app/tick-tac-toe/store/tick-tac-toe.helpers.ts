export function updateplayground(arr:string[][],x:number,y:number,turn:string ): string[][]{
    console.log("arr",arr)
    let data = {...arr};
    data[x][y] = turn;
    
    return data;
}



