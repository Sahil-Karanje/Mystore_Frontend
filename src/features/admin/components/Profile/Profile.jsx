import React, { useContext } from 'react';
import './profile.css';
import sampleImg from '../../../../assets/login_bg.jpg'
import { UserContext } from '../../../../UserContext';

const Profile = () => {

  const { state } = useContext(UserContext);

  return (
    <div className="profile_container">
      <img
        src={sampleImg}
        alt="U"
        className="profile_image"
      />
      <h2 className="profile_name">{state.name}</h2>
      <h4>Seller</h4>
    </div>
  );
};

export default Profile;
