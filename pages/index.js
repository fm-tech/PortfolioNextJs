import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import {Button, Container, Row, Col} from 'reactstrap';

import Typed from 'react-typed';

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.roles = ['developer', 'friend', 'gamer'];
    }
    
    render() {
        const { isAuthenticated, user } = this.props.auth;
        return(
            <BaseLayout className="cover" {...this.props.auth}>
            <div className="main-section">
              <div className="background-image">
              </div>
          
              <Container>
                <Row>
                  <Col md="8" className="hero-welcome-wrapper">
                  <div className="hero-welcome-text">
                      <h1>
                        { isAuthenticated && <strong>{user.name} </strong> }
                        Welcome to the portfolio website of Filip Jerga.
                        Get informed, collaborate and discover projects I was working on through the years!
                      </h1>
                    </div>
                   
                    <div className="hero-welcome-bio">
                      <h1>
                        Let's take a look on my work.
                      </h1>
                    </div>  
                  </Col>
                  <Col md="4">
                    <div className="hero-section">
                        <div className={`flipper`}>
                          <div className="back">
                            <img className="image" src="https://i.imgur.com/wPY4twO.jpg"/>
                            <div className="shadow-custom">
                              <div className="shadow-inner"> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </Col>
                </Row>
                    {/* Seperate the sections  */}
                    <span className="lineBreak"></span>
                  
                     <Row className="mainPage">
                       
                        <Col md="4">
                          <img className="image" src="https://i.imgur.com/1U8I0mi.jpg" />
                        </Col>
                        <Col md="8">
                          <p><div id="4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo facilis expedita quas ipsum. Velit repudiandae molestiae ipsam a aut qui eligendi accusantium, enim sequi cum architecto magni veniam perspiciatis dolorum.</div></p>
                        </Col>
                     </Row>
               

              </Container>
            </div>
          </BaseLayout>
          
        )

    }

}

export default Index;


{/* <Header title={'I am a header component'} > 
<h2> I am a Header subtitile</h2>
</Header> */}