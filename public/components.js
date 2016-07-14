class CitiesBox extends React.Component {
  render() {
    return (<div>
                <div className="container-fluid well">
                <h1 className="text-center">Cities App</h1>
                <p className="text-center">React front-end / Express Node Back-end</p>
                </div>

                <CitiesList data={this.props.data}/>
                <CitiesForm/>
            </div>);
  }
}


class CitiesList extends React.Component {
  render() {
    return (
          <div className="container-fluid well">
          <h3>Cities List</h3>
          <ul>
          <City name="Melbourne" description="Hipsters"/>
          </ul>
          </div>);
  }
}


class City extends React.Component {
  render() {
    return (<div>
      <p>{this.props.name} {this.props.description}</p>
    </div>);
  }
}


class CitiesForm extends React.Component {
  render() {
  return  (<div className='container-fluid well'>
    <h3>Add new City</h3>
    <form>
      <input name="name" placeholder="City Name" className="form-control"></input>
      <input name="description" placeholder="City Description" className="form-control"></input>
      <input type ="Submit" className='btn btn-default'></input>
    </form>
    </div>);
  }
}


//var data = [
//  {id: 1, name: "Melbourne", description: "Hipsters"},
//  {id: 2, name: 'Sydney', description:  'Surfers'},
//  {id: 3, name: 'Brisbane', description: 'Vegas'},
//  {id: 4, name: 'Adelaide', description: 'Churches'
//];


let output = document.getElementById("cities-box");
ReactDOM.render(<CitiesBox/>, output);
