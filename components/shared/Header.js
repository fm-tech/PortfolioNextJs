import React from 'react';
import Link from 'next/link';


import '../../styles/main.scss';

class Header extends React.Component {
    

    render() {
        debugger;
        const title = this.props.title;
        return (

            <React.Fragment>
            <p>{title}</p>
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