import React from 'react';
import Link from 'next/link';

import { Container, Row, Col } from 'reactstrap';

export default class Footer extends React.Component {
    
    render() {

        return(
            <Container className="footerWrap">
                <Row>
                    <Col md="6">
                        <div>
                            <h1>Find me on</h1>
                        </div>
                    </Col>
                    <Col md="6">

                    </Col>
                </Row>

                <div className="copyrights">
                    <p>© 2019 Francisco Miranda. Made in Dallas,TX.</p>
                </div>
            </Container>
        )

    }
}