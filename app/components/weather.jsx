var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  //Default value
  getInitialState: function() {
      return{
        isLoading : false,

      }
  },

  handleSearch :  function (location){
    var that = this;
    this.setState({
      isLoading : true,
      errorMessage: undefined
    });
    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location:location,
        temp:temp,
        isLoading : false
      })
    }, function(e){
      that.setState({
        isLoading: false,
        erroeMessage : e.message
      });
      alert(errorMessage);
    })
  //  alert(location);
    //Changing the state of Weather
    // this.setState({
    //   location : location,
    //   temp : 23
    // });

  },
  render : function() {
    //Since state has both the variables so
    // we pulled it from there to use them as
    //props in WeatherMessage
    //es6 Destructuring
    var {isLoading, temp, location, errorMessage} = this.state;

     function renderMessage(){
       if(isLoading){
         return <h3 className="text-center">Fetching Weather..</h3>;
       }
       else if (temp && location) {
         return     <WeatherMessage location={location} temp={temp}/>;
       }
     }
     function renderError(){
       if (typeof errorMessage==='string') {
         return <ErrorModal/>
       }
     }
    return(
    <div>
    
        <h3 className="text-center page-title">Get Weather</h3>
        <WeatherForm onSearch={this.handleSearch}/>
     {renderMessage()}
     {renderError()}


    </div>
    )
  }
})

module.exports = Weather;
