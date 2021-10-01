import React from 'react';
import { Card } from 'antd';
import Link from 'next/link';
const { Meta } = Card;

function GameCard({ gameNumber }) {
  return (
    <Link href={`/gamepage/${gameNumber}`}>
      <a>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src="https://cdn6.f-cdn.com/contestentries/1495191/29595932/5ccbbc32d8b58_thumb900.jpg"
            />
          }
        >
          <Meta title={`Seviye ${gameNumber}`} />
        </Card>
      </a>
    </Link>
  );
}
export default GameCard;
