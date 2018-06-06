import React from 'react';
import Tile from './Tile';

export default class Board extends React.Component {
    constructor(props) {
        super();

    }
    render() {
        var boardArray = split(this.props.board)    
        var tileComponents = boardArray.map(function(givenValue){
            return (
                <Tile givenValue={givenValue} />
            );
        });  
        return (
            <div>
               {tileComponents}
            </div>
        );
    }
}