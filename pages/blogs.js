import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';


class Blogs extends React.Component {
    render() {
        return (
            <BaseLayout {...this.props.auth}>
            <div>
                <h1>I am a Blog page </h1>
            </div>
            </BaseLayout>
        )
    }
}


export default Blogs