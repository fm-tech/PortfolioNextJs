import React from 'react';
import axios from 'axios';

import {Link} from '../routes';

import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';



class Blog extends React.Component {

    static async getInitialProps() {
        let blogs = [];

        try{
            const response = await axios.get('http://localhost:1337/blogs');
            blogs =  response.data;
            console.log(blogs);
        } catch(err) {
            console.log(err)
        }

        return{blogs: blogs.splice(0, 10)};
    }

    renderPosts(blogs){
        return blogs.map((blogs, index) => {
            return(
                <li key={index}>
                    <Link route={`/blogs/${blogs.id}`}>
                    <a>{blogs.title}</a>
                    </Link>
                </li>
            )
        })
    }


    render() {
    
        const {blogs} = this.props;
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage>
                    <div>
                    <ul>{this.renderPosts(blogs)}</ul>
                    </div>
                </BasePage>
            </BaseLayout>
        )
    }
}


export default Blog