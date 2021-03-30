import React, { useEffect, useState } from "react";
import {Line} from "react-chartjs-2";
import menuStyle from "./SideNavigator.module.css";
import style from "./MultiCoinGraph.module.css";

async function loadCoinData(market, amount){
    return await fetch(`https://api.upbit.com/v1/candles/minutes/60?market=${market}&count=${amount}`)
        .then(x => x.json());
}

function MiniLineChart({data, name}){

    let values = (data || []);
    values = (values.datasets) || [];
    values = (values[0]) || [];
    values = (values.data) || [];
    const currentPrice = values[values.length - 1];
    const max = Math.max(...values);
    const min = Math.min(...values);
    const percent = Math.round((max / min - 1) * 10000) / 100;
    const [option] = useState({
        // responsive: false,
        // legend: {display:false},
        // scales:{yAxes:[
        //     {ticks:{display:false}, gridLines:{display:false, drawBorder: false, color:"rgba(0,0,0,0)"}}, 
        // ], xAxes:[
        //     {ticks:{display:false}, gridLines:{display:false, drawBorder: false, color:"rgba(0,0,0,0)"}}
        // ]},
        // elements: {line: {tension: 0}},
        responsive: false,legend: {display: false},elements: {line: {borderColor: '#000000',borderWidth: 1},point: {radius: 0}},tooltips: {enabled: false},scales: {yAxes: [{display: false}],xAxes: [{display: false}]}
    });

    return (
        <div>
            <Line width={144} height={81} data={data} options={option}/>
            <span>{name} {currentPrice} : {percent}%</span>
        </div>
    )
}

function MultiCoinGraph(){

    const [coinArr] = useState(["PCI", "DKA", "ETH", "NPXS", "BTC", "XRP", "XEM", "CRO"]);
    const [index, setIndex] = useState(0);
    const [datas, setDatas] = useState(coinArr.map(_ => ({})));

    useEffect(() => {
        const interval = setInterval(async() => {
            if (coinArr.length === 0) return;
            const coin = coinArr[index];
            const data = await loadCoinData("KRW-" + coin, 60);
            const reversedData = data.reverse();
            if(!data.error) {
                const newData = {datasets:[]}
                newData.labels = reversedData.map(x => new Date(x.candle_date_time_kst));
                newData.datasets.push({
                    label:"Trade Price",
                    data:reversedData.map(x=>x.trade_price),
                    backgroundColor:"rgba(0,0,0,0.1)",
                });
                const a = datas.map(x => x);
                a[index] = newData;
                setDatas(a)
            }
            setIndex(index + 1 >= coinArr.length ? 0 : index + 1)
        }, 200);
        return () => clearInterval(interval);
    }, [coinArr, index, datas])

    return (
        <div className={menuStyle.main}>
            <h3>여러개의 가상화폐를 한 번에 표시합니다. </h3>
            <div className={style.flex}>
                {coinArr.map((x, i) => <MiniLineChart key={i} data={datas[i]} name={x}/>)}
            </div>
        </div>
    )
}

export default MultiCoinGraph;