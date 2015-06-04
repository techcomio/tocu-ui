var React = require('react');
/*var t = require('tcomb-form');
var Form = t.form.Form;*/


export default React.createClass({
  render() {
    return (
      <div> test </div>
    );
  }
});

/*
export default React.createClass({

  contextTypes: {
    flux: React.PropTypes.object.isRequired,
  },

  getInitialState() {
    this.CityActions = this.context.flux.getActions('cityActions');
    this.CityStore = this.context.flux.getStore('cityStore');

    return this.getFromStore();
  },

  getFromStore () {
    return {
      city: this.CityStore.getCity(),
      district: this.CityStore.getDistrict(),
      firstSelectCity: null,
    };
  },

  componentDidMount() {
    this.CityStore.addListener('change', this.onStoreChange);
    this.CityActions.getCityActions();
  },

  componentWillUnmount() {
    this.CityStore.removeListener('change', this.onStoreChange);
  },

  onStoreChange() {
    this.setState({
      city: this.CityStore.getCity(),
      district: this.CityStore.getDistrict()
    });
  },

  render() {
    let city = this.state.city || [];
    let district = this.state.district || [];
    let firstSelectCity = this.state.firstSelectCity || null;
 
    var formLayout = function(locals){
      return (
        <div>
          {locals.inputs.name}
          {locals.inputs.phone}
          <div className="row">
            <div className="col-xs-6">
              {locals.inputs.cityname}
            </div>
            <div className="col-xs-6">
              {locals.inputs.district}
            </div>
          </div>
          {locals.inputs.password}
        </div>
      );
    };

    var Person = t.struct({
      name: t.Str,
      phone: t.Num, // a numeric field
      cityname: t.Str,
      district: t.Str,
      password: t.Str,
    });

    var options = {
      template: formLayout,
      auto: 'placeholders',
      order: ['name', 'phone', 'cityname', 'district', 'password'],
      fields: {
        name: {
          error: null,
          attrs: {
            autoFocus: true
          }
        },
        cityname: {
          order: 'asc', // or desc
          nullOption: {value: 'dsf', text: 'City'},
          options: city.map(function(name) {
            return {value: name, text: name};
          }),
          factory: t.form.Select
        },
        district: {
          order: 'asc', // or desc
          nullOption: {value: '', text: 'district'},
          factory: t.form.Select,
          options: district.map(function(name) {
            return {value: name, text: name};
          }),
        }
      },
    };

      console.log(this.state.firstSelectCity);
    return (
      <div className="container">
        <div className="form-signup">
          <div className="form-body">
            <div className="form-group">
              <div className="logo">
                <img src="/img/logo.png" style={{width: 50, height: 50}} />
              </div>
            </div>

            <Form
              ref="form"
              type={Person}
              options={options}
              onChange={this.TestChange} />

            <button className="btn btn-primary btn-block" onClick={this.save}>Save</button>

          </div>
            
          <div className="form-footer text-center">
            <a href="/signin">Sign In</a>
          </div>
        </div>
      </div>
    );
  },

  save() {
    var value = this.refs.form.getValue();
    // if validation fails, value will be null
    if (value) {
      // value here is an instance of Person
      console.log(value);
    }
  },

  TestChange(val, path) {
    this.state.firstSelectCity = { text: val.cityname, value: val.cityname};
    if(path[0] === "cityname") {
      this.CityActions.getDistrictActions(val.cityname);
    }
  }
});
*/