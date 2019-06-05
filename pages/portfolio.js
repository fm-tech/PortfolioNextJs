import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import { withRouter } from 'next/router'



import axios from 'axios';


class Portfolio extends React.Component {
    static async getInitialProps({query}) {

        const portfolioId = query.id;
        let portfolio = {};

        try {
            const response = await axios.get(` https://jsonplaceholder.typicode.com/posts/${portfolioId}`);
            portfolio = response.data;
        } catch(err) {
            console.error(err)
        }


        return {portfolio};
    }
    render() {
        console.log(this.props)

        const {portfolio} = this.props;

        return (
            <BaseLayout {...this.props.auth}>
            <BasePage>
            <div>
                <h1>{ portfolio.title}</h1>
                <p>{ portfolio.body}</p>
                <p>{ portfolio.id}</p>
            </div>
            </BasePage> 
            </BaseLayout>
           
          
        )
    }
}


export default withRouter(Portfolio)