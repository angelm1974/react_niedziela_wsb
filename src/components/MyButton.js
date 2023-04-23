import React, { useState } from "react";

export default function MyButton() {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleClick = () => {
    setCount(count + 1);
    if (count %2 === 0) {
        setVisible(false)}
    else {
        setVisible(true)
    }
  };

  if (!visible) {
    return (
      <div>
        <button onClick={handleClick} type="button" class="btn btn-secondary">
          Kliknij mnie {count}
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={handleClick} type="button" class="btn btn-secondary">
          Kliknij mnie {count}
        </button>
        <h2>{count}</h2>
      </div>
    );
  }
}
