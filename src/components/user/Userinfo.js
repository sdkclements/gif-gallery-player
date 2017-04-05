import React, { PropTypes } from 'react';
import { auth } from '../../firebase';
import './Userinfo.css';

const CurrentUser = ({ user }) => {
    return (
        <div className="CurrentUser--identification">

            <button
                onClick={() =>auth.signOut()}>
                Sign Out
            </button>

        </div>
    );
};

CurrentUser.propTypes = {
    user: PropTypes.shape({
        displayName: PropTypes.string,
        email: PropTypes.string.isRequired,
        photoURL: PropTypes.string,
        uid: PropTypes.string.isRequired
    })
};

export default CurrentUser;