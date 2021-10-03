import React from 'react';
import { Row, Col } from 'antd';
import Head from 'next/head';
import GameCard from '../../components/Gamelist/GameCard';

function GameList() {
  const Games = [1, 2, 3];

  return (
    <div className="wrapper">
      <Head>
        <title>Bulmacalar</title>
      </Head>
      <div className="card">
        <Row className="container">
          {Games.map((game, index) => (
            <Col key={index} span={8}>
              <GameCard gameNumber={game} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default GameList;
