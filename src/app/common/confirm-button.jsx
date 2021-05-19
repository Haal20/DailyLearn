import React from 'react';

function buildYesNo(question, handleClick){
    return( 
        <div>
            <p>{question}</p>
            <button onClick={() => {handleClick('Ja')}}>
                Ja
            </button>
            <button onClick={() => {handleClick('Nej')}}>
                Nej
            </button>
        </div>
        ); 
}

function onConfirmed(btnText, handleClick){
    return( 
        <div>
            <button onClick={() => {handleClick('confirmed')}}>
                {btnText}
            </button>
        </div>
        );
}


export function ConfirmButton(props){
    return (!props.confirmed ? onConfirmed(props.btnText, props.handleClick) : buildYesNo(props.question , props.handleClick));
}