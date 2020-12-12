import { useState, useCallback } from "react";

export const useHandleChange = (initial) => {
  const [value, setValue] = useState(initial);
  const handleChange = useCallback((event) => setValue(event.target.value), []);
  return [value, setValue, handleChange];
};
