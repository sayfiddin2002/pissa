import React from 'react'
import { useState } from 'react';

function Po_card(props) {
    
    const form = (e) => {
        e.preventDefault()
    }

    let total = 0;

    props.orders.forEach(i => {
        if (i.stock > 1) {
            total += i.price * i.stock

        } else {
            total += i.price
        }
    });

    const [num, setNum] = useState('')
    function formatCardNumber(value) {
        const val = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
        const matches = val.match(/\d{4,16}/g);
        const match = (matches && matches[0]) || "";
        const parts = [];

        for (let i = 0, len = match.length; i < len; i += 4) {
            parts.push(match.substring(i, i + 4));
        }

        if (parts.length) {
            return parts.join(" ");
        } else {
            return value;
        }
    }

    const [data, setData] = useState('')

    function formatExpires(value) {
        return value
            .replace(/[^0-9]/g, "")
            .replace(/^([2-9])$/g, "0$1")
            .replace(/^(1{1})([3-9]{1})$/g, "0$1/$2")
            .replace(/^0{1,}/g, "0")
            .replace(/^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, "$1/$2");
    }

    return (
        <div id='po_carte'>
            <div className="po_card">
                <div id='kart'>
                    <p>По карте</p>
                    <p>{total} ₽</p>
                </div>
                <form onSubmit={form}>
                    <input value={formatCardNumber(num)} onChange={(e) => setNum(e.target.value)} required id='nomer' type="text" placeholder='Номер карты' />
                    <div id='wrap'>
                        <input value={formatExpires(data)} onChange={e=>setData(e.target.value)} required type="text" placeholder='Месяц/Год' />
                        <input required type="number" placeholder='CVV-код' />
                    </div>
                    <input required id='email' type="email" placeholder='Электронная почта' />
                    <button type='submit'>Оплатить</button>
                </form>
                <div className='pocard_footer'>
                    <p>
                        Нажимая кнопку «Оплатить», я соглашаюсь с условиями ПАО СберБанк
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Po_card