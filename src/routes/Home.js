import React from "react";
import Header from "../components/Header/Header";
import AddStockPost from "../components/AddStockPost/AddStockPost";
import StockHoldings from "../components/StockHoldings/StockHoldings";

const Home = (props) => {

  const [ currentMarketPrice, setCurrentMarketPrice ] = React.useState(0);

  // if (currentMarketPrice !== 0) {
  //   setCurrentMarketPrice(0);
  // } else {
  // }

  return (
    <div>
      <Header />
      <AddStockPost getStockPrice={props.getStockPrice} />
      <StockHoldings
      // ROI={this.props.ROI}
      // currentMarketPrice={this.props.currentMarketPrice}
      />
    </div>
  );
};

export default Home;
