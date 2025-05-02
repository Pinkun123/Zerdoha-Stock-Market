import React, { useState, useEffect } from "react";
// import axios, { all } from "axios";
import axios from "axios";

import { position } from "../data/data";

const Positions = () => {
  const [positions, setAllPositions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // DATA FROM DB
      // try {
      //   const res = await axios.get("http://localhost:3000/allHoldings");
      //   setAllHoldings(res.data);
      // } catch (error) {
      //   console.error("Error fetching holdings:", error);
      //   setAllHoldings([]);
      // }

      // DATA FROM API
      const options = {
        method: "GET",
        url: "https://api.marketstack.com/v1/eod?access_key=eb15d4026c125c5387ec0a525c54375a",
        params: {
          symbols: "AAPL",
        },
      };

      try {
        const response = await axios.request(options);
        // console.log(response.data.data);
        setAllPositions(response.data.data);
      } catch (error) {
        console.error(error);
        setAllPositions([]);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>exchange</th>
            <th>open</th>
            <th>high.</th>

            <th>low</th>
            <th>close</th>
            <th>volume</th>
            <th>adj-volume</th>
          </tr>

          {positions.map((stock, index) => {
            const high = stock.low ? "profit" : "loss";
            const low = stock.high ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.exchange}</td>
                <td>{stock.open}</td>
                <td className={high}>{stock.high}</td>
                <td className={low}>{stock.low}</td>
                <td>{stock.close}</td>
                <td>{stock.volume}</td>
                <td>{stock.adj_volume}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Positions;
