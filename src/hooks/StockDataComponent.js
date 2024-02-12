// https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/SBI
// https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/NLC 

import { useEffect, useState } from "react";
import axios from "axios";

export default function StockDataComponent() {
    
    var [stockList, setStockList] = useState([]);
    var [stockName, setStockName] = useState("");
    
    function addStockToArray() {
        setStockList([...stockList, stockName])
        setStockName("");
    }
    
    function clearStockList() {
        setStockList([]);
    }
    
    return (
        <div>
            <input type="text" value={stockName} onChange={(event) => setStockName(event.target.value)} />
            <input type="button" value="Add Stock" onClick={addStockToArray} />
            <input type="button" value="Clear Stock" onClick={clearStockList} />
            
            {stockList.map(stockUrl => {
                return (
                    <StockData url={stockUrl}></StockData>
                )
            })}
        </div>
    )
}

export function StockData(props) {
    var [stockPrice, setStockPrice] = useState(0);
    var [stockColor, setStockColor] = useState("");
    
    useEffect(() => {
        setInterval(() => {
            axios.get(props.url).then((response) => {
                setStockPrice((oldPrice) => {
                    setStockColor(oldPrice > response.data.data.pricecurrent ? "red" : "green");
                    return response.data.data.pricecurrent
                });
            })
        }, 2000);
    }, []);
    
    return (
        <div>
            <h1 style={{color: stockColor}}>Stock Price is { stockPrice }</h1>
        </div>
    )
}