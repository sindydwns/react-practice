import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import menuStyle from "./SideNavigator.module.css";
import style from "./MultiCoinGraph.module.css";

async function loadCoinData(market, amount) {
    return await fetch(`https://api.upbit.com/v1/candles/minutes/60?market=${market}&count=${amount}`)
        .then(x => x.json());
}

function MiniLineChart({ values, title, style }) {

    const [option] = useState({
        // responsive: false,
        // legend: {display:false},
        // scales:{yAxes:[
        //     {ticks:{display:false}, gridLines:{display:false, drawBorder: false, color:"rgba(0,0,0,0)"}}, 
        // ], xAxes:[
        //     {ticks:{display:false}, gridLines:{display:false, drawBorder: false, color:"rgba(0,0,0,0)"}}
        // ]},
        // elements: {line: {tension: 0}},
        responsive: false, legend: { display: false }, elements: { line: { borderColor: '#000000', borderWidth: 1 }, point: { radius: 0 } }, tooltips: { enabled: false }, scales: { yAxes: [{ display: false }], xAxes: [{ display: false }] }
    });
    const data = {};
    if (values) {
        data.labels = values.map(x => Math.random());
        data.datasets = [{
            label: "Trade Price",
            data: values,
            backgroundColor: "rgba(0,0,0,0.1)",
        }];
    }

    return (
        <div style={style}>
            {title !== undefined ? <>
                <Line width={144} height={81} data={data} options={option} />
                {/* <span>{key} {currentValue} : {data.percent}%</span> */}
                <span>{title}</span>
            </> : <div style={{ width: 144, height: 100 }}>loading...</div>
            }
        </div>
    )
}

function MultiCoinGraph() {

    const [coinArr] = useState(["PCI", "DKA", "ETH", "PUNDIX", "BTC", "XEM", "CRO", "OMG"]);
    const [index, setIndex] = useState(0);
    const [datas, setDatas] = useState(coinArr.map(x => ({ key: x })));
    const [sorted, setSorted] = useState([]);

    useEffect(() => {
        const interval = setInterval(async () => {
            if (coinArr.length === 0) return;
            const coin = coinArr[index];
            const data = await loadCoinData("KRW-" + coin, 60);
            const reversedData = data.reverse();
            if (!data.error) {
                const newData = {};
                newData.values = reversedData.map(x => +x.trade_price);
                newData.max = Math.max(...newData.values);
                newData.min = Math.min(...newData.values);
                newData.percent = Math.round((newData.max / newData.min - 1) * 10000) / 100;
                newData.key = coin;
                newData.currentPrice = newData.values[newData.values.length - 1];
                const a = datas.map(x => x);
                a[index] = newData;
                console.log(a.length);
                setDatas(a)
            }
            setIndex(index + 1 >= coinArr.length ? 0 : index + 1)
        }, 200);
        return () => clearInterval(interval);
    }, [coinArr, index, datas]);

    useEffect(() => {
        const dump = [...datas];
        setSorted(dump.sort((x, y) => y.percent - x.percent));
    }, [datas])

    return (
        <div className={menuStyle.main}>
            <h3>여러개의 가상화폐를 한 번에 표시합니다. </h3>
            <div className={style.flex}>
                {datas.map((x, i) => x.values ?
                    <MiniLineChart
                        key={x.key}
                        values={datas.find(item => item.key === x.key).values}
                        title={`${x.key} ${x.currentPrice} : ${x.percent}%`} />
                    : <MiniLineChart key={x.key} />
                )}
            </div>
        </div>
    )
}

export default MultiCoinGraph;