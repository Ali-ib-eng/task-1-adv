//start book class
class Book{
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
        console.log(`title is ${this.#title}, author is ${this.#author}, category is ${this.#category}, isAvailable is ${this.#isAvailable}`);
    }
}

//let info=new Book("animal","ali","teaching",true);
//info.displayInfo();
class Library{
    #books:Book[]
    constructor(){
        this.#books=[];
    }
    addBook(book:Book):void{
         this.#books.push(book);
         console.log("book at addBook method",book)
         //return book
        
    }
    removeBook(book:Book):void{
        //book =book1
        //console.log("this.#book before",this.#books)
        this.#books=this.#books.filter(b=>b!==book);
        //console.log("this.#book after",this.#books)
        //b=book1,book2......
    }
    //search by title Or Author
    searchBooks(serachTitleOrAuthor:string):Book[]{
        return this.#books.filter(b=>b.getTitle().toLowerCase().includes(serachTitleOrAuthor.toLowerCase())||
        b.getAuthor().toLowerCase().includes(serachTitleOrAuthor.toLowerCase())
    );      
    }
     filterByCategory(categoryItem:string):Book[]{
        return this.#books.filter(
            b=>b.getCategory().toLowerCase()===categoryItem.toLowerCase()
        );
     }
     /*toggleAvailability(book:Book):void{
        let status=((!book.getIsAvailable())?true:false)
        console.log(status)
     }*/
    toggleAvailability(book:Book):void{
        book.toggleAvailability();
    }
}
class ReferenceBook extends Book{
    #locationCode:string
    constructor(title:string,author:string,category:string,isAvailable:boolean,locationCode:string){
        super(title,author,category,isAvailable);
        this.#locationCode=locationCode;
    }
    public displayInfo(): void {
        console.log(`title is ${this.getTitle()},Author is ${this.getAuthor()},Category is ${this.getCategory()},isAvailable ${this.getIsAvailable()},locationcode is ${this.#locationCode}`)
    }
}
const book1 = new Book("Animal", "Ali", "Teaching", false);
const book2 = new Book("Human", "jafar", "story", false);
const refBook1=new ReferenceBook("physics", "mohammad", "searchloop", true,"a-12");
book1.displayInfo()
//start with no books
const library=new Library();
//0 books
console.log(library)
//add 2 books
const print1=library.addBook(book1);
const print2=library.addBook(book2);
const searchBook=library.searchBooks("jafar");
const filterbook=library.filterByCategory("Teaching")
console.log("search book for jafar",searchBook)
console.log("fiter book book for Teaching",filterbook)
//let changestatus=library.changeStatus(book2);
library.toggleAvailability(book2);
//call child method 
refBook1.displayInfo();
console.log(library);
//remove book1 object from library
//const rm=library.removeBook(book1)
//checking
//console.log(print)
//let b:Book;
//console.log(book1 instanceof Book);
//console.log(library.removeBook(book1))



