function UserCard({ user }) {
 return (
<div className="user-card">
<div className="card-header">
<div className="avatar">
         {user.name.charAt(0)}
</div>
<div>
<h2>{user.name}</h2>
<p>{user.occupation}</p>
</div>
</div>
<div className="user-details">
<div className="detail">
<span>Age</span>
<strong>{user.age}</strong>
</div>
<div className="detail">
<span>City</span>
<strong>{user.city}</strong>
</div>
<div className="detail">
<span>Mobile</span>
<strong>{user.mobile}</strong>
</div>
<div className="detail">
<span>Email</span>
<strong>{user.email}</strong>
</div>
<div className="detail">
<span>Occupation</span>
<strong>{user.occupation}</strong>
</div>
<div className="detail address">
<span>Address</span>
<strong>{user.address}</strong>
</div>
</div>
</div>
 );
}
export default UserCard;