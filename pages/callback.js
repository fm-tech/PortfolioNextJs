import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import auth0Client from '../services/auth0';
import { withRouter } from 'next/router'

class Callback extends React.Component {


    async componentDidMount() {
        await auth0Client.handleAuthentication();
        this.props.router.push('/');
    }

    render() {
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage>
                <div>
                <h1> Authenticating... </h1>
            </div>
                </BasePage>
            </BaseLayout>
        )
    }
}


export default withRouter(Callback);