// Import react and component
import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

class App extends Component {
    render () {
        return (
            <div>
                <Header />
                <Content order2="order-lg-2" order1="order-lg-1" images="img/01.jpg" title="For those about to rock..."/>
                <Content images="img/02.jpg" title="We salute you!" />
                <Content order2="order-lg-2" order1="order-lg-1" images="img/03.jpg" title="Let there be rock!"/>
                <Footer footerContent="Copyright © Your Website 2018"/>
            </div>
        )
    }
}

export default App;