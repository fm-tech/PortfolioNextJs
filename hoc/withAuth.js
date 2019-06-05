import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

export default function(Component){
    return class withAuth extends React.Component {

        static async getInitialProps(args){
            const pageProps = await Component.getInitialProps && await Component.getInitialProps(args);
        
            return { ...pageProps };
        }

        renderSecretPage() {
            const { isAuthenticated } = this.props.auth;
            if (isAuthenticated) {
                return( <Component {...this.props} /> )
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

        render () {
            return this.renderSecretPage()
        }
    }
}