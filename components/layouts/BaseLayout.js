import React from 'react';
import Header from '../shared/Header';
import Footer from '../shared/Footer';

const BaseLayout = (props) => {
    const  { className, children, isAuthenticated, user } = props;
    return (
        <div className="layout-container">
            <Header isAuthenticated={isAuthenticated} user={user}/>
            <main className={`cover ${className}`}>
                <div className="wrapper">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
        
    )
}

export default BaseLayout;  