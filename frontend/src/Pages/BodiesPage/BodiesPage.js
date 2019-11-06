import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import chunk from 'lodash.chunk';
import {
  Card,
  Jumbotron,
  Row,
  Col,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Button
} from 'reactstrap';
import InfiniteScroll from 'react-infinite-scroll-component';
import Seo from "../../Seo";

function BodiesPage() {
  const [girls, setGirls] = useState([]);
  const [page, setPage] = useState(0);

  const fetchGirls = (page) => {
    fetch('/api/girls?page=' + page)
      .then(res => res.json())
      .then(data => setGirls([...girls, ...data.content]))
      .catch(err => console.log('err', err))
  };

  useEffect(() => {
    fetchGirls(page);
  }, []);

  const refresh = () => console.log('poiint')

  const chunks = chunk(girls, 4);
  return (
      [
        <Seo title={`Проститутки Индивидуалки Шлюхи Казань`} description={`Каталог лучших проституток и индивидуалок Казани. Лучшие секс и интим услуги в Казани, фотографии проверены.`} />,
        <div id='scrollableDiv' className='mt-2' id>
          <InfiniteScroll
              dataLength={girls.length} //This is important field to render the next data
              next={() => {
                setPage(page + 1);
                fetchGirls(page + 1);
              }}
              hasMore={true}
              loader={<h4>Загрузка...</h4>}
              scrollableTarget="scrollableDiv"
          >
            {chunks.map(items => (
                <Row>
                  {items.map(item => (
                      <Col className='mb-3' lg={3}>
                        <NavLink className='no-decoration' to={`/girl/${item.id}`}>
                          <Card>
                            <CardImg className='card__img' top width src={`https://dosugkzn.xyz/${item.avatar}`} alt="Card image cap" />
                            <CardBody>
                              <CardTitle>{item.name}</CardTitle>
                              <CardSubtitle className='mb-2 blured-text'>{item.phoneNumber}</CardSubtitle>
                              <CardText>
                                <div>Грудь: {item.boobsSize} размер</div>
                                <div>Рост: {item.height} см</div>
                                <div><strong>Цена за час: {item.priceInOne} см</strong></div>
                                <div><strong>Цена за 2 часa: {item.priceInTwo} см</strong></div>
                                <div><strong>Цена за ночь: {item.priceInNight} см</strong></div>
                              </CardText>
                              <Button>Смотреть</Button>
                            </CardBody>
                          </Card>
                        </NavLink>
                      </Col>
                  ))}
                </Row>
            ))}
          </InfiniteScroll>
        </div>
      ]
  );
}

export default BodiesPage;
