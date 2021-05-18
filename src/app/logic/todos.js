export async function POSTtodo(type, name, time) {
    // TODO: Ta fler inputs för tex Type och StudyTime
    const newToDoObj = {
        assignmentName: name,
        assignmentType: type,
        StudyTime: time,
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