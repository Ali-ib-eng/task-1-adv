export class Library {
    #books;
    constructor() {
        this.#books = [];
    }
    getBooks() {
        return this.#books;
    }
    addBook(book) {
        this.#books.push(book);
        console.log("book at addBook method", book);
        //return book
    }
    removeBook(book) {
        //book =book1
        //console.log("this.#book before",this.#books)
        this.#books = this.#books.filter(b => b !== book);
        //console.log("this.#book after",this.#books)
        //b=book1,book2......
    }
    //search by title Or Author
    searchBooks(serachTitleOrAuthor) {
        return this.#books.filter(b => b.getTitle().toLowerCase().includes(serachTitleOrAuthor.toLowerCase()) ||
            b.getAuthor().toLowerCase().includes(serachTitleOrAuthor.toLowerCase()));
    }
    filterByCategory(categoryItem) {
        return this.#books.filter(b => b.getCategory().toLowerCase() === categoryItem.toLowerCase());
    }
    /*toggleAvailability(book:Book):void{
       let status=((!book.getIsAvailable())?true:false)
       console.log(status)
    }*/
    toggleAvailability(book) {
        book.toggleAvailability();
    }
}
