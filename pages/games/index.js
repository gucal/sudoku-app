import React from 'react';
import { Row, Col } from 'antd';
import Head from 'next/head';
import Games from '../../data/game';
import GameCard from '../../components/Gamelist/GameCard';

function GameList() {
  return (
    <div className="wrapper">
      <Head>
        <title>Bulmacalar</title>
      </Head>
      <div
        style={{ display: 'flex', justifyContent: 'center' }}
        className="card"
      >
        <Row gutter={[32, 32]} className="container">
          {Games.map((game, index) => (
            <Col key={index} xs={24} lg={8}>
              <GameCard diff={game.diff} gameNumber={index + 1} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default GameList;
