<div align="center">

# 🔄 Understanding Generics in TypeScript

### Building Reusable and Strictly Typed Components & Functions

</div>

---

# 📌 Introduction

In TypeScript, Generics help developers create reusable functions, components, and classes while still maintaining strong type safety.

Instead of writing separate logic for different data types, Generics allow us to write flexible and reusable code that automatically adapts to the provided data type.

This makes code:

- Reusable
- Cleaner
- More scalable
- Type-safe

---

# 🚀 What are Generics?

Generics allow us to create functions or components that work with multiple data types without losing TypeScript’s type checking.

---

# ❌ Without Generics

```ts
function getString(value: string): string {
  return value;
}
```

This function only works for strings.

If we want the same logic for numbers or arrays, we would need to create multiple functions.

---

# ✅ With Generics

```ts
function getValue<T>(value: T): T {
  return value;
}
```

Here:

```ts
<T>
```

is a generic type parameter.

It acts like a placeholder for any type.

---

# 🔍 Example Usage

```ts
const name = getValue<string>("Al Zami");

const age = getValue<number>(20);

const numbers = getValue<number[]>([1, 2, 3]);
```

TypeScript automatically keeps the correct type for each value.

---

# 🛡️ Why Generics are Powerful

Generics help us build reusable code without sacrificing type safety.

For example:

```ts
function getValue<T>(value: T): T {
  return value;
}
```

This single function can safely work with:

- strings
- numbers
- arrays
- objects

without rewriting logic multiple times.

---


# 🏁 Conclusion

Generics are one of the most powerful features in TypeScript.

They allow developers to create reusable and scalable code while maintaining strict type safety.

Instead of writing duplicate logic for different data types, Generics help us write:

✅ Cleaner code  
✅ Reusable functions  
✅ Flexible components  
✅ Safer applications

