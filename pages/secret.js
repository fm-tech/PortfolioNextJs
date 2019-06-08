import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../hoc/withAuth'

import { getSecretData } from '../actions/index';

class Secret extends React.Component {

    static getInitialProps() {
      const superSecretValue = 'Super Secret Values';

      return { superSecretValue };

    }

    // constructor(props) {
    //     super();

    //     this.state = {
    //       secretData:  []
    //     }
    // }

    state = {
      secretData: []
    }
     
    async componentDidMount() {
      const res = await getSecretData();
      const secretData = res.data;
      
      this.setState({
        secretData
      });

    }

    displaysecretData() {
      const { secretData } = this.state

      if ( secretData && secretData.length > 0) {
          return secretData.map((data) => {
            return(
              <div>
                  <p> {data.title} </p>
                <p>{data.description}</p>
              </div>
                )
            })
        } 
        return null;
    }
  
    render() { 
      
      const { superSecretValue }  = this.props;

      
       return(
        <BaseLayout {...this.props.auth}>
        <BasePage>
         <div>
         <h1>I am a Secret Page  </h1>
         <h3>{ superSecretValue }</h3>
         { this.displaysecretData() }
         </div>
        </BasePage>
        </BaseLayout>
       )
        
    }
}


export default withAuth(Secret);