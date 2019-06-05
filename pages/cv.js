import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';

class Cv extends React.Component {

    render() {
        return(
          <BaseLayout {...this.props.auth}>
          <div>
            <h1>I am the CV PAge </h1>    
        
             
         </div>
          </BaseLayout>
        )

    }

}

export default Cv;