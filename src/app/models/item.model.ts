import { type } from 'os';

export class Item{
    

    constructor(public name: string, public item_type: string, public price: string){

    }
}
    //const {type, data} = resp_data


export class Order{
    constructor(public id:number, public name:string){}
}
export class ItemOrder{
    constructor(
        public datype: string,
        public item: Item,
       
        


    ){}
}