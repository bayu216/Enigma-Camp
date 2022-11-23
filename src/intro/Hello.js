/**
 * Component
 * 1. Menyerupai tag HTML.
 * 2. Suatu component dapat terdiri dari tag HTML biasa atau component lainnya.
 * 3. Component dideklarasikan dengan function atau class.
 * 4. Penamaan component harus PascalCase.
 * 5. Untuk rendering tag/component, minimal harus dibungkus dengan 1 parent tag (Fragment <>).
 */

import { Component } from "react";

export function Hello() {
  return (
    <>
      <h1>Hello Function Component!</h1>
      <h2>Hello FBS2</h2>
    </>
  );
}

export class HelloClass extends Component {
  render() {
    return (
      <>
        <h1>Hello Function Component!</h1>
        <h2>Hello FBS3</h2>
      </>
    );
  }
}
