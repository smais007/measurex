# measurex 📦


A lightweight and efficient **conversion utility** that supports various **number system conversions**, unit conversions, and more. 🚀

---

## 📌 Features

 
✅ **Unit Conversions** (Length, Weight, Temperature, etc.)  
✅ **Simple API & Zero Dependencies**  
✅ **Lightweight & Fast**  
✅ **TypeScript Support**  

---

## 📦 Installation

Install via **npm**:

```sh
npm install measurex
```

---

## 🚀 Usage


###  Unit Conversions
```ts
import { conver } from "measurex";

// Convert 10 meters to feet
console.log(convertUnit(10, "Meter", "Feet")); // "32.8084"

// Convert 100°F to Celsius
console.log(convertUnit(100, "Fahrenheit", "Celsius")); // "37.7778"
```

---

## 📚 API Reference

###  `convert(value: number, from: string, to: string): number`
Converts between different units (length, weight, temperature, etc.).

| Parameter | Type      | Description                      |
|-----------|----------|----------------------------------|
| `value`   | `number` | The value to convert            |
| `from`    | `string` | The unit of the input value     |
| `to`      | `string` | The unit to convert to          |

Supported Units: `meters`, `feet`, `kilograms`, `pounds`, `celsius`, `fahrenheit`, etc.

---

## 📜 License

This project is **MIT licensed**. See [LICENSE](./LICENSE) for details.

---

## 🌟 Contributing

We welcome contributions! Follow these steps:

1. **Fork** the repo
2. **Clone** your fork:  
   ```sh
   git clone https://github.com/smais007/measurex.git
   ```
3. **Install dependencies**:  
   ```sh
   npm install
   ```
4. **Make changes & commit**:  
   ```sh
   git commit -m "Your meaningful commit message"
   ```
5. **Push & create a pull request** 🚀

---

## 🔗 Links

- **NPM Package**: [measurex](https://www.npmjs.com/package/common-converter)
- **GitHub Repo**: [GitHub](https://github.com/smais007/measurex)

---

## 👨‍💻 Author

Developed by [S M Ariful Islam Shawon](https://smais-dev-v2.vercel.app/). Feel free to reach out! 😊

---

⭐ **If you like this package, don't forget to** ⭐ **star the repo!** 🚀
