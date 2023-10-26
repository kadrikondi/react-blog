 import {useParams,useHistory} from 'react-router-dom'
import useFetch from './useFetch';
const BlogDetail = () => {
    const{ id}= useParams()
    const history = useHistory()
    const {data:blog, error, isLoading} = useFetch(' http://localhost:7000/blogs/' + id)

    const handleDelete =()=>{
        fetch('http://localhost:7000/blogs/' + blog.id, {
            method: "DELETE"
        })
        .then(()=>{
            history.push('/')
        })
    }
    return (
        <div className='blog-details'>
            <h2>blog detail - {id}</h2>
            {isLoading&& <div> loading ...</div>}
            {error && <div> {error} </div>}
             {blog &&   

             <article>
            <h2>{blog.title}</h2>
           <p> writen by {blog.author}</p>
           <div>  {blog.body}</div>

        <button onClick={ handleDelete}>delete</button>

             </article>
            }
        </div>
      );
}
 
export default BlogDetail;