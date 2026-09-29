import { Book } from "./Book.js";
export class Library{
    #books:Book[]
    constructor(){
        this.#books=[];
    }
    getBooks():Book[]{
        return this.#books;
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