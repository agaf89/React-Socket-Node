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
                <Route path='/chat:id' exact>
                    <Chat/>
                </Route>
                <Route path='/info' exact>
                    <Chat/>
                </Route>
                <Redirect to={'/system-chat'}/>
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