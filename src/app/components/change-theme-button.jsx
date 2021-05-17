import React from "react";
import { AppContext } from "../logic/create-context.js";


export class ChangeThemeButton extends React.Component{
    constructor(p){
        super(p);
    }

    render(){
        return (
            <div className={'themeButton'}>
                <button onClick={this.context.changeNightMode}>kväll?</button>
            </div>
        );
    }
}

ChangeThemeButton.contextType = AppContext;