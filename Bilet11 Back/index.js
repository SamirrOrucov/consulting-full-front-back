import express from "express";
import mongoose, { Schema } from "mongoose";
import cors from 'cors'
const app = express();
const port = 3001;

app.use(express.json())
app.use(cors())
const serviceSchema = new Schema({
    icon: String, 
    title: String,
    description: String,
  });
  const Service = mongoose.model('Service', serviceSchema);

app.get("/", async(req, res) => {
  const result=await Service.find({})
  res.send(result)
});

app.get("/:id",async (req, res) => {
    const {id}=req.params
    const result=await Service.findById(id)
    res.send(result);
});

app.post("/",async (req, res) => {
    const {icon,title,description}=req.body
    const newService=new Service({icon,title,description})
   await newService.save()
  res.send(newService);
});

// app.put("/:id", (req, res) => {
//   res.send("Got a PUT request at /user");
// });

app.delete("/:id", async (req, res) => {
    const {id}=req.params
    const result=await Service.findByIdAndDelete(id)
  res.send("Got a DELETE request at /user");
});

mongoose.connect('mongodb+srv://samir:samir@cluster0.ywgcy8n.mongodb.net/')
  .then(() => console.log('Connected!'))
  .catch(() => console.log('Not connected!'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
