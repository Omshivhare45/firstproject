import React from 'react'

const CreatePost = () => {
  return (
    <section className='create-post-section'> 
    <h1>Create Post</h1>

    <form action="">
        <input type="file" name='image' accept="image/*" />
        <input type="text" name='caption' placeholder='Write about post' required />
        <input type="submit" name="Post" />
    </form>
    </section>
  )
}

export default CreatePost