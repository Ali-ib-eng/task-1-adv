export class Book {
    #title;
    #author;
    #category;
    #isAvailable;
    constructor(title, author, category, isAvailable) {
        this.#title = title;
        this.#author = author;
        this.#category = category;
        this.#isAvailable = isAvailable;
    }
    setTitle(title) {
        this.#title = title;
    }
    getTitle() {
        return this.#title;
    }
    setAuthor(author) {
        this.#author = author;
    }
    getAuthor() {
        return this.#author;
    }
    setCategory(category) {
        this.#category = category;
    }
    getCategory() {
        return this.#category;
    }
    toggleAvailability() {
        this.#isAvailable = !this.#isAvailable;
    }
    getIsAvailable() {
        return this.#isAvailable;
    }
    displayInfo() {
        console.log(` class book: title is ${this.#title}, author is ${this.#author}, category is ${this.#category}, isAvailable is ${this.#isAvailable}`);
    }
}
