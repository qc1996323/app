import Vue from "vue"
import filterPrice from "./filterPrice"
// import filterMarketPrice from "./filterMarketPrice"

let filters={
    filterPrice,
    // filterMarketPrice
}

for(let key in filters){
    Vue.filter(key,filters[key])
}