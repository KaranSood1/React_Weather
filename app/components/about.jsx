 var React = require('react');

var About = React.createClass({
  render : function() {
    return(
      <div>
      <h1 className="text-center">About Components</h1>
      <p>A quick weather finding app built on react</p>
      <p>The following tools were used</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This
            was the javascript framework
        </li>
        <li>
          <a href="https://openweathermap.org">Open Weather Map</a> - This
            has been the source of data
        </li>
      </ul>
    </div>
    )
  }
})

module.exports = About;
