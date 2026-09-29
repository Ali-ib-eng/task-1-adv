export class Book{
    #title:string
    #author:string
    #category:string
    #isAvailable:boolean
    constructor(title:string,author:string,category:string,isAvailable:boolean){
        this.#title=title;
        this.#author=author;
        this.#category=category;
        this.#isAvailable=isAvailable;
    }
    setTitle(title:string):void{
        this.#title=title;
    }
    getTitle():string{
        return this.#title;
    }
    setAuthor(author:string):void{
        this.#author=author;
    }
    getAuthor():string{
        return this.#author;
    }
    setCategory(category:string):void{
        this.#category=category;
    }
    getCategory():string{
        return this.#category;
    }
    toggleAvailability():void{
        this.#isAvailable=!this.#isAvailable;
    }
    public getIsAvailable():boolean{
        return this.#isAvailable;
    }
    public displayInfo():void{
        console.log(` class book: title is ${this.#title}, author is ${this.#author}, category is ${this.#category}, isAvailable is ${this.#isAvailable}`);
    }
}