import express from "express";
import mongoose, { mongo } from "mongoose";
import listEndpoints from "express-list-endpoints";
import cors from "cors";
import { badRequestHandler, notFoundHandler } from "./errorHandlers";

const server = express();
const port = process.env.PORT || 3001;

//**********MIDDLEWARES ********************/

server.use(cors());
server.use(express.json());

//**********ENDPOINTS *********************/

//************ERROR HANDLERS**************/
server.use(badRequestHandler);
server.use(notFoundHandler);
server.use(genericErrorHandler);

//***************************************/

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_CONNECTION_URL);

mongoose.connection.on("connected", () => {
  console.log("Successfuly connected to Mongo!");

  server.listen(port, () => {
    console.table(listEndpoints(server));
    console.log("Server is running on port:", port);
  });
});
