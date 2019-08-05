import React from "react";
import TextInputCSSModules from "react-components-chris/TextInputCSSModules";

/** Error TextInput */
export default class ExampleOptional extends React.Component {
  render() {
    return (
      <TextInputCSSModules
        htmlId="example-optional"
        label="First Name"
        name="firstname"
        onChange={() => {}}
        required
        error="First name is required."
      />
    );
  }
}
