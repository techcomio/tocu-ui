'use strict'

import Alt from '../Alt';
import CartActions from '../actions/CartActions';
import Immutable, {Map} from 'immutable';
import Cookies from 'cookies-js';


class CartStore {

  constructor() {
    this.bindActions(CartActions);  // createCart, addToCart
		this.on('init', this.bootstrap);
		this.on('bootstrap', this.bootstrap);

    this.cartId = null;
    this.status = null;
    this.listCart = Immutable.List();
  }

  bootstrap() {
    if (!Immutable.List.isList(this.listCart)) {
      this.listCart = Immutable.fromJS(this.listCart);
    }
  }

  onCreateCart(data) {
    this.cartId = data.cartId;
    Cookies.set('cart', data.cartId, {expires: 2592000});
  }

  onGetCart(data) {
    this.listCart = Immutable.fromJS(data);
  }

  onAddToCart(product) {
    this.listCart = this.listCart.push(Immutable.fromJS(product));
  }

  onDestroyCart(data) {
    this.listCart = Immutable.fromJS(data);
  }

  onCapnhatCart(data) {
    this.status = null;
    this.listCart = Immutable.fromJS(data);
  }

  onCapnhatCart304() {
    this.status = "success";
  }

  onEmpty() {
    this.listCart = Immutable.List();
  }

  static getTotalCart() {
    let total = 0,
      { listCart } = this.getState();

    listCart.forEach((product, key) => {
      if(product.get('status') === "available") {
        total += product.get('price');
      }
    });
    
    return total;
  }

  static getWeightCart() {
    let total = 0
    , {listCart} = this.getState();

    listCart.forEach((product, key) => {
      if(product.get('status') === "available") {
        total += product.get('weight');
      }
    });
    
    return total;
  }

  static getTotalCartSale() {
    let total = 0,
      { listCart } = this.getState();

    listCart.forEach((product, key) => {
      if(product.get('status') === "available") {
        total += product.get('salePrice') ? product.get('salePrice') : product.get('price');
      }
    });

    return total;
  }

  static getCountCart() {
    let { listCart } = this.getState();
    return listCart.size;
  }

}

module.exports = Alt.createStore(CartStore, 'CartStore');
