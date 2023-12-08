import * as dao from "./dao.js";
function CityRoutes(app) {
  const searchForCities = async (req, res) => {
    const city = await dao.searchCities(req.params.name);
    res.json(city);
  };

  const addCity = async (req, res) => {
    const city = await dao.addCity(req.body);
    res.json(city);
  };

  const deleteCity = async (req, res) => {
    const city = await dao.deleteCity(req.params.cityID);
    res.json(city);
  };

  app.get("/api/cities/:name", searchForCities);
  app.post("/api/cities", addCity);
  app.delete("/api/cities/:cityID", deleteCity);
}
export default CityRoutes;
