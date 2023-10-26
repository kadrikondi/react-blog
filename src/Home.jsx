
import { useEffect, useState } from "react"
import BlogList from "./BlogList"
import useFetch from "./useFetch"

const Home = () => {
  const {data:blogs, isLoading,error}=useFetch(' http://localhost:7000/blogs')
     const[name, setName] = useState('idris')
    // const [blogs, setBlog]= useState(null)
    // const[isLoading , setIsLoading]= useState(true)
    // const[error, setError]= useState(null)
    const handleClick =(e)=>{
        setName('jemila')
        console.log('user' , e.target)
    }  
  // const   handleDelete =(id)=>{
  //   const nblog = blogs.filter(blog => blog.id !== id)
  //   setBlog(nblog)

  // }

 async function udata() {
  const blog = await fetch(' http://localhost:7000/blogs')
  const ublog = await blog.json()
  return ublog;

 }


  // useEffect(()=>{
  //   // udata()
  //   // .then(data => console.log( data))
  // fetch(' http://localhost:7000/blogs')
  // .then(res=> {

  //  if(!res.ok){
  //   let message =`error has occure ${res.status}`
  //   throw Error(message)
    
  //  }
  //  return res.json()
  // })
  // .then(data =>{
  //   setBlog(data)
  //   setIsLoading(false)
  //   setError(null)

  // })
  // .catch(err=>{
  //   console.log(err.message)
  //   setError(err.message)
  //   setIsLoading(false)
  // })
  // },[])

    return (  
        <div className="home">
      
{isLoading && <div>Loading</div>}
{error && <div> {error}</div>}
  {blogs && <BlogList blogs ={blogs}  title={"ALL POST"} />}
  {/* <BlogList blogs ={blogs.filter((blog)=> blog.author ==='math')} title={"Math Post"}/> */}
  {/* <button onClick={()=> setName('Ola')}>change Name</button> */}
  {name}
        </div>
    );
}
 
export default Home;