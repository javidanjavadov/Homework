const stocks = [
    { symbol: "Computer", price: 850.00, sector: "Technology" },
    { symbol: "Phone", price: 900.00, sector: "Technology" },
    { symbol: "Playstation", price: 600.00, sector: "Technology" },
    { symbol: "Tablet", price: 300.00, sector: "Technology" },
    { symbol: "TV", price: 3300.00, sector: "Technology" },
  ];
  
  function updateStockPrices() {
    const randomStockIndex = Math.floor(Math.random() * stocks.length);
    const randomPriceChange = Math.random() * 0.3;
    const PositiveChange = Math.random() >= 0.5;
  
    stocks[randomStockIndex].price += PositiveChange
      ? stocks[randomStockIndex].price * randomPriceChange
      : -stocks[randomStockIndex].price * randomPriceChange;
  
    console.log(`Stock price updated: ${stocks[randomStockIndex].symbol} - $${stocks[randomStockIndex].price.toFixed(2)}`);
  }
  
  function filterStocksBySector(sector) {
    const filteredStocks = stocks.filter((stock) => stock.sector === sector);
    console.log(`Stocks in sector ${sector}:`);
    console.table(filteredStocks);
  }
  

  
  setInterval(updateStockPrices, 3000);
  filterStocksBySector("Technology");
  