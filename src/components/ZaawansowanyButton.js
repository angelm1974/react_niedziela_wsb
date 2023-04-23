import React from "react";

function ZaawansowanyButton(props) {
  //   const [visible, setVisible] = useState(true);
  // if(!visible) {
  //     return null;
  // }

  // const handleClick = () => {
  //     console.log("Kliknięto przycisk",props);
  // };

  return (
    <div>
      <h4>ZaawansowanyButton</h4>
      <button
        onClick={props.handleClick}
        type="button"
        class="btn btn-secondary"
      >
        Zamknij
      </button>
    </div>
  );
}

export default ZaawansowanyButton;
