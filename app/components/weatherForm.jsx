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
    //Weather Form component
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="location"/>
          <button className="button expanded hollow">Get Weather</button>
      </form>
      </div>
    )
  }
})

module.exports = WeatherForm;
