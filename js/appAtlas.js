import { doApi } from "./atlasList.js";
import { declareEvents } from "./atlasForm.js";

const init = () => {
  doApi();
  declareEvents();
};

init();
