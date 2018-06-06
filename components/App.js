import React from 'react';
import Board from './Board';
import sudoku from 'sudoku-umd';



export default class App extends ReactComponent {
    constructor(props) {
        super();
        this.state = {
            initialBoard: '',
            board: '',
            difficulty: 'easy'
        }
    }
    resetBoard(){
        this.setState({board: initialBoard});
    }
    newGame(){
        var newSudoku = sudoku.generate(this.state.difficulty);
        
        this.setState({initialBoard: newSudoku, board: initialBoard});
    }
    solveBoard(){
        var solvedBoard = sudoku.solve(this.state.board);
        if (solvedBoard == false) {
            alert('Panie kierowniku błąd się wdarł gdzieś... :((');
        }
        else {
            this.setState({board: solvedBoard});
        }
    }
    checkBoard(){
        var checkedBoard = sudoku.solve(this.state.board);
        if (this.checkedBoard == false) {
            alert('Uu, a co to za błąd się pojawił, trzeba poprawić i to już !');
        }
        else {
            alert('Noooo, piękna sprawa, idzie dobrze jak flaszka na 4ch w środe przed pracą hehe');
        }
    }
    render() {
        return (
            <div className="App">
                <h1>Sudoku</h1>
                <Board board={this.state.board}/>
                <div className="buttons">
                    <button onClick={this.checkBoard}>Check</button>
                    <button onClick={this.newGame}>New Game</button>
                    <button onClick={this.solveBoard}>Solve</button>
                    <button onClick={this.resetBoard}>Restart</button>
                </div>
            </div>
        );
    }
};