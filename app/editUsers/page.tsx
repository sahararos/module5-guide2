import { editUser } from "../utils/database";

const EditUsers = () => {
  return (
    <div className="p-4">
      <form action={editUser} method="POST">
        <input className="border p-2" type="text" name="name" placeholder="Name" />
        <br />
        <input className="border p-2" type="number" name="age" placeholder="Age" />
        <br />
        <input className="border p-2" type="email" name="email" placeholder="Email" />
        <br />
        <button className="bg-blue-500 text-white p-2" type="submit" value="Change User">Change User</button>
      </form>
    </div>
  );
};

export default EditUsers;