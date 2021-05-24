import React from 'react';
import Footer from './Footer/Footer.component';
import HeaderNavigation from './HeaderNavigation/HeaderNavigation.component';

const Layout = ({children}) => (
    <React.Fragment>
        <HeaderNavigation />
        <main>
            {children}
        </main>
        <Footer />
    </React.Fragment>
)

export default Layout;