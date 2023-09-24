import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import InputBox from './InputBox';

const onChange = jest.fn();

test('InputBox updates value when input changes', () => {
    const placeholder = '"Search market symbol"';
    render(
        <InputBox onChange={onChange} placeholder={placeholder} />
    );
    const inputElement = screen.getByPlaceholderText(placeholder);
    fireEvent.change(inputElement, { target: { value: 'ltc-btc' } });
    expect(onChange).toHaveBeenCalledWith('ltc-btc');
});
