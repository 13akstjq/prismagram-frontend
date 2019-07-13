import { useState } from "react";

export default (defaultValue, type = "text") => {
  const [value, setValue] = useState(defaultValue);

  const onChange = e => {
    const {
      target: { value }
    } = e;
    setValue(value);
  };
  return { value, onChange, type, setValue };
};
