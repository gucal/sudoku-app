import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Modal } from 'antd';
import Board from '../../components/Gamepage/Board.js';
import GameData from '../../data/game.json';

function Game() {
  const [cellsState, setCellsState] = useState(Array(81).fill(0));
  const [isLoading, setLoading] = useState(true);
  const [movesLeftState, setMovesLeft] = useState(0);
  const [history, setHistory] = useState([{}]);
  const [timer, setTimer] = useState(0);
  const [timerStop, setTimerStop] = useState(false);
  const [controlModalVisible, setControlModalVisible] = useState(false);
  const [controlError, setControlError] = useState(false);

  useEffect(() => {
    if (GameData) {
      const cells = generateInitialBoard(GameData.cells);
      setCellsState(cells);
      setLoading(false);
      setMovesLeft(81 - GameData.cells.length);
      setHistory([{ cells }]);
    }
  }, [GameData]);

  useEffect(() => {
    if (!timerStop)
      setTimeout(() => {
        setTimer(timer + 1);
      }, 1000);
  }, [timer]);

  const getInitialCellValue = (x, y, initData) => {
    const sqaureValues = initData;
    for (let i = x; i < 81; i++) {
      if (
        sqaureValues[i] &&
        sqaureValues[i].x === x &&
        sqaureValues[i].y === y
      ) {
        return sqaureValues[i].value;
      }
    }
    return null;
  };

  const generateInitialBoard = (gameData) => {
    const cells = [];
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        let value = getInitialCellValue(i, j, gameData);
        let isInitValue = value ? true : false;
        let cell = {
          x: i,
          y: j,
          block: 0,
          value: value,
          isInitValue: isInitValue,
          error: false,
        };
        cells.push(cell);
      }
    }
    return cells;
  };

  const handleClick = (e, i) => {
    let inputValue = e.target.value;
    let movesLeft = movesLeftState;
    let errorMessage = false;
    const historyVar = history.slice();
    const currentCells = historyVar.slice(historyVar.length - 1);
    if (isNaN(inputValue)) {
      e.target.value = '';
      return null;
    }
    if (inputValue.length > 1) {
      e.target.value = inputValue.charAt(inputValue.length - 1);
    }

    if (inputValue == 0) {
      e.target.value = '';
    }

    currentCells[0].cells[i].value = e.target.value;
    if (!checkLineValues(currentCells[0].cells, currentCells[0].cells[i])) {
      errorMessage = true;
    }
    if (!checkColumnValues(currentCells[0].cells, currentCells[0].cells[i])) {
      errorMessage = true;
    }
    if (!checkBlockValues(currentCells[0].cells, currentCells[0].cells[i])) {
      errorMessage = true;
    }

    if (e.target.value.length > 0) {
      movesLeft--;
    }
    if (e.target.value == '') {
      movesLeft++;
      errorMessage = false;
    }
    currentCells[0].cells[i].error = errorMessage;

    setHistory(historyVar.concat({ cells: currentCells[0].cells }));
    setMovesLeft(movesLeft);
  };

  function checkLineValues(cells, cell) {
    const lineStart = [0, 9, 18, 27, 36, 45, 54, 63, 72];

    let k = lineStart[cell.x];
    for (let i = k; i < 9 + k; i++) {
      if (cells[i].y !== cell.y && cells[i].value == cell.value) {
        return false;
      }
    }
    return true;
  }

  function checkColumnValues(cells, cell) {
    const lineStart = [0, 9, 18, 27, 36, 45, 54, 63, 72];

    for (let i = 0; i < 9; i++) {
      let objCell = cells[lineStart[i] + cell.y];
      if (objCell.x != cell.x && objCell.value == cell.value) {
        return false;
      }
    }
    return true;
  }

  function checkBlockValues(cells, cell) {
    const lineStart = [0, 3, 6, 27, 30, 33, 54, 57, 60];

    let startIndex = lineStart[0];
    if (cell.x < 3 && cell.y > 2 && cell.y < 6) {
      startIndex = lineStart[1];
    } else if (cell.x < 3 && cell.y > 5) {
      startIndex = lineStart[2];
    } else if (cell.x > 2 && cell.x < 6 && cell.y < 3) {
      startIndex = lineStart[3];
    } else if (cell.x > 2 && cell.x < 6 && cell.y > 2 && cell.y < 6) {
      startIndex = lineStart[4];
    } else if (cell.x > 2 && cell.x < 6 && cell.y > 5) {
      startIndex = lineStart[5];
    } else if (cell.x > 5 && cell.y < 3) {
      startIndex = lineStart[6];
    } else if (cell.x > 5 && cell.y > 2 && cell.y < 6) {
      startIndex = lineStart[7];
    } else if (cell.x > 5 && cell.y > 5) {
      startIndex = lineStart[8];
    }

    let increment = 0;
    for (let i = 0; i < 9; i++) {
      if (i > 2 && i < 6) {
        increment = 6;
      } else if (i > 5) {
        increment = 12;
      }
      const sq = cells[startIndex + i + increment];
      if (sq.x != cell.x && sq.y != cell.y && sq.value == cell.value) {
        return false;
      }
    }
    return true;
  }

  const errorControl = () => {
    for (let index = 0; index < cellsState.length; index++) {
      if (cellsState[index].error) {
        setControlError(true);
        setControlModalVisible(true);
        setTimerStop(false);
        return null;
      }
      setTimerStop(true);
      setControlError(false);
      setControlModalVisible(true);
    }
  };

  return (
    <div className="wrapper">
      <Row gutter={[16, 32]}>
        <Col span={24}>
          <div className="game-info">
            <div>{movesLeftState == 0 ? 'Kazandınız!!!' : ''}</div>
            <ol>{/*-- --*/}</ol>
          </div>
        </Col>
        <Col span={24}>
          <div className="game">
            <div className="game-board">
              {isLoading ? (
                'loading...'
              ) : (
                <Board
                  cells={cellsState}
                  onChange={(e, i) => handleClick(e, i)}
                />
              )}
            </div>
          </div>
        </Col>
        <Col span={24}>
          <Row gutter={8}>
            <Col span={12}>
              <div className="timer">
                {`${parseInt(timer / 60)} dakika ${timer % 60} saniye`}
              </div>
            </Col>
            <Col span={12}>
              <Button
                onClick={() => errorControl()}
                block
                size="large"
                type="primary"
              >
                Kontrol Et
              </Button>
            </Col>
            <Modal
              title="Sudoku Kontrolu"
              onCancel={() => setControlModalVisible(false)}
              footer={false}
              visible={controlModalVisible}
            >
              {controlError ? 'HATA!' : 'HATAYOK'}
            </Modal>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Game;
