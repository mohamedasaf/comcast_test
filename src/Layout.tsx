import { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { MarketCurrency } from './container/MarketCurrencies/MarketCurrencies';

export default function Layout() {
  const [searchValue, setSearchValue] = useState<string>()

  function getSearchValue(value: string) {
    setSearchValue(value)
  }

  return (
    <div data-testid="layout">
      <Header getSearchValue={getSearchValue} />
      <MarketCurrency searchValue={searchValue} />
      <Footer />
    </div>
  );
}
