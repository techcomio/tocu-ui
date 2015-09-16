'use strict';
import React from 'react/addons';
import DocumentMeta from 'react-document-meta';
import { Link } from 'react-router';


const title = 'Test';
const description = 'All the modern best practices in one example.';
const meta = {
  title,
  description
};

export default class Demo extends React.Component {

	constructor(props, context) {
    super(props, context);

    this.state = {
      test: [1]
    }
  }

  render() {
    return (
      <div className="container">
        <DocumentMeta {...meta}/>
        Test

        <p>
          <a className="btn btn-primary" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Link with href
          </a>
          <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Button with data-target
          </button>
        </p>
        <div className="collapse" id="collapseExample">
          <div className="card card-block">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </div>
        <div className="card card-block">
          <button type="button" className="btn btn-primary-outline">Primary</button>
          <button type="button" className="btn btn-secondary-outline">Secondary</button>
          <button type="button" className="btn btn-success-outline">Success</button>
          <button type="button" className="btn btn-warning-outline">Warning</button>
          <button type="button" className="btn btn-danger-outline">Danger</button>
        </div>
        <div className="card card-block">
          <button type="button" className="btn btn-primary">Primary</button>
          <button type="button" className="btn btn-secondary">Secondary</button>
          <button type="button" className="btn btn-success">Success</button>
          <button type="button" className="btn btn-warning">Warning</button>
          <button type="button" className="btn btn-danger">Danger</button>

          <button type="button" className="btn btn-primary-outline btn-sm">Small button</button>
          <button type="button" className="btn btn-secondary btn-sm">Small button</button>
        </div>
{/*
        <div className="card-deck-wrapper">
          <div className="card-deck">
            <div className="card">
              <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK9GG-rlvAtqV_jcJVGsEsU-3TNNB32-t9id5mK2tlUKiHOrJN" data-src="holder.js/100%x200/" alt="Card image cap" />
              <div className="card-block">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK9GG-rlvAtqV_jcJVGsEsU-3TNNB32-t9id5mK2tlUKiHOrJN" data-src="holder.js/100%x200/" alt="Card image cap" />
              <div className="card-block">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK9GG-rlvAtqV_jcJVGsEsU-3TNNB32-t9id5mK2tlUKiHOrJN" data-src="holder.js/100%x200/" alt="Card image cap" />
              <div className="card-block">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>

*/}

<div className="grid js-masonry"
  data-masonry-options='{ "itemSelector": ".grid-item", "columnWidth": 200 }'>
  <div className="grid-item"></div>
  <div className="grid-item"></div>
</div>

<button onClick={::this.Test} type="button" className="btn btn-primary">Add</button>

        <div className="card-columns">
          <div className="card">
            <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK9GG-rlvAtqV_jcJVGsEsU-3TNNB32-t9id5mK2tlUKiHOrJN" data-src="holder.js/100%x160/" alt="Card image cap" />
            <div className="card-block">
              <h4 className="card-title">Card title that wraps to a new line</h4>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
          <div className="card card-block">
            <blockquote className="card-blockquote">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <footer>
                <small className="text-muted">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </div>
          <div className="card">
            <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK9GG-rlvAtqV_jcJVGsEsU-3TNNB32-t9id5mK2tlUKiHOrJN" data-src="holder.js/100%x160/" alt="Card image cap" />
            <div className="card-block">
              <h4 className="card-title">Card title</h4>
              <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div className="card card-block card-inverse card-primary text-center">
            <blockquote className="card-blockquote">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
              <footer>
                <small>
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </div>
          <div className="card card-block text-center">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
          <div className="card">
            <img className="card-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK9GG-rlvAtqV_jcJVGsEsU-3TNNB32-t9id5mK2tlUKiHOrJN" data-src="holder.js/100%x260/" alt="Card image" />
          </div>
          <div className="card card-block text-right">
            <blockquote className="card-blockquote">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <footer>
                <small className="text-muted">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </div>
          <div className="card card-block">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
          {this.state.test.map((item, i) => {
            return (
              <div key={i} className="card">
                <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK9GG-rlvAtqV_jcJVGsEsU-3TNNB32-t9id5mK2tlUKiHOrJN" data-src="holder.js/100%x160/" alt="Card image cap" />
                <div className="card-block">
                  <h4 className="card-title">Card title</h4>
                  <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    );
  }

  Test() {
    this.setState({
      test: this.state.test.concat([1, 2])
    });
  }

}
