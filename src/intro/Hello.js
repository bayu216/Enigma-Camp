/**
 * Component
 * 1. Menyerupai tag HTML.
 * 2. Suatu component dapat terdiri dari tag HTML biasa atau component lainnya.
 * 3. Component dideklarasikan dengan function atau class.
 * 4. Penamaan component harus PascalCase.
 * 5. Untuk rendering tag/component, minimal harus dibungkus dengan 1 parent tag (Fragment <>).
 *
 * Props
 * 1. Props adalah attribute dari suatu component
 * 2. Untuk function component, mengakses attribute component bisa dilakukan dengan cara menambahkan parameter props diantara parentheses.
 * 3. Cara interaksi antarkomponen, arahnya cuma dari atas kebawah (bisa dikatakan satuarah, dari parent ke child), readonly karena tidak bisa diubah.
 */

import { Component } from "react";

// export function Hello(props) {
//   const { car } = props;
//   return (
//     <>
//       <h1>{car.name}</h1>
//       <h1>{car.brand}</h1>
//       {props.greet()}
//     </>
//   );
// }

export function Hello(props) {
  console.log("props", props);
  // let name = props.name;
  props.greet();
  //name = "Jono";
  return (
    <>
      <h1>
        Hello {props.nama}, Mobilnya : {props.name} Mereknya :{props.brand}
        Function Component!
      </h1>
      <div>{props.greet()}</div>
      <h2>Hello FBS2</h2>
    </>
  );
}

// export class HelloClass extends Component {
//   render() {
//     const props = this.props;
//     return (
//       <>
//         <h1>
//           Hello {props.nama}, Mobilnya : {props.name}, Mereknya :{props.brand}
//           Function Component!
//         </h1>
//         <div>{props.greet()}</div>
//         <h2>Hello FBS3</h2>
//       </>
//     );
//   }
// }

export class HelloClass extends Component {
  render() {
    const { car, children, HelloCoba } = this.props;
    //const car2 = this.props.car;
    console.log(this.props);
    return (
      <>
        <h1>
          Hello, mobilnya : {car.name}, Mereknya :{car.brand}
          Function Component!
        </h1>
        <h2>Hello FBS3</h2>
        {children}
        <HelloCoba />
      </>
    );
  }
}
