import React from 'react';
import { Row, Col } from 'antd';
import GameCard from '../../components/Gamelist/GameCard';

function GameList() {
  return (
    <div className="wrapper">
      <Row className="container">
        <Col span={8}>
          <GameCard />
        </Col>
      </Row>
    </div>
  );
}

export default GameList;
