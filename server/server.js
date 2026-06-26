import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

// console.log(process.env.TINYURL_API_TOKEN);
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.post("/shorten", async (req, res) => {
  const { url } = req.body;

  try {
    const response = await fetch("https://api.tinyurl.com/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.TINYURL_API_TOKEN}`,
      },
      body: JSON.stringify({
        url,
      }),
    });

    const data = await response.json();

    console.log(data);

    res.json(data);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: "Something went wrong.",
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
