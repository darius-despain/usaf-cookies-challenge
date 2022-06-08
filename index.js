import express from 'express';
import cookieParser from 'cookie-parser';

const port = 3005

const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))

//route to set cookie
app.get('/login/:name', (req, res) => {
  res.cookie("name", req.params.name)
    .status(200)
    .send(`You are now logged in`);
})

//route to display Welcome [name]!
app.get('/hello', (req, res) => {
  console.log(`cookies: `, req.cookies)
  if(req.cookies.name !== undefined) {
    let name = req.cookies.name;
    res.status(200).send(`Welcome ${name}!`);
  } else {
    res.status(200).send(`You are not signed in!, visit http://localhost:3005/login/[username] to sign in`);
  }
})