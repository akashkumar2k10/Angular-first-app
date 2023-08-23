import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'symbol',
  standalone: true,
})
export class SymbolPipe implements PipeTransform {

  transform(value: number): string {
    if(value == 1 ) return 'X';
    if(value == 2 ) return 'O';
    
    return '';
  }

}
