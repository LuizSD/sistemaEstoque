import { apiUrl } from '../environments/dev'

export function genericGet(path) {
  return new Promise((resolve, reject) => {
    fetch(`${apiUrl}${path}`, {method: 'GET',}) 
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
    })
    .catch((error) => {
      console.error('Error:', error);
      reject(); 
    });
  })
}  

export function genericSelect(path, id) {
  return new Promise((resolve, reject) => {
    fetch(`${apiUrl}${path}/${id}`, {method: 'GET',}) 
    .then((response) => response.text())
    .then((data) => {
      resolve(data);
    })
    .catch((error) => {
      console.error('Error:', error);
      reject();
    });
  })
}  

export function genericPost(path, data) {
  return new Promise((resolve, reject) => {
    fetch(`${apiUrl}${path}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
    })
    .catch((error) => {
      console.error('Error:', error);
      reject();
    });
  })
}  

export function genericPut(path, data, id) {
  return new Promise((resolve, reject) => {
    fetch(`${apiUrl}${path}/${id}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
    })
    .catch((error) => {
      console.error('Error:', error);
      reject();
    });
  })
}  

export function genericDelete(path, id) {
  return new Promise((resolve, reject) => {
    fetch(`${apiUrl}${path}/${id}`, {
      method: 'DELETE',
    })
    .then((response) => response.text())
    .then((data) => {
      resolve(data);
    })
    .catch((error) => {
      console.error('Error:', error);
      reject();
    });
  })
}  