var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit : function(e){
    e.preventDefault();
      //location has the value entered in the input field
      var location = this.refs.location.value;

      //calling the parent function N sending the 'location' to it
      if(location.length>0){
        this.refs.location.value = '';
        this.props.onSearch(location);
        }
  },
  render : function () {
    return(
      <div>Weather Form component
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="location"/>
          <button>Get Weather</button>
      </form>
      </div>
    )
  }
})

module.exports = WeatherForm;
