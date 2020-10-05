
import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Home from './Home'
import UsersList from './UserList'
import UserShow from './UserShow'
import PostsList from './PostsList'
import PostShow from './PostShow'


function App(){
    return(
        <BrowserRouter>
        <div>

        <Link to="/">Home</Link>-
        <Link to="/users">Users</Link>-
        <Link to="/posts">Posts</Link>
        


        <Route path="/" component={Home} exact={true}/>
        <Route path="/users" component={UsersList} exact={true}/>
        <Route path="/users/:id" component={UserShow} />
        <Route path="/posts" component={PostsList} exact={true}/>
        <Route path="/posts/:id" component={PostShow}/>
        
        


        </div>
        </BrowserRouter>
    )

}


export default App 


