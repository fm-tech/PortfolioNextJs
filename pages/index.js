import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';

import {Button, Container} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class Index extends React.Component {


    
    render() {
    
        return(
           <BaseLayout>
            <Container>
                <Button color="danger">Danger Sudo</Button>
            </Container>
           </BaseLayout>
        )

    }

}

export default Index;


{/* <Header title={'I am a header component'} > 
<h2> I am a Header subtitile</h2>
</Header> */}