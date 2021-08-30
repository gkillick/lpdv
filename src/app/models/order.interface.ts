
export interface Order {
    id: string;
    uid: string;
    first_name: string;
    last_name: string;
    telephone: number;
    date: any;
    sub_total: number;
    tax: number;
    total: number;
    timeOfDay: string;
    payed: boolean;
    notes: string;
}

export interface OrderForm {
    first_name: string;
    last_name: string;
    telephone: number;
}
