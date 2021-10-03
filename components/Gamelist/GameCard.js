import React from 'react';
import { Card } from 'antd';
import Link from 'next/link';

const { Meta } = Card;

function GameCard({ diff, gameNumber }) {
  let difficulty = '';
  if (diff === 1) {
    difficulty = 'Kolay';
  } else if (diff === 2) {
    difficulty = 'Orta';
  } else if (diff === 3) {
    difficulty = 'Zor';
  }

  return (
    <Link href={`/game/${gameNumber}`}>
      <a>
        <Card
          style={{ borderRadius: 10 }}
          hoverable
          cover={
            <img
              style={{ padding: 5, borderRadius: 10 }}
              alt="example"
              src="https://cdn.dribbble.com/users/220497/screenshots/9446342/sudoku_4x.png"
            />
          }
        >
          <Meta title={`Seviye ${gameNumber}`} description={`${difficulty}`} />
        </Card>
      </a>
    </Link>
  );
}
export default GameCard;
