
export async function POSTtodo(toDoName) {

    const newToDoObj = {
        title: toDoName,
        userId: 1,
        completed: false
    };

    try{
    const res = await fetch( 'https://retoolapi.dev/SY5MJp/homework', {  
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newToDoObj)
        });
        await res.json();
        return GETtodos();
    }catch(error){
        console.log(error);
    }
     
}

export async function GETtodo(toDoId) {

    const res = await fetch(`https://retoolapi.dev/SY5MJp/homework/${toDoId}`);
    const data = await res.json();

    return data
}


export async function GETtodos() {

    const res = await fetch(`https://retoolapi.dev/SY5MJp/homework`);
    const data = await res.json();

    return data
}