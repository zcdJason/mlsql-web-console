import * as React from "react";
import MainPage from "./MainPage";

export class MLSQLScriptPluginsApp extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div style={{width:"100%"}}>
                <MainPage/>
            </div>
        )
    }
}