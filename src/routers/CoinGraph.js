import React, { useEffect, useState } from "react";
import {Line} from "react-chartjs-2";
import menuStyle from "./SideNavigator.module.css";

async function loadCoinData(market){
    return await fetch(`https://api.upbit.com/v1/candles/minutes/1?market=${market}&count=200`)
        .then(x => x.json());
}

function CoinGraph(){

    const [market, setMarket] = useState("KRW-BTC");
    const [data, setData] = useState({});
    const [option] = useState({
        responsive: false,
        // legend: {display:false},
        scales:{xAxes:[{ticks:{display:false}}]},
        elements: {line: {tension: 0}},
    });

    useEffect(() => {
        loadCoinData(market).then(values =>{
            values = values.reverse();
            const newData = {datasets:[]}
            newData.labels = values.map(x => new Date(x.candle_date_time_kst));
            newData.datasets.push({
                label:"Trade Price",
                data:values.map(x => x.trade_price),
                backgroundColor:"rgba(0,0,0,0.1)",
            });
            setData(newData);
        });
    }, [market]);

    return (
        <div className={menuStyle.main}>
            <h3>가상화폐 거래소에서 최근 200분의 거래정보를 가져와 그래프로 출력합니다. </h3>
            <span>가상화폐를 선택 : </span>
            <select value={market} onChange={e => setMarket(e.target.value)}>
                <option value="KRW-BTC">비트코인</option>
                <option value="KRW-ETH">이더리움</option>
                <option value="KRW-PCI">페이코인</option>
            </select>
            <div>
                <Line width={1000} height={500} data={data} options={option}/>
            </div>
        </div>
    )
}

export default CoinGraph;