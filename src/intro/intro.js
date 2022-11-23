/**
 * JSX
 * 1. Javascript XML
 * 2. Memungkinkan penulisan tag html di file js
 * 3. Untuk mencetak variable menggunakan kurawa (curly braces {}), termasuk function.
 *
 * Styling
 * 1. inline
 * 2. external (index.css, style.css)
 * 3. external module (styles.module.css)
 * 4. attribute HTML class, berubah menjadi className
 * 5. penulisan style inline, berubah dari kebab-case menjadi camelCase untuk property css yang lebih dari 1 kata
 */
import styles from "./styles.module.css";

const helloStyle = {
  fontSize: "14px", //font-size
  color: "green",
};

const name = "World";
const hello = <h1 style={helloStyle}>Hello React</h1>;
const greet = <h1 className="greet">Hello, {name}</h1>;
const greetHello = (name) => {
  return (
    <h1 className={styles.greet}>Hello, {name} ! Welcome to React Project </h1>
  );
};

export { hello, greet, greetHello };
