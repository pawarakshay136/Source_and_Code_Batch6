# 01 - JavaScript Basics : Theory Notes

> These notes cover: How to run a JS file, Printing output, Comments, Variables (let / var / const), and Variable Naming Rules.
> Read these along with the lecture file `LECTURE/01_JS_BASIC.js`.

---

## 1. What is JavaScript (JS)?

- JavaScript is a **programming language** used to make web pages interactive.
- It runs in the **browser**, and it can also run on your computer using **Node.js**.
- It is a **case-sensitive** language (very important — remember this!).

---

## 2. How to Run a JS File

We run JavaScript files (`.js` files) using **Node.js** from the terminal.

### Steps:

1. **Step 1** → Click on the file you need to run (open it in VS Code).
2. **Step 2** → Open the **Integrated Terminal**
   - Shortcut: `Ctrl + ~` (or Menu → Terminal → New Terminal)
3. **Step 3** → In the terminal type:

```bash
node filename.js
```

### Example:

```bash
node 01_JS_BASIC.js
```

> **Note:** You must have Node.js installed on your machine. Check with `node -v` in the terminal — it prints the installed Node version.

---

## 3. How to Print in the Terminal (Output)

In JavaScript we print anything using `console.log()`.

```js
console.log("hello world");
```

**Output in terminal:**

```
hello world
```

### Points to remember:

- `console.log()` is used for **printing / debugging** — it shows values in the console (terminal or browser console).
- Text (strings) must be inside quotes → `"hello"` or `'hello'` or `` `hello` ``.
- Numbers can be printed directly → `console.log(10);`
- We can print multiple values → `console.log("age =", 25);`
- Every statement can end with a semicolon `;` — optional in JS, but it is good practice.

---

## 4. Comments

### Definition

Comments are **lines written in code which are used to explain the code**, and they are **ignored by the compiler / console / terminal**. They are only for humans to read.

### Uses of Comments

1. It makes your code **readable**.
2. It makes your code **easy to maintain**.

### Types of Comments

| Type | Symbol | Usage | Scope |
|------|--------|-------|-------|
| Single-line comment | `//` | Used ~95% of the time | Only that one single line |
| Multi-line comment | `/* ... */` | Used ~5% of the time | From `/*` to `*/` (can span many lines) |

### Example

```js
// This is a single line comment
console.log("hello");   // comment can also come after code

/*
  This is a multi-line comment.
  It can be given in multiple lines.
  It starts with /* and ends with the closing star-slash.
*/
```

> **Note:** You cannot write the closing `*/` symbol inside a multi-line comment — it will end the comment early and cause an error.

### Comment Rules (Code Quality)

1. Use comments to explain the **complex flows, not simple flows**.
2. **Avoid unwanted comments** — comments which don't add any value should be removed.
3. **Keep comments updated** with code changes (an old wrong comment is worse than no comment).
4. Comments should be **short and clear** to understand.

---

## 5. Variables

### Definition

In JavaScript, **variables are used to store a value**.

Think of a variable like a **box / container** with a name — you put a value inside it and use the name whenever you need that value.

### In JS we have 3 types of variables:

1. `let`
2. `var`
3. `const`

---

### 5.1 `let`

- `let` is used to declare a variable whose value **can be updated in the future**.

```js
let number_ten = 10;
let number_five = 5;

console.log(number_ten);  // 10
console.log(number_five); // 5

// updating the values
number_ten = 100;
number_five = 500;

console.log(number_ten);  // 100
console.log(number_five); // 500
```

---

### 5.2 `var`

- `var` is the **old way** (before 2015) of declaring a variable.
- Its value can also be updated, just like `let`.

```js
var one = 1;
var two = 2;

console.log(one); // 1
one = 11;
console.log(one); // 11
```

### `let` vs `var` (Important for Interviews)

| Point | `let` | `var` |
|-------|-------|-------|
| Scope | **Block scope** `{ }` | **Function scope** |
| Re-declaration in same scope | Not allowed ❌ | Allowed ⚠️ |
| Modern usage | Recommended ✅ | Avoid ❌ |

**Block scope example:**

