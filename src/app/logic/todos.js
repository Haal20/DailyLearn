import React from 'react'

// TODO: function for posting to REST API

export function POSTtodo(toDoName) {

    fetch( { 
        url:'https://jsonplaceholder.typicode.com/todos/', 
        method: 'post',
        body: {toDoName}
        })
  }

export function GETtodo(toDoId) {

    console.log('toDoId: ' + toDoId);
    fetch(`https://jsonplaceholder.typicode.com/todos/${toDoId}`)
    .then(response => response.json())
    .then(data => {
        console.log('datan: ' + data.id);
        console.log('datan: ' + data.title);
        console.log('datan: ' + data.completed);
    })
  }