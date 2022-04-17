import React from "react";
import "./styles.css";

class App extends React.Component {
  //constructor
  constructor() {
    super();
    this.state = {
      Star: "★",
      emptyStar: "☆",
      rating: 0
    };
  }
  //function of hover
  hoverRating(index) {
    this.setState({
      rating: index
    });
  }

  //function of rate change
  changeRating(index) {
    this.setState({
      rating: index
    });
    alert("New Rating Set = " + index);
  }

  render() {
    const { Star, emptyStar, rating } = this.state;
    return (
      <div>
        {[1, 2, 3, 4, 5].map((value) => {
          return (
            <span
              onClick={() => this.changeRating(value)}
              onMouseEnter={() => this.hoverRating(value)}
              onMouseLeave={() => this.hoverRating(value ? value : 0)}
            >
              {rating >= value ? Star : emptyStar}
            </span>
          );
        })}
      </div>
    );
  }
}

export default App;
