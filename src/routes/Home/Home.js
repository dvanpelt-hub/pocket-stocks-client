import React from "react";
import Header from "../../components/Header/Header";
import AddStockPost from "../../components/AddStockPost/AddStockPost";
import StockHoldings from "../../components/StockHoldings/StockHoldings";
import Nav from '../../components/navigation/Nav';

const Home = (props) => {

  return (
    <div>
      <Nav />
      <Header />
      <AddStockPost getStockPrice={props.getStockPrice} />
      <StockHoldings
      />
    </div>
  );
};

export default Home;
