import React from 'react';
import CustomFooter from '../../components/CustomFooter/CustomFooter.component';
import HeaderNavigation from '../../components/HeaderNavigation/HeaderNavigation.component';

const Layout = ({children}) => (
    <React.Fragment>
        <HeaderNavigation />
        <main>
            {children}
        </main>
        <CustomFooter />
    </React.Fragment>
)

export default Layout;