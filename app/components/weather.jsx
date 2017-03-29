var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
  //Default value
  getInitialState: function() {
      return{
        location : 'Miami',
        temp  : 88
      }
  },

  handleSearch :  function (location){
  //  alert(location);
    //Changing the state of Weather
    this.setState({
      location : location,
      temp : 23
    });
  },
  render : function() {
    //Since state has both the variables so
    // we pulled it from there to use them as
    //props in WeatherMessage
    //es6 Destructuring
    var {temp, location} = this.state;

    return(
    <div>
        <h3>Weather Components</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage location={location} temp={temp}/>
    </div>
    )
  }
})

module.exports = Weather;
