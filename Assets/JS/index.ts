//start book class
import { Book } from "./Book.js";
const book1 = new Book("Animal", "Ali", "Teaching", false);
const book2 = new Book("Human", "jafar", "story", false);
const book3 = new Book("planets", "Moh", "story", true);
const book4 = new Book("Human", "sara", "searchloop", true);
import { ReferenceBook } from "./ReferenceBook.js";
const refBook1:Book=new ReferenceBook("physics", "mohammad", "searchloop", true,"a-12");
/*book1.displayInfo();*/
refBook1.displayInfo()
//start with no books
import { Library } from "./Library.js";
const library=new Library();
const print1=library.addBook(book1);
const print2=library.addBook(book2);
const print3=library.addBook(book3);
const print4=library.addBook(book4);
const mybooksContainer:HTMLDivElement|null =document.querySelector<HTMLDivElement>("#mybooksContainer");
const searchBookinput:HTMLInputElement|null=document.querySelector<HTMLInputElement>("#search")
const select:HTMLSelectElement|null=document.querySelector<HTMLSelectElement>("#select")
console.log(mybooksContainer)
console.log(select)

 
//readbooks function
function readBooks(books:Book[]):void{
    //mybooksContainer!.innerHTML="";
    if(mybooksContainer){
    mybooksContainer.innerHTML="";
        }
    books.forEach((b,index )=>{
        if(mybooksContainer){
        
        mybooksContainer.innerHTML+=`
        <div class="viewEachBookAs_Card"><p>Title:${b.getTitle()}</p>
    <p>Author:${b.getAuthor()}</p>
    <p>Category:${b.getCategory()}</p>
    <p class="${b.getIsAvailable() ? "available" : "unavailable"}" >Availablity:${b.getIsAvailable() ? "Available Now" : "Not Available Now"}</p>
    <button class="changeStatus">Change Book Status</button>
    <button class="removeBook" >Remove Book</button>
    </div>
    `
    }
    
    })
    
    const changeStatusbutton=mybooksContainer!.querySelectorAll<HTMLButtonElement>(".changeStatus");
     const removebtn=mybooksContainer!.querySelectorAll<HTMLButtonElement>(".removeBook");
    //search for a book to change status
    console.log(changeStatusbutton)
    changeStatusbutton.forEach((button, index) => {
        
        //Way 1: by index contract with class
        button.addEventListener("click", () => {
        console.log("mystatusclick",books[index])
        changeStatus(books[index]);

        })},
        //remove a book
        removebtn.forEach((btn,i)=>{
    btn.addEventListener("click",()=>{
        console.log("remove number ",i);

        removeBookformLibrary(books[i])
    })
})
        
 )}


//apply search
if(searchBookinput){
    searchBookinput.addEventListener("input", () => {
    const titleOrAutherValue :string=searchBookinput?.value;
    //console.log(titleOrAutherValue)
        const mysearchResults:Book[]=library.searchBooks(titleOrAutherValue);
        //console.log(results)
        readBooks(mysearchResults)
        
});
}
//apply select 
if(select){
    select.addEventListener("change",()=>{
        const selectValue=select?.value;
        //all is a default value
        if(selectValue=='all'){
            return readBooks(library.getBooks());
        }
        console.log(selectValue)
        const myfilterResults:Book[]=library.filterByCategory(selectValue);
        console.log(myfilterResults);
        readBooks(myfilterResults)
        
    })
    
}
//function to remove book from UI
const removeBookformLibrary=(book:Book):void=>{
    library.removeBook(book);
    readBooks(library.getBooks())
}
//function to change status on UI
const changeStatus=(book:Book):void=>{
    console.log("click")
    library.toggleAvailability(book);
    readBooks(library.getBooks());
};
//call readbooks to show title, author, category, book_status 
readBooks(library.getBooks())
