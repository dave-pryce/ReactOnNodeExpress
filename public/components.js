class CitiesBox extends React.Component {
  render() {
    return (<div>
                <div className="container-fluid well">
                <h1 className="text-center">Express Cities App with a React Front End</h1>
                </div>

                <Cities/>
                <CitiesForm/>
            </div>);
  }
}


class Cities extends React.Component {
  render() {
    return (<div className="container-fluid well">
          <h3><ul>XXX</ul></h3>
          </div>);
  }
}


class CitiesForm extends React.Component {
  render() {
  return  (<div className='container-fluid well'>
    <h2>Add new City</h2>
    <form>
      <input name="name" placeholder="City Name" className="form-control"></input>
      <input name="description" placeholder="City Description" className="form-control"></input>
      <input type ="Submit" className='btn btn-default'></input>
    </form>
    </div>);
  }
}



let output = document.getElementById("cities-box");
ReactDOM.render(<CitiesBox/>, output);
