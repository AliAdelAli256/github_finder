import React, { Fragment, useContext, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';


const User = () => {
    const { Login } = useParams();
    const githubContext = useContext(GithubContext);
    const { getUser, getUserRepos, loading, repos, user } = githubContext;

    useEffect(() => {
        getUser(Login);
        getUserRepos(Login);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const {
        name,
        company,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable
    } = user;

    if (loading) {
        return <Spinner />;
    }

    return (
        <Fragment>
            <Link to='/' className='btn btn-light' style={{ borderRadius: "5px" }}>
                Back to Search
            </Link>
            Hireable: {' '}
            {hireable ? <i className="fas fa-check text-success" /> : <i className="fas fa-times-circle text-danger" />}
            <div className="card grid-2">
                <div className="all-center">
                    <img
                        src={avatar_url}
                        className="round-img"
                        alt=''
                        style={{ width: "150px" }} />
                    <h1>{name}</h1>
                    <p>Location: {location}</p>
                </div>
                <div>
                    {bio && (<Fragment>
                        <h3>Bio</h3>
                        <p>{bio}</p>
                    </Fragment>)}
                    <a href={html_url} className="btn btn-dark my-1" style={{ borderRadius: "5px" }}>
                        Visit Github Profile
                    </a>
                    <ul>
                        <li>
                            {login && <Fragment>
                                <strong>Username: </strong> {login}
                            </Fragment>}
                        </li>
                        <li>
                            {company && <Fragment>
                                <strong>Company: </strong> {company}
                            </Fragment>}
                        </li>
                        <li>
                            {blog && <Fragment>
                                <strong>Website: </strong> {blog}
                            </Fragment>}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card text-center">
               <div className="badge badge-dark">Followers: {followers}</div>
               <div className="badge badge-light">Following: {following}</div>
               <div className="badge badge-dark">Public Repos: {public_repos}</div>
               <div className="badge badge-light">Public Gists: {public_gists}</div>
            </div>

            <Repos repos={repos} />
        </Fragment>
    );
};

export default User;