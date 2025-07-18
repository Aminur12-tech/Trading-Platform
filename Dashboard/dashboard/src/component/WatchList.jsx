import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "../component/GeneralContext";
import { Tooltip, Grow } from "@mui/material";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

import { watchlist as allStocks } from "../Data/data";
import { DoughnutChart } from "./DoughnoutChart";

// ========================
// WatchListItem Component
// ========================
const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  return (
    <li
      onMouseEnter={() => setShowWatchlistActions(true)}
      onMouseLeave={() => setShowWatchlistActions(false)}
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

// =========================
// WatchListActions Component
// =========================
const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  return (
    <span className="actions" style={{ display: "flex", gap: "0.75rem", marginTop: "0.5rem" }}>
      <Tooltip
        title="Buy (B)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button
          className="buy"
          onClick={() => generalContext.openBuyWindow(uid)}
          style={{
            backgroundColor: "#4caf50",
            color: "#fff",
            border: "none",
            padding: "0.4rem 1rem",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "500",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
          }}
        >
          Buy
        </button>
      </Tooltip>

      <Tooltip
        title="Sell (S)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button
          className="sell"
          onClick={() => generalContext.openSellWindow(uid)}
          style={{
            backgroundColor: "#f44336",
            color: "#fff",
            border: "none",
            padding: "0.4rem 1rem",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "500",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
          }}
        >
          Sell
        </button>
      </Tooltip>
    </span>

  );
};

// ========================
// Main WatchList Component
// ========================
const WatchList = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStocks = allStocks.filter((stock) =>
    stock.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const labels = filteredStocks.map((s) => s.name);
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: filteredStocks.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx"
          className="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <span className="counts"> {filteredStocks.length} / 50</span>
      </div>

      <ul className="list">
        {filteredStocks.map((stock, index) => (
          <WatchListItem key={index} stock={stock} />
        ))}
      </ul>

      <DoughnutChart data={data} />
    </div>
  );
};

export default WatchList;
