const h = require('react-hyperscript')
const React = require('react')
const Header = require('./components/Header.js')
const List = require('./components/List.js')
const Form = require('./components/Form.js')
var items = [{ id: 1,
    title: 'JavaScript Fatigue',
    link: 'https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f#.qtciu77bd',
    score: 6
  }, { id: 2,
    title: 'Ninjas are awesome',
    link: 'http://www.realultimatepower.net/index4.htm',
    score: -4
  }]

module.exports = React.createClass({
  getInitialState: _ => ({items}),
  scoreChanged: function (item) {
    this.setState({items})
  },
  render () {
    return h('div.pa4.bg-gray.vh-100', [
      h(Header, { title: "Code News"}),
      h('main.avenir', [
        h(List, { items:
          this.state.items, onScoreChange: this.scoreChanged
        }),
        h(Form)
  ])
])
}
})
