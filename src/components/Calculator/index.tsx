import React, { useState } from 'react';
import Button from './Button';
import { operations } from '../../utils/operations';
import { Container, Formula, Header, NumPad, Title } from './style';

interface Display {
  displayValue: string;
  clearDisplay: boolean;
  operation: string | null;
  values: number[];
  current: number;
}

const initialState: Display = {
  displayValue: '',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}

const Calculator: React.FC = () => {
  const [display, setDisplay] = useState(initialState);

  const ClearMemory = () => {
    setDisplay({...initialState});
  }

  const AddDigit = (n: string) => {
    if (n === '.' && display.displayValue.includes('.')) return;
    const clearDisplay = display.displayValue === '0'
        || display.clearDisplay;

    const currentValue = clearDisplay ? '' : display.displayValue;
    const displayValue = currentValue + n;

    if (n !== '.') {
        const currentIndex = display.current;
        const newValue = parseFloat(displayValue);
        const values = [...display.values];
        values[currentIndex] = newValue;
        setDisplay({...display, displayValue, values, clearDisplay: false });
    }
  }


  const SetOperations = (operation: string) =>     {
    if (display.current === 0) {
        setDisplay({...display, operation, current: 1, clearDisplay: true });
    } else {
        const equals = operation === '=';
        const currentOperation = display.operation;

        const values = [...display.values];
        values[0] = operations(currentOperation, values[0], values[1]);
        values[1] = 0;
        setDisplay({
            displayValue: `${values[0]}`,
            operation: equals ? null : operation,
            current: equals ? 0 : 1,
            clearDisplay: !equals,
            values
        });
    }
  };

  return (
    <Container>
      <Header>
        <Title>{display.operation}</Title>
        <Formula>{display.displayValue}</Formula>
      </Header>
      <NumPad>
        <Button label={'AC'} onClick={ClearMemory} math/>
        <Button label={'×'} onClick={SetOperations} math/>
        <Button label={'+'} onClick={SetOperations} math/>
        <Button label={'÷'} onClick={SetOperations} math/>
        <Button label={'7'} onClick={AddDigit}/>
        <Button label={'8'} onClick={AddDigit}/>
        <Button label={'9'} onClick={AddDigit}/>
        <Button label={'−'} onClick={SetOperations} math/>
        <Button label={'4'} onClick={AddDigit}/>
        <Button label={'5'} onClick={AddDigit}/>
        <Button label={'6'} onClick={AddDigit}/>
        <Button label={'='} onClick={SetOperations} math height={3}/>
        <Button label={'1'} onClick={AddDigit}/>
        <Button label={'2'} onClick={AddDigit}/>
        <Button label={'3'} onClick={AddDigit}/>
        <Button label={'0'} onClick={AddDigit}/>
        <Button label={'.'} onClick={AddDigit} width={2}/>
      </NumPad>
    </Container>
  );
};

export default Calculator;