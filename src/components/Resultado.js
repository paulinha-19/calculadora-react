import React, { Component } from "react";
import StyledResultado from './styled/StyledResultado'
class Resultado extends Component {
    render() {
        let { result } = this.props;
        return (
            <StyledResultado>
                <h3>{result}</h3>
            </StyledResultado>
        );
    }
}

export default Resultado