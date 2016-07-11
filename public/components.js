console.log("running components.js");

class CitiesBox extends React.Component {
  render() {
    return (<div className="container-fluid well">
            <h1 className="text-center">Express Cities App with a React Front End</h1>
            /div>);
  }
}

let output = document.getElementById("cities-box");
ReactDom.render(<CitiesBox />, output);
