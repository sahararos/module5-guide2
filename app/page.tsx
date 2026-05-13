
import { getUsers } from "./utils/database";

type User = {
  name:string,
  age:number,
  email:string
}

export default async function Home() {
  const users = await getUsers();
  return (
    <div className="bg-blue-800">
      Our data is:
      {users.map((user)=>{
        return (
          <div key={user._id.toString()}>
            <h1>{user.name}</h1>
            <p>email: {user.email}</p>
            <p>age: {user.age}</p>
          </div>
        )
    })}
    </div>
  );
}
