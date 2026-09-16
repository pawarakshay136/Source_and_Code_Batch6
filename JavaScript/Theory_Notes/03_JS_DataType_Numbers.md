# 03 - JavaScript Data Type: Numbers : Theory Notes

> These notes cover: The **Number** data type, **Methods vs Properties**, and the `Math.` methods — `floor()`, `ceil()`, `round()`, `toFixed()` and `random()`.
> Read these along with the lecture file `LECTURE/03_JS_DataType_Numbers.js`.

---

## 1. What is the Number Data Type?

- **Number** is a primitive data type that represents **all the numeric values**.
- In JS there is **no separate `int` / `float`** → integers and decimals (floating point) are **ALL** of type `number`.

```js
let integer = -200;               // integer (can be negative)
let floating_number = 250.12254;  // decimal / floating point number

console.log(typeof integer);          // "number"
console.log(typeof floating_number);  // "number"
```

### Why do we use Numbers in JS? (Day-to-day use)

- To perform **arithmetic operations** → `+  -  *  /  %`
- To perform **logical operations** → comparisons like `>  <  >=  <=  ===`
- Real life → price, marks, age, discount, percentage, counters, etc.

---

## 2. Every Data Type in JS has 2 Things

In JS, **any type of data** we have comes with **2 things**:

| Thing | Meaning | Example (Number) |
|-------|---------|------------------|
| **Method** | Commands used to perform various **operations** (actions) | `Math.floor()`, `Math.round()` |
| **Property** | **Inherited values** / some key information attached to the data | `length`, `MAX_SAFE_INTEGER` |

### Easy way to remember — Real life analogy 🧠

**HUMANS →**
- **Method** (operations) → day job, walking, coding
- **Property** (inherited values) → name given to us, height, weight

**CAR →**
- **Method** (operations) → drive, start, speed ratio
- **Property** (inherited values) → car type, engine type, fuel type, color

> **📌 NOTE for Number datatype:** Every operation/method performed on a Number will have a prefix attached → **`Math.`**
> e.g. `Math.floor()`, `Math.ceil()`, `Math.round()`, `Math.random()`
> (Exception → `.toFixed()`, which is called **directly on the number**.)

---

## 3. `Math.floor()` — Round DOWN ⬇️

- Rounds a floating number **down to its nearest lower integer** (converts floating → lower integer).

```js
let num_1 = 99.99;

console.log(Math.floor(num_1));
// output received -> 99
```

- `10.235674687` → `10`
- Works on negatives too → `Math.floor(-4.2)` → `-5` (always moves to the *lower* side)

---

## 4. `Math.ceil()` — Round UP ⬆️

- Rounds a floating number **up to its nearest higher integer** (converts floating → higher integer).

```js
let num_2 = 10.2;

console.log(Math.ceil(num_2));
// output received -> 11
```

- `10.12` → `11`
- Works on negatives too → `Math.ceil(-4.8)` → `-4` (always moves to the *higher* side)

---

## 5. `Math.round()` — Round to NEAREST 🎯

- Rounds the number to the **nearest integer** (normal maths rounding).
- Condition depends on the decimal part:
  - `.5` – `.9` → rounds **UP** (behaves like ceil)
  - `.0` – `.4` → rounds **DOWN** (behaves like floor)

```js
let num_3 = 20.2;
let num_4 = 20.5;

console.log(Math.round(num_3)); // 20  -> rounds down (0.2)
console.log(Math.round(num_4)); // 21  -> rounds up   (0.5)
```

### floor vs ceil vs round — Quick Compare (Interview Favourite ⭐)

| Value | `Math.floor()` | `Math.ceil()` | `Math.round()` |
|--------|----------------|---------------|----------------|
| `10.2` | `10` | `11` | `10` |
| `10.5` | `10` | `11` | `11` |
| `10.9` | `10` | `11` | `11` |
| `99.99` | `99` | `100` | `100` |

---

## 6. `.toFixed()` — Format Decimal Places

- Formats the number to a **given number of decimal points**.
- Called **directly on the number** (no `Math.` prefix) → `number.toFixed(n)`.
- It also **rounds** the last digit, and returns a **string**.

```js
let num_5 = 10.658912355;

console.log(num_5.toFixed(2)); // 10.66
console.log(num_5.toFixed(1)); // 10.7
console.log(num_5.toFixed(4)); // 10.6589
```

> Common real-life use → showing prices/marks: `price.toFixed(2)` → `499.00`

---

## 7. `Math.random()` — Random Number Generator 🎲

- Generates a random decimal number from **0 to 0.9999...** (never exactly 1).

```js
console.log(Math.random());
/**
 * output 1 - 0.3714080913906401
 * output 2 - 0.02345965359106006
 * output 3 - 0.8787715496647563
 */
```

### Why is it used? Why is this asked in INTERVIEWS? ⭐

- It is used to generate **random test data**
- It is used to generate **edge / non-predictable** cases
- It is also used for **encryption of credentials** (tokens, OTPs, keys)

---

## 8. Generating a Random Number between 0–100 (Recipe)

**Step 1 →** Multiply by 100 to shift the range:

```js
console.log(Math.random() * 100);
// lowest number 0 and highest number is 99.9999
```

**Step 2 →** Convert the decimal into an integer. Which method to use?

| Method | Result after `Math.random() * 100` |
|--------|-------------------------------------|
| `Math.ceil()` | lowest → `1`, highest → `100` |
| `Math.floor()` | lowest → `0`, highest → `99` |
| `Math.round()` | lowest sometimes may become `1`, higher may become `99` (edge behaviour) |
| `.toFixed()` | **not considered**, because of the difference in point (behaves like round) |

**Final code used in lecture:**

```js
console.log(Math.round(Math.random() * 100));
```

---

## 9. Quick Revision (One-Liners)

- Number = **all numeric values** (integer + decimal) → `typeof` always gives `"number"`.
- Every data in JS has **Methods** (operations) and **Properties** (inherited values).
- Number methods use the **`Math.`** prefix (exception → `.toFixed()` called on the number itself).
- `Math.floor()` → rounds **down** | `Math.ceil()` → rounds **up** | `Math.round()` → **nearest** (`.5` and above goes up).
- `.toFixed(n)` → formats to **n decimal places** (returns a string).
- `Math.random()` → random decimal from **0 to 0.999...**
- Random integer 0–100 → `Math.round(Math.random() * 100)`.

---

## 10. Practice / Interview Questions

1. What does the Number data type represent in JS? Is there a separate `int` / `float` in JavaScript?
2. What is the difference between a **method** and a **property**? Explain with a real-life analogy.
3. Which prefix is used for Number operations/methods and why?
4. Predict the output: `Math.floor(7.9)`, `Math.ceil(7.1)`, `Math.round(7.5)`
5. What does `10.658.toFixed(2)` return? What data type does `.toFixed()` return?
6. What is the range of `Math.random()`? Mention 3 real uses of it.
7. Write a one-line code to generate a random integer between 0 and 100.
8. Predict the output:

```js
let price = 99.99;
console.log(Math.floor(price), Math.ceil(price), Math.round(price), price.toFixed(1));
// Answer: 99  100  100  "100.0"
```
