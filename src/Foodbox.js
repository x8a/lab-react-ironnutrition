import React, { Component } from 'react'
import foods from './foods.json';

export default class Foodbox extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            myFood: foods             
        }
      }    
    
    render() {

        const myFood = this.state.myFood.map(item => (
          <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={item.image} alt="Food" />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{item.name}</strong> <br />
                    <small>{item.calories}</small>
                  </p>
                </div>
              </div>
              <div className="media-right">
                <div className="field has-addons">
                  <div className="control">
                    <input className="input" type="number" value={item.quantity} />
                  </div>
                  <div className="control">
                    <button className="button is-info">+</button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        ));

        return (
            <div>
                {myFood}
            </div>
        )
    }
}
