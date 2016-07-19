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
                {cities}
                <CitiesForm addCity={this._addCity.bind(this)}/>
                </div>);
  }


  _getCities() {
    return this.state.cities.map((city) => {
      return (
        <City
        id={city.id}
        key={city.id}
        name={city.name}
        description={city.description}
        />);
    });
  }


  _addCity(cityName, cityDescription){
    let city = {
      // generate unqiue id
      id: Math.floor(Math.random() * (9999 - this.state.cities.length + 1)) + this.state.cities.length,
      name: cityName,
      description: cityDescription
    };

    this.setState({
      cities: this.state.cities.concat([city])
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

// end cities box
}


class City extends React.Component {
  render() {
    return (<div className="panel panel-default">
      <div className="panel-heading">
      <h4>{this.props.name}</h4>
      </div>
      <div className="panel-body">
      <p>{this.props.description}</p>
      <button className="btn-link pull-right">Delete</button>
      </div>
    </div>);
  }
}


class CitiesForm extends React.Component {
  render() {
  return  (<div className='container-fluid well'>
    <h3>Add new City</h3>
    <form onSubmit={this._handleSubmit.bind(this)}>
      <input name="name" placeholder="City Name" className="form-control" ref={input => this._name = input}></input>
      <textarea name="description" placeholder="City Description" className="form-control" ref={textarea => this._description = textarea}></textarea>
      <button type ="Submit" className='btn btn-default'>Add City</button>
    </form>
    </div>);
  }


  _handleSubmit(event) {
    event.preventDefault();
    this.props.addCity(this._name.value, this._description.value);
    this._name.value = '';
    this._description.value = '';
  }
}


let output = document.getElementById("cities-box");
ReactDOM.render(<CitiesBox/>, output);
