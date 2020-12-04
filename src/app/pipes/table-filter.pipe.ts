import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilter'
})
export class TableFilterPipe implements PipeTransform {

  transform(value: any[], searchString:string ){
    searchString = searchString.toLowerCase()
    if(!searchString){
      console.log('no search')
      return value  
    }

    return value.filter(it=>{   
      return it.id.toLocaleLowerCase().includes(searchString);
    }) 
  }

}
