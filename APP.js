import React, { Component } from "react";

import "./styles.css";

var pages = {
  start: {
    content: (getData, setData) =>
      <p>
        <h1> 
        - Answer the following question.-
        </h1> 
        <br />
        <br />
        1）Interjection
        <br />
        <input type="text" value={getData("Q1")} onChange={event => setData("Q1", event.target.value)} />
        <br />
        <br />
        2）Noun
        <br />
        <input type="text" value={getData("Q2")} onChange={event => setData("Q2", event.target.value)} />
        <br />
        <br />
        3）Verb ending in"ing"
        <br />
        <input type="text" value={getData("Q3")} onChange={event => setData("Q3", event.target.value)} />
        <br />
        <br />
        4）Noun-Place
        <br />
        <input type="text" value={getData("Q4")} onChange={event => setData("Q4", event.target.value)} />
        <br />
        <br />
      </p>,
    buttons: [{ label: "Next", page: "page2" }]
  },
  page2: {
    content: (getData, setData) =>
      <p>
        5）Plural Noun 
        <br />
        <input type="text" value={getData("Q5")} onChange={event => setData("Q5", event.target.value)} />
        <br />
        <br />
        6）Adjective
        <br />
        <input type="text" value={getData("Q6")} onChange={event => setData("Q6", event.target.value)} />
        <br />
        <br />
        7）Noun
        <br />
        <input type="text" value={getData("Q7")} onChange={event => setData("Q7", event.target.value)} />
        <br />
        <br />
      </p>,
    buttons: [{ label: "Next", page: "page3" }]
  },
  page3: {
    content: (getData, setData) => 
      <p>
        8）Noun
        <br />
        <input type="text" value={getData("Q8")} onChange={event => setData("Q8", event.target.value)} />
        <br />
        <br />
        9）Adjective
        <br />
        <input type="text" value={getData("Q9")} onChange={event => setData("Q9", event.target.value)} />
        <br />
        <br />
        10）Noun
        <br />
        <input type="text" value={getData("Q10")} onChange={event => setData("Q10", event.target.value)} />
        <br />
        <br />
      </p>,
    buttons: [{ label: "Story", page: "story" }]
},
  story: {
  content: (getData, setData) => 
    <p>
      <h1> 
        - Story -
        </h1> 
        <br />
       <span className="wordscolor"> {getData("Q1")}</span>! The 
       <span className="wordscolor"> {getData("Q2")}</span> is 
       <span className="wordscolor"> {getData("Q3")}</span> on 
       <span className="wordscolor"> {getData("Q4")}</span>! 
       <span className="wordscolor"> {getData("Q5")}</span> 
       <span className="wordscolor"> {getData("Q6")}</span> 
       <span className="wordscolor"> {getData("Q7")}</span> and 
       <span className="wordscolor"> {getData("Q8")}</span> .Do you 
       <span className="wordscolor"> {getData("Q9")}</span>  the 
       <span className="wordscolor"> {getData("Q10")}</span> ?
       <br />
    </p>,
  buttons: [{ label: "Restart", page: "start" }]
}
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "start",
    };
  }

  goToPage(pageName) {
    this.setState({
      page: pageName
    });
  }

  setData(dataName, dataValue) {
    var newState = {};
    newState[dataName] = dataValue;
    this.setState(newState);
  }

  render() {
    var pageData = pages[this.state.page];

    return (
      <div className="App">
        {pageData.content((dataName) => this.state[dataName], (name, value) => this.setData(name, value))}
        {pageData.buttons.map(buttonInfo => (
          <button onClick={() => this.goToPage(buttonInfo.page)}>
            {buttonInfo.label}
          </button>
        ))}
      </div>
    );
  }
}

export default App;