```js
{
  let a = 10;
  var b = 20;
  console.log(a); // 10 (works inside the block)
  console.log(b); // 20
}
console.log(b); // 20 (var leaks outside the block!)
console.log(a); // ❌ Error: a is not defined (let stays inside the block)
```

---

### 5.3 `const`

- `const` is used to declare a **constant** variable.
- A `const` value **cannot be re-assigned / updated** after it is declared.

```js
const pi = 3.1423;

console.log(pi); // 3.1423

pi = 4;          // ❌ Error: Assignment to constant variable.
console.log(pi);
```

> **Rule:** A `const` must be given a value at the time of declaration. `const x;` → Error.

---

### 5.4 Summary / NOTE (Exam Point)

```
WE USE let      -> for updating variables
WE USE const    -> for constant variables
WE DONT USE var -> (old style, avoid it)

let and const -> BLOCK SCOPE variables
var           -> FUNCTION SCOPE variable
```

---

## 6. Variable Naming Rules (Quality Code Rules)

### Rule 1: Variable name should NOT start with a number or symbol

```js
let num_1 = 1;    // ✅ valid
let 1_num = 1;    // ❌ invalid (starts with number)
let %num = 1;     // ❌ invalid (starts with symbol)
```

### Rule 2: Variable name can only contain **letters, numbers, underscore ( _ ), and dollar sign ($)**

```js
let num_1 = 1;        // ✅ valid
let $price = 100;     // ✅ valid ($ is allowed)
let _count = 5;       // ✅ valid ( _ is allowed)
let ^_num = 1;        // ❌ invalid (^ is not allowed)
let number one = 1;   // ❌ invalid (space not allowed)
```

### Rule 3: Variables are CASE SENSITIVE

> **NOTE → JS IS A CASE SENSITIVE LANGUAGE**

```js
let siddhant = 1;
let Siddhant = 2;

console.log(siddhant); // 1  → these are TWO DIFFERENT variables
console.log(Siddhant); // 2
```

### Rule 4: Variable name cannot be a RESERVED KEYWORD of JS

Reserved keywords are words already used by JavaScript itself.

```js
let var = 2;    // ❌ invalid — 'var' is a keyword
let let = 2;    // ❌ invalid
let const = 2;  // ❌ invalid
```

Other reserved keywords: `if, else, for, while, function, class, return, break, new, this, true, false, null` etc.

### Bonus Rule (Best Practice / Code Quality):

- Your variable name should **give a hint / be related to its value**.
- Always declare variable names in **camelCase**.

**camelCase** → the first letter of the variable is small, and every next word starts with a capital letter.

```js
let firstName = "siddhant";   // ✅ correct camelCase
let totalMarks = 90;          // ✅ correct camelCase

let number_One = 1;   // ❌ not camelCase (snake_case style)
let x = 90;           // ❌ name gives no hint of the value
```

---

## 7. Declaring Multiple Variables in a Single Line

```js
// this is a list of names: siddhant, arjun, jui, raj

let first_Name = "siddhant", middle_Name = "Arjun", last_Name = "gadakh";
```

But the cleaner / recommended way is **one variable per line**:

```js
let fName = "siddhant";
let mName = "arjun";
let lName = "gadakh";
```

> **Why?** One per line is easier to read, easier to debug, and easier to update.

---

## 8. Quick Revision (One-Liners)

- Run JS → `node filename.js`
- Print → `console.log()`
- Comments → `//` (single line), `/* */` (multi line) — ignored by the machine
- `let` → value can change, block scope
- `const` → value cannot change, block scope
- `var` → old style, function scope — avoid it
- JS is case-sensitive
- Naming: no number/symbol at start, only letters/numbers/`_`/`$`, no keywords, use camelCase

---

## 9. Practice / Interview Questions

1. How do you run a JavaScript file using Node.js?
2. What are comments and why do we use them? What are the two types?
3. What is a variable in JavaScript?
4. Difference between `let`, `var` and `const`? (Scope + re-assignment)
5. Why do we avoid `var` in modern JavaScript?
6. Is JavaScript case-sensitive? Show an example.
7. Which of these are valid variable names and why?
   - `1num`, `_count`, `$price`, `my name`, `let`, `totalMarks`
8. What happens when you try to update a `const` variable?


