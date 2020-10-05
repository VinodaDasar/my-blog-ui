import React from 'react' 
import axios from 'axios'
//import {Link} from 'react-router-dom'

class PostShow extends React.Component{
    constructor(){
        super()
        this.state = {
            user:{},
            post:{},
            comments:[]
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id

        //post
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) =>{
            const post = response.data
            this.setState({post})

        //user of the post
        axios.get(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        .then((response) =>{
            const user = response.data
            this.setState({user})
        })
        .catch((err) =>{
            console.log(err)
        })
        })
        .catch((err) =>{
            console.log(err)
        })

        
        
        //post comments
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then((response) =>{
            const comments = response.data
            this.setState({comments})
        })
    }

    render(){
        return(
            <div>
                <h1>USER NAME : {this.state.user.name}</h1>
                <h1>TITLE : {this.state.post.title}</h1>
                <h1>BODY :</h1>
                    <p>{this.state.post.body}</p>
                <hr/>
                <h1>COMMENTS :</h1>
                <ul>
                    {
                        this.state.comments.map((comment) =>{
                            return(
                                <li>{comment.body}</li>
                            )
                        })
                    }
                </ul>
                
                <hr/>
                {/* <Link to = {`/users/${user.id}`}><p>More Posts of Author</p></Link> */}
            </div>
        )
    }
}
export default PostShow
