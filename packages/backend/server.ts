import express, { Request, Response } from "express";
import cors from "cors";
const app = express();
const port = 3001;

app.use(cors());
app.get("/", (req: Request, res: Response) => {
  res.json({ foo: "bar" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
