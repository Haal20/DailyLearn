
export async function POSTtodo(toDoName) {

    const newToDoObj = {
        title: toDoName,
        userId: 1,
        completed: false
    };
    
    console.log('title: ' + newToDoObj.title);
    console.log('userId: ' + newToDoObj.userId);
    console.log('completed: ' + newToDoObj.completed);

    try{
    const res = await fetch( 'https://retoolapi.dev/T5kUZD/todos', {  
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newToDoObj)
        });

        const data = await res.json();
        console.log('POSTdata: ' , data);

        return GETtodos();

    }catch(error){
        console.log(error);
    }
     
}

export async function GETtodo(toDoId) {

    const res = await fetch(`https://retoolapi.dev/T5kUZD/todos/${toDoId}`);
    const data = await res.json();

    return data
}


export async function GETtodos() {

    const res = await fetch(`https://retoolapi.dev/T5kUZD/todos`);
    const data = await res.json();

    return data
}