import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CadastroUsuarioComponents from "./CadastroUsuarioComponents";
import test from"./test"


import React from "react";
const AppRouter = () => {
    return (
        <div>
            <Router>
                <div className="col-md-6">

                    <Switch>
                        <Route path="/" exact component={CadastroUsuarioComponents} />
                        <Route path="/tes" exact component={test} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default AppRouter;