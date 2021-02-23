

// WILL COME BACK TO THIS IN THE FUTURE //

// import React, { useEffect, useState, useContext } from "react";
// import { useHistory, useParams } from "react-router-dom";

// const UpdateStock = (props) => {
//   const [ticker_symbol, setTicker_symbol] = useState("");
//   const [recommendation_status, setRecommendation_status] = useState("Select");
//   const [stock_value, setStock_value] = useState("Select");
//   const { id } = useParams();
//   let history = useHistory();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // const url = "https://fathomless-ravine-36841.herokuapp.com/";
//         const url = `http://localhost:3000/api/stocks/${id}`;
//         const options = {
//           method: "GET",
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//           },
//         };
//         await fetch(url, options)
//           .then((response) => {
//             if (!response.ok) {
//               throw new Error("Error: " + response.status);
//             }
//             return response.json();
//           })
//           .then((responseJson) => {
//             setTicker_symbol(responseJson.ticker_symbol);
//             setRecommendation_status(
//               responseJson.recommendation_status
//             );
//             setStock_value(responseJson.stock_value);
//           });
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const url = `http://localhost:3000/api/stocks/${id}`;
//       const options = {
//         method: "PUT",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           ticker_symbol: ticker_symbol,
//           recommendation_status: recommendation_status,
//           stock_value: stock_value,
//         }),
//       };
//       await fetch(url, options)
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error("Error: " + response.status);
//           }
//           return response.json();
//         })
//     } catch (err) {
//       console.log(err);
//     }
//     // Addds the following URL to the history //
//     history.push("/home");
//   };

//   return (
//     <>
//       <form action="submit">
//         <div className="form-group">
//           <label htmlFor="ticker_symbol">Ticker Symbol</label>
//           <input
//             value={ticker_symbol}
//             onChange={(e) => setTicker_symbol(e.target.value)}
//             type="text"
//             className="ticker_symbol"
//           />
//         </div>
//         <label htmlFor="recommendation_status">BUY/HOLD/SELL</label>
//         <select
//           className="chooseStatus"
//           value={recommendation_status}
//           onChange={(e) => setRecommendation_status(e.target.value)}
//         >
//           <option disabled>Select</option>
//           <option value="BUY">BUY</option>
//           <option value="HOLD">HOLD</option>
//           <option value="SELL">SELL</option>
//         </select>
//         <div className="form-group">
//           <label htmlFor="stock_value">VALUE</label>
//           <select
//             className="chooseStatus"
//             value={stock_value}
//             onChange={(e) => setStock_value(e.target.value)}
//           >
//             <option disabled>Select</option>
//             <option value="Overvalued">Overvalued</option>
//             <option value="Undervalued">Undervalued</option>
//             <option value="Accurate">Accurate</option>
//           </select>
//         </div>
//         <button type="submit" onClick={handleSubmit} className="btn">
//           Submit
//         </button>
//       </form>
//     </>
//   );
// };

// export default UpdateStock;
