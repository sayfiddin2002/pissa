                            import React from 'react'

                            function Po_card(props) {
                                // const form = document.querySelector('#form');
                                // form.addEventListener('click', ()=> {
                            
                                // })
                            
                                const form = (e)=> {
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
                            
                                return (
                                    <div id='po_carte'>
                                        <div className="po_card">
                                            <div id='kart'>
                                                <p>По карте</p>
                                                <p>{total} ₽</p>
                                            </div>
                                            <form onSubmit={form}>
                                                <input required id='nomer' type="number" placeholder='Номер карты' minLength={4} maxLength={16} />
                                                <div id='wrap'>
                                                    <input required type="number" placeholder='Месяц/Год' />
                                                    <input required type="password" placeholder=' СVC/CVV-код' />
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