import React from 'react'

// TODO: function for posting to REST API

export async function POSTtodo(toDoName) {

    const newToDoObj = {
        title: toDoName,
        userId: 1,
        completed: false
    };
    
    console.log('title: ' + newToDoObj.title);
    console.log('userId: ' + newToDoObj.userId);
    console.log('completed: ' + newToDoObj.completed);

    await fetch( { 
        url:'https://retoolapi.dev/T5kUZD/todos/', 
        method: 'POST',
        body: {newToDoObj}
        });
}

export async function GETtodo(toDoId) {

    const res = await fetch(`https://retoolapi.dev/T5kUZD/todos/${toDoId}`);
    const data = await res.json();

    return data
  }