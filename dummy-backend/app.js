require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const { validateAccessToken } = require("./middleware/auth0.middleware");

const { getStoredPosts, storePosts } = require("./data/posts");

function delay(timeMs) {
  return new Promise((resolve, reject) => setTimeout(() => resolve(), timeMs));
}

const app = express();
app.use(
  helmet({
    contentSecurityPolicy: {
      useDefaults: false,
      directives: {
        "default-src": ["'none'"],
        "frame-ancestors": ["'none'"],
      },
    },
    frameguard: {
      action: "deny",
    },
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(
  cors({
    origin: CLIENT_ORIGIN_URL,
    methods: ["GET", "POST", "UPDATE"],
    allowedHeaders: ["Authorization", "Content-Type"],
    maxAge: 86400,
  })
);

app.use((req, res, next) => {
  console.log("Received request %s from %s : %s", req.method, req.host, req.ip);
  res.contentType("application/json; charset=utf-8");
  next();
});

app.get("/posts", async (req, res) => {
  const storedPosts = await getStoredPosts();
  console.log("Get posts");
  // await delay(3000);
  res.json({ posts: storedPosts });
});

app.get("/posts/:id", async (req, res) => {
  console.log("Get single with id: %s", req.params.id);
  const storedPosts = await getStoredPosts();
  const post = storedPosts.find((post) => post.id === req.params.id);
  res.json({ post });
});

app.post("/posts", async (req, res) => {
  console.log("Post posts");
  const existingPosts = await getStoredPosts();
  const lastId = existingPosts.length.toString();
  const postData = req.body;
  console.log("postdata: %s", postData);
  const newPost = {
    ...postData,
    id: lastId,
  };
  const updatedPosts = [newPost, ...existingPosts];
  await storePosts(updatedPosts);
  res.status(201).json({ message: "Stored new post.", post: postData });
});

app.listen(process.env.PORT);
console.log("Listening at: localhost:%d/", process.env.PORT);
