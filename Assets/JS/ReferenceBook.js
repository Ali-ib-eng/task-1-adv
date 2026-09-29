import { Book } from "./Book.js";
export class ReferenceBook extends Book {
    #locationCode;
    constructor(title, author, category, isAvailable, locationCode) {
        super(title, author, category, isAvailable);
        this.#locationCode = locationCode;
    }
    displayInfo() {
        console.log(`class ref book title is ${this.getTitle()},Author is ${this.getAuthor()},Category is ${this.getCategory()},isAvailable ${this.getIsAvailable()},locationcode is ${this.#locationCode}`);
    }
}
