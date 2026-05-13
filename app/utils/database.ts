import { MongoClient, ServerApiVersion, ObjectId } from 'mongodb';

const uri = process.env.MONGODB_URI as string;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

type Users = {
  _id:ObjectId,
  name:string,
  age:number,
  email:string
}

export const getUsers = async ()=> {
    // await run().catch(console.dir);
    const users = await client.db("Testing").collection("user").find();
      const arr:Users[] = await users.toArray() as unknown as Users[];
      console.log(users.toArray());
      console.log(arr);
      return arr;
}

export async function editUser(formData: FormData) {
  'use server'
    const name = formData.get('name')
    const email = formData.get('email')
    const age = formData.get('age')

  // Update data
  // Revalidate cache
    const users = await client.db("Testing").collection("user").updateOne(
      {_id:new ObjectId("6968de662dd8fa82c1c74b92")},
      {
        $set: {
            name,
            email,
            age
        },
      }
    );
}
 