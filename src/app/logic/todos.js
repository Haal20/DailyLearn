import { ErrorBoundary } from "./error-boundary";

export async function POSTtodo(toDoName) {
    // TODO: Ta fler inputs för tex Type och StudyTime
    const newToDoObj = {
        assignmentName: toDoName,
        assignmentType: 'prov',
        StudyTime:15,
        completed: false
    };

    try {
    const res = await fetch( 'https://retoolapi.dev/SY5MJp/homework', {  
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newToDoObj)
        });
        await res.json();
        return GETtodos();
    } catch (error) {
        console.log(error);
    }
     
}

export async function GETtodo(toDoId) {

    try {
        const res = await fetch(`https://retoolapi.dev/SY5MJp/homework/${toDoId}`);
        const data = await res.json();
    
        return data   
    } catch (error) {
        console.log(error);
    }
}


export async function GETtodos() {

    try {
        const res = await fetch(`https://retoolapi.dev/SY5MJp/homework`);
        const data = await res.json();

        return data   
    } catch (error) {
        console.log(error);
    }
}

export async function DELETEtodo(toDoId) {
    try {
    const res = await fetch( 'https://retoolapi.dev/SY5MJp/homework/' + toDoId , {  
        method: 'DELETE'
        });
        const data = await res.json();
        
        return data;
    } catch (error) {
        console.log(error);
    }
     
}