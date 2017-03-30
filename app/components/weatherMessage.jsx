var React = require('react');

var WeatherMessage = React.createClass({
  render : function () {

    var {temp,location} = this.props;

    return(
      <div>
        <h1 className="text-center">Its {temp} in {location}</h1>
       </div>

    )
  }
})

module.exports = WeatherMessage;
