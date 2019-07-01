import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import { withRouter } from 'next/router'



import axios from 'axios';


class Blogs extends React.Component {
    static async getInitialProps({query}) {

        const postId = query.id;
        let post = {};

        try {
            const response = await axios.get(`http://localhost:1337/blogs/${postId}`);
            post = response.data;
        } catch(err) {
            console.error(err)
        }


        return {post};
    }
    render() {
        console.log(this.props)

        const {post} = this.props;

        return (
            <BaseLayout {...this.props.auth}>
            <BasePage>
            <div>
                <h1>{ post.title}</h1>
                <p>{ post.body}</p>
                <img src={ 'http://localhost:1337' + post.postImage.url }  alt={ post.postImage.name } className="responsive blogImage" />

            </div>
            </BasePage> 
            </BaseLayout>
           
          
        )
    }
}


export default withRouter(Blogs)