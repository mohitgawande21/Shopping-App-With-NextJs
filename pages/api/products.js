export default async function handler(req, res) {
    const Data = await fetch('mongodb://localhost:27017/text');
    const JSONData = await Data.json()
    res.status(200).json(JSONData)
  }
  