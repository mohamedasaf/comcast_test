import { render, waitFor, screen } from '@testing-library/react';
import { IsearchMarketCurreny, MarketCurrency } from './MarketCurrencies';

global.fetch = jest.fn();

test('Should fetch marketSymbol and displays data', async () => {
    const searchValue = 'ltc-btc'
    const mockResponse = {
        symbol: 'ltc-btc',
        high: '1234',
        low: '1234',
        volume: '12',
        percentChange: '223',
        quoteVolume: '0.233',
        updatedAt: '2023-09-24T06:08:39.01Z',
    };

    jest.spyOn(global, 'fetch').mockResolvedValue({
        json: jest.fn().mockResolvedValue(mockResponse as IsearchMarketCurreny),
    } as any);

    render(<MarketCurrency searchValue={searchValue} />);
    await waitFor(() => {
        expect(screen.getByText('ltc-btc')).toBeInTheDocument();
    });
    expect(global.fetch).toHaveBeenCalledWith(`http://localhost:3001/getmarketsummary/${searchValue}`);
});


test('Should show MARKET_DOES_NOT_EXIST if no marketSymbol in reponse', async () => {
    const searchValue = 'ltc-b'
    const mockResponse = {
       code: 'MARKET_DOES_NOT_EXIST'
    };

    jest.spyOn(global, 'fetch').mockResolvedValue({
        json: jest.fn().mockResolvedValue(mockResponse as IsearchMarketCurreny),
    } as any);

    render(<MarketCurrency searchValue={searchValue} />);
    await waitFor(() => {
        expect(screen.getByText('MARKET_DOES_NOT_EXIST')).toBeInTheDocument();
    });
    expect(global.fetch).toHaveBeenCalledWith(`http://localhost:3001/getmarketsummary/${searchValue}`);
});

