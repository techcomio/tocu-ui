import expect from 'expect';
import jsdom from 'mocha-jsdom';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
/**
 * @Component
 */
import TodoTextInput from './demo/TodoTextInput';
import Demo from './demo/Demo';
import CheckboxWithLabel from './demo/CheckboxWithLabel';


function setup() {
  let props = {
    addTodo: expect.createSpy()
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<Demo {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('Component', () => {
  jsdom();

  describe('Demo', () => {

    it('should render correctly', () => {
      const { output } = setup();

      expect(output.type).toBe('header');
      expect(output.props.className).toBe('header');

      let [h1, input] = output.props.children;

      expect(h1.type).toBe('h1');
      expect(h1.props.children).toBe('todos');

      expect(input.type).toBe(TodoTextInput);
      expect(input.props.newTodo).toBe(true);
      expect(input.props.placeholder).toBe('What needs to be done?');
    });

    it('should call addTodo if length of text is greater than 0', () => {
      const { output, props } = setup();
      let input = output.props.children[1];
      input.props.onSave('');

      expect(props.addTodo.calls.length).toBe(0);
      input.props.onSave('Use Redux');
      expect(props.addTodo.calls.length).toBe(1);
    });

    describe('CheckboxWithLabel', () => {
      it('changes the text after click', () => {
        var checkbox = TestUtils.renderIntoDocument(
          <CheckboxWithLabel labelOn="On" labelOff="Off" />
        );

        var checkboxNode = ReactDOM.findDOMNode(checkbox);

        // Verify that it's Off by default
        expect(checkboxNode.textContent).toEqual('Off');

        // Simulate a click and verify that it is now On
        TestUtils.Simulate.change(TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input'));
        expect(checkboxNode.textContent).toEqual('On');
      });
    });

  });

});
