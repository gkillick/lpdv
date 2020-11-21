import { type } from 'os';

export class User{
    constructor(
        //bakery name
        public id:number,
        public name: string,
        public email: string,
    ){}
}