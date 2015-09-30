const React = require('react');
const LeftNav = require('material-ui/lib/left-nav');
let MenuItem = require('material-ui/lib/menus/menu-item');
let ThemeManager = new (require('material-ui/lib/styles/theme-manager'))();
// Material-UI components to require() calls
let menuItems = [
  { route: '/', text: 'Get Started' },
  { route: 'product/1', text: 'Customization' },
  { route: 'test', text: 'Components' },
  { route: '/', text: 'Get Started' },
  { route: 'product/1', text: 'Customization' },
  { route: 'test', text: 'Components' },
  { route: 'test', text: 'Components' },
  { route: '/', text: 'Get Started' },
  { route: 'product/1', text: 'Customization' },
  { route: 'test', text: 'Components' },
];

const MyAwesomeReactComponent = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render() {
    let header = (
      <div >
        material ui
      </div>
    );
    return (
      <LeftNav
        ref="leftNav"
        docked={false}
        header={header}
        menuItems={menuItems} />
    );
  }

});


module.exports = MyAwesomeReactComponent;
