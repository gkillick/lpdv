
export class User{

    private expiaryTime: Date
    constructor(
        //bakery name
        public id: string,
        public name: string,
        public token: string
    ){}

    setExpiaryTime(issuedTime: number){
        console.log(issuedTime)
        this.expiaryTime = new Date(0)
        this.expiaryTime.setUTCSeconds(issuedTime+30)
        console.log(this.expiaryTime)
    }

    getToken(){
        if(this.expiaryTime > new Date()){
            return this.token
        }else{
            return null
        }
    }
}