import { Item } from './item.model';

export class ItemOrder{
    constructor(
        public id:number,
        public itemName: string,
        public order_id: number,
        public item_id: number,
        public amount: number,
        public sliced: boolean,
    ){}
}