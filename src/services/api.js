import axios from "axios";
const Base_URL="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false";

// taref function
const getCoin=async()=>{
    const response=await axios.get(Base_URL);
    return response.data;

}

export {getCoin};
