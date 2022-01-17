import PropTypes from 'prop-types';
import React from 'react';
import MainCard from './MainCard'

//-----------------------|| AUTHENTICATION CARD WRAPPER ||-----------------------//

const AuthCardWrapper = ({ children, ...other }) => {

    return (
        <MainCard {...other}>
            {children}
        </MainCard>
    );
};

AuthCardWrapper.propTypes = {
    children: PropTypes.node
};

export default AuthCardWrapper;
