import UserCard from "../UserCard";

export const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "leanne@example.com",
    phone: "9876543210",
    city: "Gwenborough",
    company: "Romaguera-Crona",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "ervin@example.com",
    phone: "9876543211",
    city: "Wisokyburgh",
    company: "Deckow-Crist",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "clementine@example.com",
    phone: "9876543212",
    city: "McKenziehaven",
    company: "Romaguera-Jacobson",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "patricia@example.com",
    phone: "9876543213",
    city: "South Elvis",
    company: "Robel-Corkery",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "chelsey@example.com",
    phone: "9876543214",
    city: "Roscoeview",
    company: "Keebler LLC",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "dennis@example.com",
    phone: "9876543215",
    city: "South Christy",
    company: "Considine-Lockman",
  },
];

function UserList() {
  return (
    <div className="app">
      <header className="page-header">
        <div>
          <p className="small-title">USER DIRECTORY</p>
          <h1>Our Users</h1>
          <p className="subtitle">
            Explore user profiles and view their complete details.
          </p>
        </div>

        <div className="user-count">
          <strong>{users.length}</strong>
          <span>Users</span>
        </div>
      </header>

      <main className="user-grid">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </main>
    </div>
  );
}

export default UserList;