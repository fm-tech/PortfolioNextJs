import React from 'react';

import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';


class About extends React.Component {

    render() {
       
        return(
        <BaseLayout {...this.props.auth}>
        <BasePage>
            <div>
            <h1>I am the about </h1>     
             
            </div>
        </BasePage>
        </BaseLayout>
        )

    }

}

export default About;