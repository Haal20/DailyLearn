import React from 'react';

{/** Återanvändningsbar komponent
                 * en knapp som ställer en fråga till användaren innan den genomför den egentliga anropet
                 * @param {string} btnText - text som ska stå i knappen.
                 * @param {string} question - fråga som ska ställas till användaren.
                  * @param {function} handleClick - funktion som ska köras om användaren trycker in Ja knappen.
                */}

// funktion för att skriva ut frågan och de 2 knapparna OM confirmed kom in i parametern som true.
function buildYesNo(question, handleClick){
    return( 
        <div>
            <p>{question}</p>
            <button onClick={() => {handleClick('Ja')}}>
                {/* Ändrar inte värdet på this.props.confirmed utan köp funktionen vi valt i ConfirmButtons handleClick props
                i detta fallet är det onDeleteSubmit */}
                Ja
            </button>
            <button onClick={() => {handleClick('Nej')}}>
                {/* Sätter confirmed till false och kör onConfirmed funktionen igen */}
                Nej
            </button>
        </div>
        ); 
}

// funktion som skriver ut knappen med btnText endast om confirmed kom in i komponenten som false.
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
    // är confirmed true/false? kör onConfirmed : kör buildYesNo.
    //Kommer confirmed in som true så läses den här som false och då körs buildYesNo.
    //kommer confirmed in som false så läses den som true här och kör onConfirmed.
    return (!props.confirmed ? onConfirmed(props.btnText, props.handleClick) : buildYesNo(props.question , props.handleClick));
}