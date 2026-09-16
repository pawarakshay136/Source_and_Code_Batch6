# 02 - JavaScript Data Types : Theory Notes

> These notes cover: Data Types in JS, Primitive vs Non-Primitive types, and the `typeof` operator.
> Read these along with the lecture file `LECTURE/02_JS_Datatypes.js`.

---

## 1. What is a Data Type?

- A **data type** tells JavaScript **what kind of value** a variable is holding (number? text? true/false?).
- JavaScript is a **dynamically typed** language → you don't have to declare the type; JS figures it out from the value.

```js
let a = 10;      // JS knows this is a number
let b = "ten";   // JS knows this is a string
```

---

## 2. Two Major Categories of Data in JS

In JavaScript there are **two major categories** of data:

| # | Category | Nature | Changeable? |
|---|----------|--------|-------------|
| 1 | **Primitive** data types | Simple in nature | **Non-changeable (Immutable)** |
| 2 | **Non-Primitive** data types | Complex in nature | **Changeable (Mutable)** — can be changed according to requirement |

---

## 3. Primitive Data Types

Primitive data types are **simple in nature** and are **non-changeable (immutable)** — once created, the value itself cannot be modified; a new value is created instead.

### The main primitive data types:

1. **Number**
2. **String**
3. **Boolean**
4. **Undefined**
5. **Null**

---

### 3.1 Number

- Used for **all numbers** — integers and decimals (there is no separate `int` / `float` in JS).

```js
let age = 25;        // integer
let price = 99.99;   // decimal
let negative = -10;  // negative number
```

- Special number values: `Infinity`, `-Infinity`, and `NaN` (Not a Number).

```js
console.log(10 / 0);    // Infinity
console.log("abc" * 2); // NaN
```

---

### 3.2 String

- Used for **text**. A string is written inside quotes → `"..."`, `'...'`, or backticks.

```js
let name = "siddhant";
let city = 'Pune';
let sentence = `I live in Pune`;
```

- Empty string `""` is also a string.

---

### 3.3 Boolean

- Only **two values** → `true` or `false`.
- Used for **yes/no, on/off, condition checking** (decisions in code).

```js
let isLoggedIn = true;
let isRaining = false;
```

---

### 3.4 Undefined

- A variable that is **declared but no value is given** → its value is `undefined`.
- JS automatically gives `undefined` — you usually don't assign it yourself.

```js
let token;
console.log(token); // undefined
```

---

### 3.5 Null

- `null` means **intentionally empty** / "nothing".
- It is assigned **by the programmer on purpose**, to say "this variable has no value".

```js
let v1 = null;
console.log(v1); // null
```

### Undefined vs Null (Interview Favourite ⭐)

| Point | `undefined` | `null` |
|-------|-------------|--------|
| Meaning | Value not assigned yet | Intentionally empty |
| Who sets it | JavaScript (automatically) | Programmer (manually) |
| `typeof` result | `"undefined"` | `"object"` ← **bug in JS!** |

---

## 4. Non-Primitive Data Types (Reference Types)

Non-primitive data types are **complex in nature** and **can be changed according to requirement (mutable)**.

### 4.1 Array

- An array stores a **list of multiple values** in one variable.
- Values are kept in order using **index numbers starting from 0**.

```js
let students = ["siddhant", "arjun", "jui", "raj"];

console.log(students[0]); // siddhant  (first element — index 0)
console.log(students[3]); // raj       (last element — index 3)

students.push("priya");   // array can be CHANGED (mutable)
console.log(students);    // ["siddhant","arjun","jui","raj","priya"]
```

---

### 4.2 Object

- An object stores data in **key : value pairs**.
- Used to describe one thing with multiple properties.

```js
let student = {
  name: "siddhant",
  age: 22,
  city: "Pune"
};

console.log(student.name); // siddhant
student.age = 23;          // object can be CHANGED (mutable)
```

---

## 5. How to Check a Data Type — `typeof` Operator

To check the data type of any value/variable, we use the **`typeof` operator**.

```js
let Number_1 = 1;
let Name = "siddhant";
let value = true;
let token;
let v1 = null;

console.log(typeof Number_1); // "number"
console.log(typeof Name);     // "string"
console.log(typeof value);    // "boolean"
console.log(typeof token);    // "undefined"
console.log(typeof v1);       // "object"  ← BUG in JS ⚠️
```

### Summary Table of `typeof` results

| Value | `typeof` result |
|-------|-----------------|
| `1`, `99.9`, `-5` | `"number"` |
| `"hello"` | `"string"` |
| `true` / `false` | `"boolean"` |
| undeclared-value variable | `"undefined"` |
| `null` | `"object"` *(known JS bug)* |
| `[1,2,3]` (array) | `"object"` |
| `{name:"x"}` (object) | `"object"` |

> **⭐ Famous Interview Question:** What is `typeof null`?
> **Answer:** `"object"` — this is a **historical bug in JavaScript** that can't be fixed because it would break old websites. `null` is NOT actually an object.

> **Note:** Arrays show `typeof` as `"object"`. To check if something is an array, use `Array.isArray(value)`.

---

## 6. Mutable vs Immutable (Deep Understanding)

### Primitive = Immutable

When you "change" a primitive value, JS actually **creates a new value** — the old one is never modified:

```js
let a = 10;
let b = a;   // b gets a COPY of the value 10
a = 20;
console.log(a); // 20
console.log(b); // 10 → b is not affected (copied by VALUE)
```

### Non-Primitive = Mutable (Reference)

Arrays/objects are stored by **reference** — two variables can point to the same data:

```js
let arr1 = [1, 2, 3];
let arr2 = arr1;    // arr2 points to the SAME array
arr2.push(4);
console.log(arr1);  // [1, 2, 3, 4] → arr1 also changed! (same reference)
```

---

## 7. Quick Revision (One-Liners)

- 2 categories → **Primitive** (simple, immutable) and **Non-Primitive** (complex, mutable).
- Primitive → `number, string, boolean, undefined, null`.
- Non-Primitive → `array, object`.
- Check type → `typeof` operator.
- `typeof null` → `"object"` → **bug in JS**.
- `undefined` = not assigned; `null` = intentionally empty.
- Arrays and objects can be changed after creation (mutable).

---

## 8. Practice / Interview Questions

1. What are the two major categories of data types in JavaScript?
2. List all primitive data types with one example each.
3. Difference between `undefined` and `null`?
4. What does `typeof null` return and why is it surprising?
5. Why are primitive types called "immutable"?
6. How do you check the data type of a variable? Write syntax.
7. What does `typeof [1,2,3]` return? How do you correctly check for an array?
8. Predict the output:

```js
let x;
let y = null;
let z = "25";
console.log(typeof x, typeof y, typeof z);
// Answer: undefined  object  string
```


