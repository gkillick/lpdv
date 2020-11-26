import { type } from 'os';

export class User{
    constructor(
        //bakery name
        public id: string,
        public name: string,
        public email: string,
    ){}
}