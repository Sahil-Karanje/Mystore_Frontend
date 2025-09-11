import './profile.css';

const Profile = ({ user }) => {

  return (
    <div className="profile_container">
      <div className="profile_card">
        <div className="profile_avatar">
          {user.userName ? user.userName.charAt(0).toUpperCase() : "U"}
        </div>
        <h2 className="profile_name">{user.userName}</h2>
        <p className="profile_email">{user.email}</p>

        <div className="profile_details">
          <p><span>Gender:</span> {user.gender}</p>
          <p><span>Role:</span> {user.isSeller ? "Seller" : "User"}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
