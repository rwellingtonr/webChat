import { connect, connection } from "mongoose"

run().catch((err) => console.log(err))

export async function run(): Promise<void> {
  // 4. Connect to MongoDB
  await connect(process.env.MONGODB_SERVER)
}

connection.on("connected", () => {
  console.log("Mongoose is working!")
})

connection.on("error", (err) => {
  console.log(`The db throws error ${err} `)
})

connection.on("disconnected", () => {
  console.log("Mongoose has been disconnected!")
})
