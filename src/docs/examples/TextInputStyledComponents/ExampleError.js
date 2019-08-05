import React from "react";
import TextInputStyledComponents from "react-components-chris/TextInputStyledComponents";

/** Error TextInput */
export default class ExampleOptional extends React.Component {
  render() {
    return (
      <TextInputStyledComponents
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
