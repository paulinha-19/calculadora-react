import React, { Component } from "react";
class Resultado extends Component {
    render() {
        let { result } = this.props;
        return (
            <div className="resultado">
                <h3>{result}</h3>
            </div>
        );
    }
}

export default Resultado