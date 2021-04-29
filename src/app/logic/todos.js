import React from 'react'

// TODO: function for posting to REST API

export function POSTtodo(toDoName) {

    fetch( { 
        url:'https://retoolapi.dev/T5kUZD/todos/', 
        method: 'post',
        body: {toDoName}
        })
  }

export function GETtodo(toDoId) {

    console.log('toDoId: ' + toDoId);

    fetch(`https://retoolapi.dev/T5kUZD/todos/${toDoId}`)
    .then(response => response.json())
    .then(data => {
        console.log('id: ' + data.id);
        console.log('title: ' + data.title);
        console.log('completed: ' + data.completed);
        console.log('data: ' + data);

        // TODO: Return fetched object

        const obj = {
            id: data.id,
            title: data.title,
            completed: data.completed
        };
        console.log('object: ' + obj);
        
        return obj;
    })
  }