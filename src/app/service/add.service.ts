import { Injectable } from "@angular/core";
@Injectable()
export class addService{
   
    private arr: string[]=['ff']
    public str: string=''
   
    
    public getArr(): string[]{
        return this.arr
    }
    public addArray(str: string){
        this.arr.push(str)
    }
    public removeArray(str: string){
    let index = this.arr.indexOf(str)
    return this.arr.splice(index, 1)
    }

    public rename(index: number, str: string){
        this.arr[index]=this.str
        console.log('rename')
    }

}