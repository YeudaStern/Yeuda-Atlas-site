import { searchFilterWet, searchFilterWet2 } from "./atlasList.js";

export const cardsStyle = () => {
  document.querySelector(".cards").className =
    "col-md-8 mx-auto shadow mb-0  mt-2 mx-auto cards";
  document.querySelector(".cards").style = "max-width: 90%; ";
  document.querySelector(".img_flagg").style = " border-radius: 12px 12px 0 0;";
  document.querySelector(".iframe").style =
    "height: 500px;   border-radius:0 0 12px 12px; ";
};

export const declareEvents = () => {
  let id_input = document.querySelector("#id_input");
  let search_btn = document.querySelector("#id_search");

  search_btn.addEventListener("click", () => {
    if (
      id_input.value != "Palestine" &&
      id_input.value != "palestine" &&
      id_input.value != "pale" &&
      id_input.value != "pales" &&
      id_input.value != "Pale" &&
      id_input.value != "פלסטין" &&
      id_input.value != "פלס"
    ) {
      searchFilterWet(id_input.value);
      console.log("working");
      cardsStyle();
    } else {
      alert(
        'There is not such country, Try : "israel": אין בנמצא כזו מדינה, נסו'
      );
    }
  });

  document.querySelectorAll(".country").forEach((element) => {
    element.addEventListener("click", () => {
      searchFilterWet(element.id);
      cardsStyle();
    });
  });

  let usa = document.querySelector("#id_usa");
  usa.addEventListener("click", () => {
    searchFilterWet2("United States");
    cardsStyle();
  });


};
