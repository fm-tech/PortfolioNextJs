import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';

class SuperComponent extends React.Component {

    constructor() {
        super();

        this.SomeVariable = 'Just some variable';

    }

    alertName(title) {
        alert(title);
    }

    render() {
        return(
            <BaseLayout>
                <h1>I am the SuperComponent</h1>
            </BaseLayout>
        )
    }

}

export default SuperComponent;