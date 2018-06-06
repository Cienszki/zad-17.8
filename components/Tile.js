import React from 'react';


export default class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.givenValue
        };
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    render() {
        return (
            <div>
                <input type="number" min="1" max="9" value={this.state.value} onChange={this.handleChange}/>
            </div>
        );
    }
};