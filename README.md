# Assignment-05: GitHub Issues Tracker

## Answer to Questions
### 1️⃣ What is the difference between var, let, and const?
In JavaScript, `var`, `let`, and `const` are used to declare variables (store data). The main differences are about scope, reassigning, and updating. 

`var` is a old way to declare variables and can be redeclared and updated. It also works inside a function.

`let` is a modern way to use which introduced in ES6. Let is block scoped which works only inside { }. It can update, but cannot redeclare in the same scope.

`const` is also block scoped and can't be updated or redeclared. Value must be given when declaring.

---

### 2️⃣ What is the spread operator (...)?
In JavaScript, the spread operator (...) is used to expand arrays or objects into individual elements.

Spread in Arrays: It can copy or combine arrays.

Spread in Objects: It can copy or merge objects.

Spread in Function Arguments: It can pass array values as separate arguments.

---

### 3️⃣ What is the difference between map(), filter(), and forEach()?
In JavaScript, `map()`, `filter()`, and `forEach()` are methods used to loop through arrays. The main difference is what they return and what they are used for.

`map()` is used to transform or change each item in an array and returns a new array.

`filter()` is used to select specific items based on a condition and returns a new array with only the matched elements. `filter()` used when wanted some elements from the array.

`forEach()` is used to run a function for each element and does not return a new array. `forEach()` is used to loop through items also used when wanted to perform an action like printing, updating UI.

---

### 4️⃣ What is an arrow function?
In JavaScript, an arrow function is a short and simple way to write a function using the `=>` symbol. It was introduced in ES6 to make code shorter and cleaner.

Normal function:
```javascript
function add(a, b) {
  return a + b;
}
```
Arrow function:
```javascript
const add = (a, b) => {
  return a + b;
};
```
Shorter Arrow function:
```javascript
const add = (a, b) => a + b;
```

---

### 5️⃣ What are template literals?
In JavaScript, template literals are a way to create strings easily using backticks ( ` ) instead of quotes. It allows to insert variables into strings and write multi-line strings.

Basic example:
```javascript
const name = "Rayhan";
const message = `Hello ${name}`;

console.log(message);
```
Multi-line Strings:
```javascript
const text = `This is line 1
This is line 2
This is line 3`;
```

---