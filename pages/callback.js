import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';


class Callback extends React.Component {
    render() {
        return (
            <BaseLayout>
                <BasePage>
                <div>
                <h1> Authenticating... </h1>
            </div>
                </BasePage>
            </BaseLayout>
        )
    }
}


export default Callback