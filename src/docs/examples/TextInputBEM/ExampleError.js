import React from "react";
import TextInputBEM from "react-components-chris/TextInputBEM";

/** Error TextInput */
export default class ExampleOptional extends React.Component {
  render() {
    return (
      <TextInputBEM
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
