import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import axios from 'axios';

import SuperComponent from '../components/SuperComponent';



class Index extends SuperComponent {

    static async getInitialProps() {
        let userData = [];
        
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
             userData = response.data;
            console.log(userData);
         
        } catch(err) {
            console.err(err)
        }
    
        return{initalData: [1,2,3,4], userData: userData};
    }

    constructor() {
        super();

        this.state = {
            title: 'I am Index Page'
        }
        // this.updateTitle = this.updateTitle.bind(this);
    }

    componentDidMount(){
        console.log('componentDidMount');

    }
    
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillMount() {  
        console.log('componentWillMount');
    }

    updateTitle = () => {

        this.setState({title: ' I am update Index page'});
    }
    
    render() {
        debugger;
        const {title} = this.state;
        const {userData, initalData} = this.props;

        return(
           <BaseLayout>
           <div>
               <h1>I am the page index</h1>     
                <h2> {title}</h2>
                <p> {userData.title}</p>
                <button onClick={this.updateTitle}> Change Title </button>
            </div> 
           </BaseLayout>
        )

    }

}

export default Index;


{/* <Header title={'I am a header component'} > 
<h2> I am a Header subtitile</h2>
</Header> */}