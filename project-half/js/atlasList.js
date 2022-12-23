import Weather from "./atlasItem.js";

let weatehr_ar = [];

export const doApi = async (_searchQ) => {
  let url = `https://restcountries.com/v3.1/all`;
  showLoading();
  try {
    let resp = await fetch(url);
    let data = await resp.json();

    weatehr_ar.push(...data);
    console.log(weatehr_ar);
    createListof10();
  } catch (err) {
    alert(`Error`);
    console.log(err);
  }
};

export const searchFilterWet = (_searchQ) => {
  let filter_ar = weatehr_ar.filter((item) => {
    return item.name.common.toLowerCase().includes(_searchQ.toLowerCase());
  });
  createList(filter_ar, "#id_row", Weather);
};

export const searchFilterWet2 = (_searchQ) => {
  let filter_ar = weatehr_ar.filter((item) => {
    return item.name.common.toLowerCase() == _searchQ.toLowerCase();
  });
  createList(filter_ar, "#id_row", Weather);
};

const createListof10 = () => {
  let filter_ar = weatehr_ar.filter(
    (item, i) =>
      item.name.common.includes("Israel") ||
      item.name.common.includes("France") ||
      item.name.common == "United States"
  );
  console.log(weatehr_ar);
  createList(filter_ar, "#id_row", Weather);
};

const createList = (_ar, _parent, Weather) => {
  document.querySelector(_parent).innerHTML = "";
  _ar.forEach((item) => {
    let newItem = new Weather(_parent, item);
    newItem.render();
  });
};

export const bordersApi = async (code) => {
  let url = `https://restcountries.com/v3.1/alpha/${code}`;
  let resp = await axios.get(url);

  let fullCountry = await resp.data[0].name.common;
  return fullCountry;
};

function showLoading() {
  document.querySelector("#id_row").innerHTML = `
  <img class="text-center h-100 loading" src="images/loading.gif" alt="">
</div>

      `;
}
