import { Switch, Route, Redirect } from "react-router-dom"
import {Chat} from "./pages/Chat"
import { Auth } from "./pages/Auth"
import { PrivateChat } from "./pages/PrivateChat"

export const useRoutes = (isAuthenticated) => {
    if (isAuthenticated){
        return (
            <Switch>
                <Route path='/system-chat' exact>
                    <Chat/>
                </Route>
                <Route path='/chat/ID/:id' exact>
                    <PrivateChat/>
                </Route>
                <Route path='/info' exact>
                <h1>123</h1>
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