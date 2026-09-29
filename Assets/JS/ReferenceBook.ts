import { Book } from "./Book.js";
export class ReferenceBook extends Book{
    #locationCode:string
    constructor(title:string,author:string,category:string,isAvailable:boolean,locationCode:string){
        super(title,author,category,isAvailable);
        this.#locationCode=locationCode;
    }
    getLocationCode():string{
        return this.#locationCode;
    }
    public displayInfo(): void {
        console.log(`class ref book title is ${this.getTitle()},Author is ${this.getAuthor()},Category is ${this.getCategory()},isAvailable ${this.getIsAvailable()},locationcode is ${this.getLocationCode()}`)
    }
}