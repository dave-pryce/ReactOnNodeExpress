class CitiesBox extends React.Component {
  render() {
    return (<div className="container-fluid well">
            <h1 className="text-center">Express Cities App with a React Front End</h1>

            <div class='container-fluid well'>
            <h2>Add new City</h2>
            <form>
              <input name="name" placeholder="City Name" class="form-control"></input>
              <input name="description" placeholder="City Description" class="form-control"></input>
              <input type ="Submit" class='btn btn-default'></input>
            </form>
            </div>


            </div>);
  }
}

let output = document.getElementById("cities-box");
ReactDOM.render(<CitiesBox/>, output);
