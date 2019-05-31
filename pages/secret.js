import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';


class Secret extends React.Component {

        renderSecretPage() {
            const { isAuthenticated } = this.props.auth;
            if (isAuthenticated) {
                return(
                    <BaseLayout {...this.props.auth}>
                    <BasePage>
                     <div>
                     <h1>I am a Secret Page  </h1>
                     </div>
                    </BasePage>
                    </BaseLayout>
                )
              
            
            } else {
              return(
                <BaseLayout {...this.props.auth}>
                <BasePage>
                 <div>
                 <h1> You are not authenticated  </h1>
                 </div>
                </BasePage>
                </BaseLayout>
              )
            }
        }
  
    render() {
            
       return this.renderSecretPage()
        
    }
}


export default Secret