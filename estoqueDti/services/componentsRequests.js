import { genericGet, genericPost, genericSelect, genericPut } from './requests'

export function loadProducts() {
    return new Promise ((resolve) => {
      genericGet('products').then((data) => {
        resolve(data);
      });
    });
  }

export function createProduct(body) {
    return new Promise((resolve) => {
     genericPost('create', body).then((res) => {
         resolve(res)
     })
    })  
}


export function editProduct(body, id) {
    return new Promise((resolve) => {
     genericPut('edit', body, id).then((res) => {
         resolve(res)
     })
    })  
}

export function selectProduct(key) {
    return new Promise((resolve) => {
      genericSelect('products', key).then((res) => {
         resolve(res)
     })
    })
    
}