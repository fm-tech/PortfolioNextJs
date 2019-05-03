import React from 'react';
import Link from 'next/link';


import '../../styles/main.scss';

class Header extends React.Component {
    

    render() {

        return (

            <React.Fragment>
            {this.props.children}

            <Link href="/"><a>Index</a></Link>

            <Link href="/about"><a>About</a></Link>

            <Link href="/portfolios"><a>Portfolio</a></Link>

            <Link href="/cv"><a>CV</a></Link>
            
            <Link href="/blogs"><a>blog</a></Link>
        
            </React.Fragment> 
         
            
        )
           
        
    }



}

export default Header; 