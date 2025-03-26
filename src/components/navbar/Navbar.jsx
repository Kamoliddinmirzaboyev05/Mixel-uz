import React, { useState } from 'react'
import "./Navbar.css"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Navbar() {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <>
            <div className="navTop">
                <div className="container">
                    <div className="NavTopLeft">
                        <div>
                            <p>
                                Ташкент
                            </p>
                        </div>
                        <div>
                            <p>Наши магазины</p>
                            <p>B2B продажи</p>
                            <p>Покупка в рассрочку</p>
                            <p>Способы оплаты</p>
                            <p>Гарантия на товары</p>
                        </div>
                    </div>
                    <div className="NavbarTopRight">
                        <div>
                            <p>
                                +998 95 123 55 88
                            </p>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
            <nav>
                <div className="container">
                    <div className="logo">
                        <div>
                            <img src="/public/imgs/logo.svg" alt="" />
                        </div>
                        <div>
                            <h2>
                                MIXEL.UZ
                            </h2>
                        </div>
                    </div>
                    <div className="NavSearch">
                        <div>
                            <p>
                                Все категории
                            </p>
                        </div>
                        <div>
                            <input type="text" placeholder='Телефоны и бытовая' />
                        </div>
                        <div className='mikrafon'>
                            <i class="fa-solid fa-microphone"></i>
                        </div>
                        <div>
                            <button>
                                <div>
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </div>
                                <div>
                                    <p>Поиск</p>
                                </div>
                            </button>
                        </div>

                    </div>
                    <div className="NavIcon">
                        <div>
                            <i class="fa-regular fa-user"></i><br />
                            <p>Войти</p>
                        </div>
                        <div>
                            <i class="fa-regular fa-user"></i><br />
                            <p>Сравнение</p>
                        </div>
                        <div>
                            <i class="fa-regular fa-user"></i><br />
                            <p>Избранное</p>
                        </div>
                        <div>
                            <i class="fa-regular fa-user"></i><br />
                            <p>Корзина</p>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="navCategori">
                <div className="container">
                    <div className='MenuCategori'>
                        <button>
                            <div>
                                <i class="fa-solid fa-list"></i>
                            </div>
                            <div>
                                <p>
                                    Категории
                                </p>
                            </div>
                        </button>
                    </div>
                    <div className='CategoryTovar'>
                        <p>Наши магазины</p>
                        <p>Моноблоки</p>
                        <p>Телефоны, планшеты</p>
                        <p>Ноутбуки</p>
                        <p>Комплектующие</p>
                        <p>Сетевое оборудование</p>
                        <p>Оргтехника</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar