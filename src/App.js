import React, { Component } from "react";
import "./App.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Table from "./components/Table";
import words from "./components/Words";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guess: "",
      guesses: [],
      currentLetterIndex: 0,
    };
  }

  handleKeyDown = (e) => {
    const { guess, currentLetterIndex } = this.state;

    if (e.key.length === 1 && e.key.match(/[a-zA-Z]/i)) {
      if (guess.length < 5) {
        this.setState({
          guess: guess + e.key,
          currentLetterIndex: currentLetterIndex + 1,
        });
      }
    }

    if (e.key === "Backspace") {
      this.setState({
        guess: guess.slice(0, -1),
        currentLetterIndex: currentLetterIndex > 0 ? currentLetterIndex - 1 : 0,
      });
    }

    if (e.key === "Enter" && guess.length === 5) {
      this.handleSubmitGuess();
    }
  };

  handleSubmitGuess = () => {
    const { guess, guesses } = this.state;

    if (guess.length === 5) {
      if (words.includes(guess)) {
        toast.success("Felicitari Tovarase !", {
        });
        this.setState({
          guesses: [...guesses, guess],
          guess: "",
          currentLetterIndex: 0,
        });
      } else {
        toast.error("Mai incearca, tovarase.", {
        });
      }
    } else {
      toast.error("Cuvântul trebuie să aibă 5 litere.", {
      });
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <h1>Wordle autentic romanesc</h1>
          <ToastContainer
            autoClose={1500} 
            hideProgressBar={true}
            closeButton={false}
            position="bottom-right"
            className="toast-container"
          />
        </div>
        <Table guess={this.state.guess} className="table" />
      </React.Fragment>
    );
  }
}

export default App;
