import path from "path";
import fs from "fs";

const handler = (req, res) => {
  const dataFilePath = path.join(process.cwd(), "src/pages/api/movies.json");

  if (req.method === "GET") {
    const data = JSON.parse(fs.readFileSync(dataFilePath, "utf8"));
    res.status(200).json(data);
    return;
  }

  if (req.method === "POST") {
    try {
      const newData = req.body;
      const data = JSON.parse(fs.readFileSync(dataFilePath, "utf8"));

      const alreadyExists = data.some(
        (movie) => movie.id === newData.id || movie.title === newData.title,
      );

      if (alreadyExists) {
        res.status(419).end("The movie already exists");
        return;
      }

      const maxId = data.reduce((max, movie) => Math.max(max, movie.id), 0);

      const newDataWithId = {
        id: maxId + 1,
        ...newData,
      };

      data.push(newDataWithId);

      fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));

      res.status(200).json(newData);
    } catch {
      res.status(500).end("Something went wrong");
    }

    return;
  }

  res.status(405).end(`Method ${req.method} Not Allowed`);
};

export default handler;
