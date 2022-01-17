import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React from 'react';

//-----------------------|| AUTH GUARD ||-----------------------//

/**
 * Authentication guard for routes
 * @param {PropTypes.node} children children element/node
 */
const AuthGuard = ({ children }) => {
    const router = useRouter();
    // TODO: logic for redirection
    // const account = {};
    // const { isLoggedIn } = account;

    // if (!isLoggedIn) {
    //     router.push("/login");
    // }

    return children;
};

AuthGuard.propTypes = {
    children: PropTypes.node
};

export default AuthGuard;
