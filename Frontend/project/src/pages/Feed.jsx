import React,{useState} from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const Feed = () => {
    const [posts, setPosts] = useState([
        {
            _id:'1',
            Image:"https://ik.imagekit.io/om1/billa_roosG7IC6.png",
            caption:"billa hai mama!"
        }
    ])

    useEffect(()=>{
        axios.get("http://localhost:3000/posts")
        .then((res) =>{
            console.log(res);
        })
    },[])

  return (
    <section className='feed-section'>
        {
            posts.length > 0 ? (
                posts.map( (post) => {
                  return (  <div key={post._id} className='post-card'>
                        <img src={post.image} alt={post.caption} />
                        <p>{post.caption}</p>
                    </div>
                  ) 
                })
            ) : (
                <h1>No posts RN</h1>
            )
        }
    </section>
  )
}

export default Feed