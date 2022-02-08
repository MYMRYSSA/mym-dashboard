import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getAccount } from '../auth-redirect';
import PropTypes from 'prop-types';

//-----------------------|| AUTH GUARD ||-----------------------//

/**
 * Authentication guard for routes
 * @param {PropTypes.node} children children element/node
 */
const AuthGuard = ({ children }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(async () => {
        let user;
        try {
            const response = await getAccount();
            user = response.user;
        } catch (e) {
            user = null;
        }
        if (!user) {
            router.push('/login');
            return;
        }
        setLoading(false);
    }, [])

    if (loading) return null;
    return children;
};

AuthGuard.propTypes = {
    children: PropTypes.node
};

export default AuthGuard;
