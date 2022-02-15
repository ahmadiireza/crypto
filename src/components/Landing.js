import React,{useState,useEffect} from 'react';
// api
import { getCoin } from '../services/api';
import Loader from './Loader';
import Coin from './Coin';
import styles from "./Landing.module.css";

const Landing = () => {
    // aknon 1 state minevisim va cion hayeh daryafti ro daron gharar midahim
    const [coins,setcoins]=useState([]);
    // state paeen vaseh amliyat search ast ke ba harbar filter shodan etelaat dar on array ghrar migirand
    const [search,setSearch]=useState("");
    useEffect(()=>{
    const fetchAPI=async()=>{
        const data=await getCoin();
        // console.log(data);
        setcoins(data);
    }
        // einja fetchAPI ro ejra mikonim
        fetchAPI();
    },[])
    // searchHandler
    const searchHandler=event=>{
        setSearch(event.target.value)
    }
    // amaliyat mrbot be search
    const searchCoins=coins.filter(coin=>coin.name.toLowerCase().includes(search.toLowerCase()))
    // toLowerCase=>migeh ageh hrof bozorg vared kar on ro be  hrof kochek tabdil konad

    
    return (
        <>
            <input className={styles.input} type="text" placeholder='Search' value={search} onChange={searchHandler}/>
            {
                coins.length ?
             <div className={styles.coinContainer}>
                {
                    searchCoins.map(coin=><Coin
                    key={coin.id} 
                    name={coin.name}
                    image={coin.image}
                    symbol={coin.symbol}
                    price={coin.current_price}
                    marketCap={coin.market_cap}
                    priceChange={coin.price_change_24h}
                    />)

                }
            </div>
            :
            <Loader/>
            }
            
        </>
    );
};

export default Landing;