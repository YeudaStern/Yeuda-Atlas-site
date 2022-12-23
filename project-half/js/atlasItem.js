import { bordersApi, searchFilterWet } from "./atlasList.js";

export default class Weather {
  constructor(_parent, _item) {
    this.parent = _parent;
    this.name = _item.name.common;
    this.capital = _item.capital;
    this.region = _item.region;
    this.flags = _item.flags.png;
    this.map = _item.latlng;
    this.population = Number(_item.population).toLocaleString();
    this.languages = Object.values(_item.languages);
    this.borders = _item.borders;
    this.coat = _item.coatOfArms.png;
    this.coin = Object.keys(_item.currencies);
    this.languages = Object.keys(_item.languages);
    this.coinn = Object.values(_item.currencies)[0].name;
    this.symbol = _item.currencies[this.coin].symbol;
    this.ddate = new Date();
    this.date = `${this.ddate.getDate()}/${this.ddate.getMonth()}/${this.ddate.getFullYear()}`;
  }
  render() {
    let div = document.createElement("div");
    div.className = "col-md-4 p-2  mb-3 mt-2 mx-auto cards";
    document.querySelector(this.parent).append(div);
    div.innerHTML = `
 
    <img src="${this.coat}" alt="flag" class="coat mb-2 mt-2 text-center img_coat">
       <h5 class="card-title text-center mb-2 name"><strong> ${this.name}</strong> </h5>
       <div class="img_flag h-100">
        <img class="h-100 img_flagg " src=" ${this.flags}" alt="flag"> 
        </div>   
        <ul class="list-group list-group-flush text-center justify-content-center ull">
        <li class="list-group-item"><strong>Region : </strong>${this.region}</li>
        <li class="list-group-item"><strong>Population :</strong> ${this.population}</li>
        <li class="list-group-item"><strong>Capital :</strong> ${this.capital}</li>
        <li class="list-group-item"><strong>Coin : </strong>${this.coin}-${this.coinn}-(${this.symbol})</li>
        <li class="list-group-item"><strong>languages :</strong> ${this.languages}</li>
        <li class="list-group-item"><strong>update :</strong> ${this.date}</li>
        <li class="list-group-item"><strong>States with border :</strong></li>
        
        <li id="bordDiv" class="list-group-item border borders_div"></li>   
         <div class="col-md-12 mb-2 ">
        <iframe class="col-12 mt-2  iframe p-0 mb-0" style="height: 50vh; border-radius:0 0 12px 12px;"
        src="https://maps.google.com/maps?q=${this.map[0]}, ${this.map[1]}&z=5&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no"
        marginheight="0" marginwidth="0"></iframe>
    </div>
        </ul>    
          `;

    let classDiv = div.querySelector(".borders_div");
    if (this.borders) {
      this.borders.forEach(async (item) => {
        let a = document.createElement("a");
        a.className = "";
        classDiv.append(a);
        a.innerHTML = await bordersApi(item);
        a.addEventListener("click", () => {
          searchFilterWet(a.innerHTML);
        });
      });
    } else {
      classDiv.innerHTML = "thre is no border ";
    }
  }
}
