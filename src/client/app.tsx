import React from "react";
import "./styles/styles.scss";

class App extends React.Component<{}, {}> {
    render() {
        return (<div>
            <h1>Oh, hello there!</h1>
            <button>Just</button>
            <br></br>
            <br></br>
            <input type="text" placeholder="Type here" />
        </div>);
    }
}

export default App;