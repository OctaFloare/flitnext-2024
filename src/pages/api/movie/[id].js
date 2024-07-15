import fs from "fs";
import path from "path";

const handler = (req,res) => {
    const dataFilePath = path.join(process.cwd(), "src/pages/api/movies.json");

    const data = JSON.parse(fs.readFileSync(dataFilePath, "utf8"));
    const { id } = req.query 

    const movie = data.find(mockMovie => mockMovie.id.toString() === id)

    if(movie){
        res.status(200).json(movie)
    }

    res.status(404).end(`The movie with id: ${id} was not found`)
}

export default handler
