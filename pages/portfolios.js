import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import {Link} from '../routes';

import axios from 'axios';


class Portfolios extends React.Component {

    static async getInitialProps() {
        let PPosts = [];

        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            PPosts =  response.data;
            console.log(PPosts);
        } catch(err) {
            console.log(err)
        }

        return{PPosts: PPosts.splice(0, 10)};
    }

    renderPosts(PPosts){
        return PPosts.map((PPosts, index) => {
            return(
                <li key={index}>
                    <Link route={`/portfolio/${PPosts.id}`}>
                    <a>{PPosts.title}</a>
                    </Link>
                </li>
            )
        })
    }


    render() {

    const {PPosts} = this.props;
        return (
            <BaseLayout>
            <div>
                <h1>I am a Portfolios Page</h1>
                <ul>{this.renderPosts(PPosts)}</ul>
            </div>
            </BaseLayout>
        )
    }
}


export default Portfolios