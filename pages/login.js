import React from 'react';

// material-ui
import { useTheme } from '@material-ui/core';
import { Grid, Stack, Typography, useMediaQuery } from '@material-ui/core';

// project imports
import AuthCardWrapper from '../components/login/AuthCardWrapper';
import RestLogin from '../components/login/RestLogin';

import styles from '../styles/Login.module.css';

//================================|| LOGIN MAIN ||================================//

const Login = () => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div className={styles.loginContainer}>
            <div className={styles.mainCard}>
                <AuthCardWrapper>
                    <Grid spacing={2} alignItems="center" justifyContent="center">
                        <Grid alignItems="center" justifyContent="center">
                            <Grid item>
                                <Stack alignItems="center" justifyContent="center" spacing={1}>
                                    <Typography color={theme.palette.secondary.main} gutterBottom variant={matchDownSM ? 'h3' : 'h2'} style={{ marginBottom: 20}}>
                                        Bienvenido de vuelta
                                    </Typography>
                                </Stack>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <RestLogin />
                        </Grid>
                    </Grid>
                </AuthCardWrapper>
            </div>
        </div>
    );
};

export default Login;
