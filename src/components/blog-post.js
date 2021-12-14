import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPost = () => {
    return(
        <Layout>
            <Seo title="Home" />
            <h1>Blog Post #001</h1>
            <div>by Manny Cortez</div>
            <div>Blog Abstract</div>
            <div>Blog body goes here...</div>
        </Layout>
    )
}

export default BlogPost