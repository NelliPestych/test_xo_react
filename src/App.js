import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      count: 0,
      player1: "",
      player2: "",
      playerX: 0,
      playerO: 0,
      winner0: false,
      winner1: false,
      winner2: false,
      winner3: false,
      winner4: false,
      winner5: false,
      winner6: false,
      winner7: false,
      winner: false,
    };

    this.winnerLine = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  }

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
  };

  isWinner = () => {
    let s = this.state.count % 2 === 0 ? "❀" : "♡";
    let winnerName =
      this.state.count % 2 === 0 ? this.state.player1 : this.state.player2;
    for (let i = 0; i < 8; i++) {
      let line = this.winnerLine[i];
      if (
        this.state.squares[line[0]] === s &&
        this.state.squares[line[1]] === s &&
        this.state.squares[line[2]] === s &&
        this.state.count % 2 === 0
      ) {
        this.setState({ playerX: this.state.playerX + 1 });
        this.setState({ winner: true });
        console.log(this.state.playerX + 1);
        setTimeout(() => {
          alert(winnerName + "_wins");
        }, 2000);
        setTimeout(() => {
          this.setState({ squares: Array(9).fill(null) });
          this.setState({ count: 0 });
          this.setState({ winner: false });
        }, 3000);
      } else if (
        this.state.squares[line[0]] === s &&
        this.state.squares[line[1]] === s &&
        this.state.squares[line[2]] === s &&
        this.state.count % 2 !== 0
      ) {
        this.setState({ playerO: this.state.playerO + 1 });
        this.setState({ winner: true });
        console.log(this.state.playerO + 1);
        setTimeout(() => {
          alert(winnerName + "_wins");
        }, 2000);
        setTimeout(() => {
          this.setState({ squares: Array(9).fill(null) });
          this.setState({ count: 0 });
          this.setState({ winner: false });
        }, 3000);
      } else if (
        this.state.squares[0] === s &&
        this.state.squares[1] === s &&
        this.state.squares[2] === s
      ) {
        this.setState({ winner0: true });
        setTimeout(() => {
          this.setState({ winner0: false });
        }, 3500);
      } else if (
        this.state.squares[3] === s &&
        this.state.squares[4] === s &&
        this.state.squares[5] === s
      ) {
        this.setState({ winner1: true });
        setTimeout(() => {
          this.setState({ winner1: false });
        }, 3500);
      } else if (
        this.state.squares[6] === s &&
        this.state.squares[7] === s &&
        this.state.squares[8] === s
      ) {
        this.setState({ winner2: true });
        setTimeout(() => {
          this.setState({ winner2: false });
        }, 3500);
      } else if (
        this.state.squares[0] === s &&
        this.state.squares[3] === s &&
        this.state.squares[6] === s
      ) {
        this.setState({ winner3: true });
        setTimeout(() => {
          this.setState({ winner3: false });
        }, 3500);
      } else if (
        this.state.squares[1] === s &&
        this.state.squares[4] === s &&
        this.state.squares[7] === s
      ) {
        this.setState({ winner4: true });
        setTimeout(() => {
          this.setState({ winner4: false });
        }, 3500);
      } else if (
        this.state.squares[2] === s &&
        this.state.squares[5] === s &&
        this.state.squares[8] === s
      ) {
        this.setState({ winner5: true });
        setTimeout(() => {
          this.setState({ winner5: false });
        }, 3500);
      } else if (
        this.state.squares[0] === s &&
        this.state.squares[4] === s &&
        this.state.squares[8] === s
      ) {
        this.setState({ winner6: true });
        setTimeout(() => {
          this.setState({ winner6: false });
        }, 3500);
      } else if (
        this.state.squares[2] === s &&
        this.state.squares[4] === s &&
        this.state.squares[6] === s
      ) {
        this.setState({ winner7: true });
        setTimeout(() => {
          this.setState({ winner7: false });
        }, 3500);
      } else if (!this.state.squares.includes(null) && this.state.winner !== true) {
          setTimeout(() => {
            this.setState({ squares: Array(9).fill(null) });
            this.setState({ count: 0 });
          }, 3500);
      }
    }
  };

  clickHandler = (event) => {
    let data = event.target.getAttribute("data");
    let currentSquares = this.state.squares;
    if (currentSquares[data] === null) {
      currentSquares[data] = this.state.count % 2 === 0 ? "❀" : "♡";
      this.setState({ count: this.state.count + 1 });
      this.setState({ squares: currentSquares });
    } else {
      alert("ЭТО ПОЛЕ УЖЕ ЗАПОЛНЕНО!");
    }
    this.isWinner();
  };

  render() {
    const { player1, player2, playerX, playerO } = this.state;
    return (
      <div className="main-desktop">
        {!player1 || !player2 ?
        <form className="players" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Введите имя Игрока 1"
            onChange={this.handleChange}
            name="player1"
            value={player1}
          ></input>
          <input
            type="text"
            placeholder="Введите имя Игрока 2"
            onChange={this.handleChange}
            name="player2"
            value={player2}
          ></input>
        </form> : <div></div>}
        {player1 && player2 ?
        <div>
          {!this.state.squares.includes(null) && this.state.winner !== true ? <div className="counter">НИЧЬЯ!</div> : <div></div>}
        <div className="tic-tac-toe">
          <div className="ttt-grid" onClick={this.clickHandler} data="0">
            {this.state.squares[0]}
          </div>
          <div className="ttt-grid" onClick={this.clickHandler} data="1">
            {this.state.squares[1]}
          </div>
          <div className="ttt-grid" onClick={this.clickHandler} data="2">
            {this.state.squares[2]}
          </div>
          <div className="ttt-grid" onClick={this.clickHandler} data="3">
            {this.state.squares[3]}
          </div>
          <div className="ttt-grid" onClick={this.clickHandler} data="4">
            {this.state.squares[4]}
          </div>
          <div className="ttt-grid" onClick={this.clickHandler} data="5">
            {this.state.squares[5]}
          </div>
          <div className="ttt-grid" onClick={this.clickHandler} data="6">
            {this.state.squares[6]}
          </div>
          <div className="ttt-grid" onClick={this.clickHandler} data="7">
            {this.state.squares[7]}
          </div>
          <div className="ttt-grid" onClick={this.clickHandler} data="8">
            {this.state.squares[8]}
          </div>
          {this.state.winner0 ? (
            <div className="line-through"></div>
          ) : (
            <div></div>
          )}
          {this.state.winner1 ? (
            <div className="line-through1"></div>
          ) : (
            <div></div>
          )}
          {this.state.winner2 ? (
            <div className="line-through2"></div>
          ) : (
            <div></div>
          )}
          {this.state.winner3 ? (
            <div className="line-through3"></div>
          ) : (
            <div></div>
          )}
          {this.state.winner4 ? (
            <div className="line-through4"></div>
          ) : (
            <div></div>
          )}
          {this.state.winner5 ? (
            <div className="line-through5"></div>
          ) : (
            <div></div>
          )}
          {this.state.winner6 ? (
            <div className="line-through6"></div>
          ) : (
            <div></div>
          )}
          {this.state.winner7 ? (
            <div className="line-through7"></div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="counter">
          {player1} : {playerX}
        </div>
        <div className="counter">
          {player2} : {playerO}
        </div>
        </div> : <div className="notification">ВВЕДИТЕ ИМЕНА ИГРОКОВ</div>}
      </div>
    );
  }
}
export default App;
