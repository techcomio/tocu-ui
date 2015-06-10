import { Store } from 'flummox';

export default class AppStore extends Store { 
	constructor(flux) {
    super();

    let testActions = flux.getActions('testActions');
    this.register(testActions.TestAction, this.handleTest);

    this.state = {test: 'hihi'};
  }
  
  handleTest(val) {
  	this.state.posts = val.posts;
    this.emit('change');
  }

  getData() {
  	return this.state.posts || null;
  }

}
