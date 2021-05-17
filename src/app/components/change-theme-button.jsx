import React from "react";
import { NightModeContext } from "../logic/create-context.js";


export class ChangeThemeButton extends React.Component{
    constructor(p){
        super(p);
    }

    render(){
        this.context // nightMode: true: false
        return (
            <div className={'themeButton'}>
                <button onClick={this.props.handleChangeNightMode}>kväll?</button>
            </div>
        );
    }
}

ChangeThemeButton.contextType = NightModeContext;