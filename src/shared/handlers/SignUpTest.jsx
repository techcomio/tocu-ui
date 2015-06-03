var React = require('react');
var Formsy = require('formsy-react');


export default React.createClass({
  getInitialState: function () {
    return {
      validationErrors: {}
    };
  },
  validateForm: function (values) {
    if (!values.foo) {
      this.setState({
        validationErrors: {
          foo: 'Has no value'
        }
      });
    } else {
      this.setState({
        validationErrors: {}
      });
    }
  },
  sendToServer(data) {
    console.log(data)
  },
  Submit(model, reset, invalidate) {
    console.log(invalidate);
  /*  invalidate({
      foo: "error"
    })*/
  },
  render: function () {
    return (
      <div className="container">
        <div className="form-signup">
          <Formsy.Form  className="form-body" onSubmit={this.Submit} preventExternalInvalidation onValidSubmit={this.sendToServer} onChange={this.validateForm} validationErrors={this.state.validationErrors}>
            <MyInput name="foo" />
            <input type="submit" value="submit" />
          </Formsy.Form>
        </div>
      </div>
    );
  }
});

var MyInput = React.createClass({
  mixins: [Formsy.Mixin],
  changeValue: function (event) {
    this.setValue(event.currentTarget.value);
  },
  render: function () {
    var className = this.props.className + ' ' + (this.showRequired() ? 'required' : this.showError() ? 'error' : null);
    var errorMessage = this.getErrorMessage();
    return (
      <div className='form-group has-error'>
        <label htmlFor={this.props.name}>{this.props.title}</label>
        <input type={this.props.type || 'text'} name={this.props.name} onChange={this.changeValue} value={this.getValue()}/>
        <span className='validation-error'>{errorMessage}</span>
      </div>
    );
  }
});

/*export default  React.createClass({
  getInitialState: function() {
    return { canSubmit: false };
  },
  submit: function (data) {
    alert(JSON.stringify(data, null, 4));
  },
  enableButton: function () {
    this.setState({
      canSubmit: true
    });
  },
  disableButton: function () {
    this.setState({
      canSubmit: false
    });
  },
  render: function () {
    return (
      <div className="container">
        <div className="form-signup">
          <div className="form-body">
            <Formsy.Form onSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton} >
              <MyOwnInput name="email" validations="isEmail" validationError="This is not a valid email" required />
              <MyOwnInput name="password" type="password" required />
              <button type="submit" disabled={!this.state.canSubmit}>Submit</button>
            </Formsy.Form>
          </div>
        </div>
      </div>
    );
  }
});

var MyOwnInput = React.createClass({

  // Add the Formsy Mixin
  mixins: [Formsy.Mixin],

  // setValue() will set the value of the component, which in
  // turn will validate it and the rest of the form
  changeValue: function (event) {
    this.setValue(event.currentTarget.value);
  },
  render: function () {

    // Set a specific className based on the validation
    // state of this component. showRequired() is true
    // when the value is empty and the required prop is
    // passed to the input. showError() is true when the
    // value typed is invalid
    var className = this.props.className + ' ' + (this.showRequired() ? 'required' : this.showError() ? 'error' : null);

    // An error message is returned ONLY if the component is invalid
    // or the server has returned an error message
    var errorMessage = this.getErrorMessage();

    return (
      <div className='form-group has-error'>
        <label htmlFor={this.props.name}>{this.props.title}</label>
        <input type={this.props.type || 'text'} name={this.props.name} onChange={this.changeValue} value={this.getValue()}/>
        <span className='validation-error'>{errorMessage}</span>
      </div>
    );
  }
});*/