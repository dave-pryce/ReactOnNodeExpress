class CitiesBox extends React.Component {
  constructor() {
    super();

    this.state = {
      showCities: false,
      cities: []
    };
  }


  componentWillMount(){
    this._fetchCities();
  }

  render() {
    const cities = this._getCities();
    return (<div>
                <div className="container-fluid well">
                <h1 className="text-center">Cities App</h1>
                <p className="text-center">React front-end / Express Node Back-end</p>
                </div>
                <CitiesList/>
                {cities}
                <CitiesForm/>
            </div>);
  }


  _getCities() {
    return this.state.cities.map((city) => {
      return (
        <City
        key={city.id}
        name={city.name}
        description={city.description}
        />);
    });
  }

_fetchCities(){
  $.ajax({
    method: 'GET',
    url: '/cities',
    success: (cities) => {
      this.setState({cities});
    }
  })
}

}


class CitiesList extends React.Component {
  render() {
    return (
          <div className="container-fluid well">
          <h3>Cities List</h3>
          <City/>
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


let output = document.getElementById("cities-box");
ReactDOM.render(<CitiesBox/>, output);
