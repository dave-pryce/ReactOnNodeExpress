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
                <p className="text-center">React front-end</p>
                <p className="text-center">Node - Express Back-end</p>
                <p className="text-center">Mongo DataBase</p>
                </div>
                {cities}
                <CitiesForm addCity={this._addCity.bind(this)}/>
                </div>);
  }


  _getCities() {
    return this.state.cities.map((city) => {
      return (
        <City
        key={city._id}
        city={city}
        name={city.name}
        description={city.description}
        onDelete={this._deleteCity.bind(this)}
        />);
    });
  }


  _addCity(name, description){
    const city = {name, description};
    $.post('/cities', { city })
      .success(newCity => {
        this.setState({cities: this.state.cities.concat([city]) });
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



_deleteCity(city) {
const cities = [...this.state.cities];
const cityIndex = cities.indexOf(city);
//const cityid = city._id;
const cityName = city.name

  $.ajax({
    method : 'DELETE',
    url: '/cities/' + cityName
  });

  cities.splice(cityIndex,1);
  this.setState({ cities });
}

// end cities box
}


class City extends React.Component {
  render() {
    return (
    <div className="panel panel-default">
      <div className="panel-heading">
      <h4>{this.props.name}</h4>
      </div>
      <div className="panel-body">
      <p>{this.props.description}</p>
      <button className="btn-link pull-right" onClick={this._handleDelete.bind(this)}>Delete</button>
      </div>
    </div>);
  }


  _handleDelete(event) {
    event.preventDefault();
    this.props.onDelete(this.props.city);
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
