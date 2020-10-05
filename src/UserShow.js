import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class UserShow extends React.Component{
    constructor(){
        super()
        this.state={
            user:{},
            posts:[]
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response)=>{
                const user = response.data
                this.setState({user})
            })
        
            axios.get(`https://jsonplaceholder.typicode.com/posts?usersId=${id}`)
                .then((response)=>{
                    const posts = response.data
                    this.setState({posts})
                })
    }




    render(){
        console.log('user show comp', this.props)
    return(
        <div>
            <p>username :  {this.state.user.name}</p>
            <h2>Posts Written By User</h2>
            <ul>
                {
                    this.state.posts.map((ele)=>{
                    return <li>{ele.title}</li>
                    })
                }
            </ul>

        </div>
    )
}
}


export default UserShow