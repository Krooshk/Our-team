function Card(user: any) {
  return (
    <div>
      <img src={user.user.avatar} alt="avatar" />
	  <div>{user.user.first_name} {user.user.last_name}</div>
	  <button>Лайк</button>
    </div>
  );
}

export default Card;
