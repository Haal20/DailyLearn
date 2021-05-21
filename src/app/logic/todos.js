import { url } from './api-url.js'

export async function POSTtodo(type, name, time) {

    const newToDoObj = {
        assignmentName: name,
        assignmentType: type,
        StudyTime: time,
        completed: false
    };

    try {
    const res = await fetch( url , {  
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newToDoObj)
        });
        await res.json();
        return GETtodos();
    } catch (error) {
        return error;
    }
}

export async function GETtodo(toDoId) {

    try {
        const res = await fetch( url + toDoId);
        const data = await res.json();
    
        return data   
    } catch (error) {
        return error;
    }
}


export async function GETtodos() {

    try {
        const res = await fetch( url );
        const data = await res.json();

        return data   
    } catch (error) {
        return error;
    }
}

export async function DELETEtodo(toDoId) {
    try {
    const res = await fetch( url + toDoId , {  
        method: 'DELETE'
        });
        const data = await res.json();
        return data;
    } catch (error) {
        return error;
    }
     
}