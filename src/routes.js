import { Switch, Route, Redirect } from "react-router-dom"
import {Chat} from "./pages/Chat"
import { Auth } from "./pages/Auth"

export const useRoutes = (isAuthenticated) => {
    if (isAuthenticated){
        return (
            <Switch>
                <Route path='/system-chat' exact>
                    <Chat/>
                </Route>
                <Route path='/chat' exact>
                    <Chat/>
                </Route>
                <Route path='/info' exact>
                    <Chat/>
                </Route>
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path='/' exact>
                <Auth/>
            </Route>
            <Redirect to='/'/>
        </Switch>
    )
}