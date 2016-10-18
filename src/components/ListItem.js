const h = require('react-hyperscript')
const React = require('react')

const ListItem = React.createClass({
  // getInitialState: function () {
  //   return { updated: (new Date()).toString() }
  // },
  onUp: function (event) {
    this.props.item.score = this.props.item.score + 1
    this.props.onScoreChange(this.props.item)
  },
  onDown: function (event) {
    this.props.item.score = this.props.item.score - 1
    this.props.onScoreChange(this.props.item)
  },
  render () {
    const item = this.props.item
    return h('li', [
      h('a', { target: '_blank', href: item.link }, item.title),
      h('button', { onClick: this.onUp }, ['Up']),
      h('button', { onClick: this.onDown }, ['Down']),
      h('span', item.score)
    ])
  }
})
module.exports = ListItem
