import React, {useState} from 'react'
import blogList from '../utilis/blogdata'
import { useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

function SingleBlog() {
    const [blog, setBlog] = useState(blogList)

    const {id} = useParams()

    const result=blog.filter((b)=>b.id===Number(id))

  return (
    <div>
        <PageHeader title={"Single Blog Pages"} curPage={"Blog / Blog Details"}/>

        <div className="blog-section blog-single padding-tb section-tb">
            <div className="container">
                <div className="row justify-content-center">
                    <div className='col-lg-8 col-12'>Left</div>
                    <div className='col-lg-4 col-12'>Right</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleBlog