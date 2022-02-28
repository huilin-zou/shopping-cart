import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  amount: number;
}
@Injectable({
  providedIn: 'root'
})
export class CartService {
  data: Product[]=[
        {id: 0, name: 'apple', price: 2, amount: 5},
        {id: 1, name: 'peach', price: 3, amount: 5},
        {id: 2, name: 'pear', price: 4, amount: 5},
        {id: 3, name: 'watermelon', price: 5, amount: 5},
  ];

  private cart=[];
  private cartItemCount=new BehaviorSubject(0);

  constructor() { }

  getProducts(){
    return this.data;
  }

  getCart(){
    return this.cart;
  }

  getCartItemCount(){
    return this.cartItemCount;
  }

  addProduct(product){
    let added=false;
    for(let p of this.cart){
      if(p.id === product.id){
        p.amount +=1;
        added=true;
        break;
      }
    }
    if(!added){
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value+1);

  }

  decreaseProduct(product){

    for(const [index,p] of this.cart.entries()){

      if(p.id===product.id){
        p.amount-=1;
        // eslint-disable-next-line eqeqeq
        if(p.amount==0){
          this.cart.splice(index,1);
        }
      }
    }

    this.cartItemCount.next(this.cartItemCount.value-1);
  }

  removeProduct(product){
    for(const [index, p] of this.cart.entries()){
      if(p.id === product.id){
        this.cartItemCount.next(this.cartItemCount.value-p.amount);
        this.cart.splice(index,1);
      }
    }
  }
}
