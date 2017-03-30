var React = require('react');
var ReactDOM = require('react-dom');


//Object Destructuring
//creates a new variable called route and puts it equal
//to require(react-router).Route;
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var Weather =require('Weather');
var About = require('About');
var Examples = require('Examples');

//load foundation
require('style!css!foundation-sites/dist/foundation.min.css')

$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path ="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      //to render main component's children
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
    document.getElementById('app')
);
