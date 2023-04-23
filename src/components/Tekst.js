import React from "react";
import "./tekst.css";

class Tekst extends React.Component {
  static defaultProps = {
    tekst_opisu: "Opis",
    tekst_przycisku: "Przycisk",
  };

  render() {
    return (
      <div>
        <div className="tekst">{this.props.tekst_opisu}</div>
        <button type="button" class="btn btn-primary">
          {this.props.tekst_przycisku}
        </button>
      </div>
    );
  }
}
export default Tekst;