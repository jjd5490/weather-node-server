import * as dao from "./dao.js";
function CityListRoutes(app) {
  const cities = async (req, res) => {
    const x = await dao.getCityList();
    // const x = [1, 2, 3];
    res.json(x);
  };

  const addCity = async (req, res) => {
    const response = await dao.addCityToList(req.params.cityID);
    res.json(response);
  };

  const removeCity = async (req, res) => {
    const response = await dao.removeCityFromList(req.params.cityID);
    res.json(response);
  };

  app.get("/api/citylist", cities);
  app.post("/api/citylist/:cityID", addCity);
  app.delete("/api/citylist/:cityID", removeCity);
}
export default CityListRoutes;
