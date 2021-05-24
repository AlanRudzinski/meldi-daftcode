import React from 'react';
import HeaderNavigation from '../../components/HeaderNavigation/HeaderNavigation.component';

const Layout = ({children}) => (
    <React.Fragment>
        <HeaderNavigation />
        <main>
            {children}
        </main>
        <footer>
            tu jest footer
        </footer>
    </React.Fragment>
)

export default Layout;