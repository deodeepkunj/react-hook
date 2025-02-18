import React, { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <button onClick={increment}>COUNT {count}</button>
    </div>
  );
}

export default HookCounter;
