import React from 'react';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import { createRenderer } from 'react-addons-test-utils';

expect.extend(expectJSX);


import Label from './Label';
import Button from './Button';


describe('Expect-jsx', () => {

	describe('Label', () => {

		it('works', () => {
			let renderer = createRenderer();
	    renderer.render(<Label name="ngthorg" />);
	    let actualElement = renderer.getRenderOutput();
			expect(actualElement)
				.toEqualJSX(
					<span>
						Hello ngthorg
					</span>
				);
		});

	});

	describe('Button', () => {

	  it('works', () => {
	    let renderer = createRenderer();
      let func = () => {};
      renderer.render(<Button name="John" click={func} />);
	    let actualElement = renderer.getRenderOutput();
	    expect(actualElement)
				.toEqual(
          <div onClick={func}>
						<Label name="John" />
					</div>
				);
	  });

    it('clicks', () => {
      let renderer = createRenderer();
      let hasClicked = false;
      let click = () => hasClicked = true;
      renderer.render(<Button name="ngthorg" click={click} />);
      renderer.getRenderOutput().props.onClick();
      expect(hasClicked).toBe(true);
    });

	});

});
