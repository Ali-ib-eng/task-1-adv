<!--Library Management System-->
# Task 1 ADV - Library Management System

## Project Description

A simple educational Library Management System built using **HTML, CSS, and TypeScript**.

The project demonstrates the main **Object-Oriented Programming (OOP)** concepts in TypeScript through a small library application.

## Features

* Display books as cards.
* Search books by title or author.
* Filter books by category.
* Change book availability between **Available** and **Unavailable**.
* Support for regular books and reference books.

## OOP Concepts Used

### 1. Classes and Objects

The project uses classes to represent the main entities:

* `Book`
* `Library`
* `ReferenceBook`

Objects are created from these classes to represent books and the library.

### 2. Encapsulation

Book data is protected using private fields with `#`.

```ts
#title: string;
#author: string;
#category: string;
#isAvailable: boolean;
```

The data is accessed and modified through dedicated methods such as:

* `getTitle()`
* `getAuthor()`
* `getCategory()`
* `getIsAvailable()`
* `toggleAvailability()`

### 3. Inheritance

`ReferenceBook` extends `Book`:

```ts
class ReferenceBook extends Book
```

It inherits the common book properties and behavior and adds:

```ts
#locationCode: string;
```

### 4. Method Overriding

`ReferenceBook` redefines the `displayInfo()` method inherited from `Book` to display additional information such as `locationCode`.

### 5. Polymorphism

A `ReferenceBook` can be handled as a `Book`, for example:

```ts
const refBook:Book=new ReferenceBook();
```

When `displayInfo()` is called, the implementation belonging to the actual object is executed.

### 6. Abstraction

The internal data of the classes is hidden, and the rest of the application interacts with the objects through public methods instead of accessing their internal fields directly.

## Project Structure

```text
   As i organize the Structure on the left
```

## Technologies

* HTML5
* CSS3
* TypeScript
* DOM API
* Git & GitHub

## Library Methods

The `Library` class provides the following methods:

* `addBook()`
* `removeBook()`
* `searchBooks()`
* `filterByCategory()`
* `toggleAvailability()`

## How to Run

1. Clone the repository.
2. Compile the TypeScript files to JavaScript.
3. Open the generated HTML page in the browser.

## Educational Purpose

This project was created to practice **Object-Oriented Programming in TypeScript** and to demonstrate how OOP classes can be connected to a browser user interface using the DOM.
