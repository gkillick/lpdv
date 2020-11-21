import { Item } from './item.model';

export class ItemOrder{
    constructor(
        public id:number,
        public order_id: number,
        public item: Item,
        public amount: number,
        public sliced: boolean,
    ){}
}