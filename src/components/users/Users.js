import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';
import { Grid } from '@mui/material';

const Users = () => {
    const githubContext = useContext(GithubContext);

    const { loading, users } = githubContext;

    if (loading) {
        return <Spinner />
    } else {
        return (
            <Grid container spacing={3} style={{ marginBottom: "50px"}}>
                {users.map(user => (
                    <Grid key={user.id} item xs={6} sm={4} md={3} lg={2.4}>
                      <UserItem user={user} />
                    </Grid>
                ))}
            </Grid>
        );
    }
};

export default Users;