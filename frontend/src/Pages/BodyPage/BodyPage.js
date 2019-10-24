import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { NavLink } from "react-router-dom";
import {
  Jumbotron,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";

function BodyPage(props) {
  const [girl, setGirl] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch('/api/girls/' + id + '?page=2')
      .then(res => res.json())
      .then(data => setGirl(data))
      .catch(err => console.error(err))
  }, []);


  return (
  girl &&
    <div className='mt-2'>
      <Breadcrumb tag="nav" listTag="div">
        <NavLink className='breadcrumb-item' tag="a" to="/">Главная</NavLink>
        <BreadcrumbItem tag="a">{girl.name}</BreadcrumbItem>
      </Breadcrumb>
      <Jumbotron className='mt-2'>
        <h1 className="display-3">{girl.name} <small>{girl.phoneNumber}</small></h1>
        <ul>
          <li>
            Грудь: {girl.boobsSize} размер
          </li>
          <li>
            Рост: {girl.height} см
          </li>
          <li>
            Вес: {girl.weight} кг
          </li>
        </ul>
        <div className='d-flex justify-content-between'>
          <ul className='w-50'>
            <li>
              Цена за час (аппартаменты): {girl.priceInOne}
            </li>
            <li>
              Цена за 2 часа (аппартаменты): {girl.priceInTwo}
            </li>
            <li>
              Цена за ночь (аппартаменты): {girl.priceInNight}
            </li>
          </ul>

          <ul className='w-50'>
            <li>
              Цена за час (аппартаменты): {girl.priceOutOne}
            </li>
            <li>
              Цена за 2 часа (аппартаменты): {girl.priceOutTwo}
            </li>
            <li>
              Цена за ночь (аппартаменты): {girl.priceOutNight}
            </li>
          </ul>
        </div>
        <p className="lead">{girl.description}</p>
        <div>
          {girl.photos.map(photo => <img src={'https://dosugkzn.xyz' + photo} alt=""/>)}
        </div>
      </Jumbotron>
    </div>
  );
}

export default BodyPage;
