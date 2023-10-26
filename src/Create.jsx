import { useState } from "react";
import {useHistory} from 'react-router-dom'

const Create = () => {
    const [title, setTitle]= useState('')
    const [body, setBody]= useState('')
    const [author, setAuthor]= useState('idris')
    const[isLoading , setIsLoading]= useState(false)
    const history = useHistory()


   const  handleSubmit = (e)=>{
    e.preventDefault()
    setIsLoading(true)
    const blog={title, body , author}
    
    fetch('http://localhost:7000/blogs',
    {method:'POST', headers:{'Content-Type':'application/json'},
body:JSON.stringify(blog)})
.then(()=>{
    console.log('request')
    setIsLoading(false)
    // history.go(-1) //go back one step
    history.push('/')

    
})

    }
    return ( 
        <div className="create">
            <h2>create blog</h2>
 

            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="Blog Title"
                 required
                 value={title}
                 onChange={(e)=> setTitle(e.target.value)}
                 />
                <textarea name="" id="" cols="30" rows="5"
                placeholder="blog details"  required
                value={body}
                onChange={(e)=> setBody(e.target.value)}
                >

                </textarea>

                <select name="" id=""
                value={author}
                onChange={(e)=> setAuthor(e.target.value)}
                >
                    <option value="idris">idris</option>
                    <option value="olawale">olawale</option>

                </select>

                {!isLoading &&<button>add blog</button>}
                {isLoading &&<button disabled>adding ...</button>}


            </form>
        </div>
     );
}
 
export default Create;