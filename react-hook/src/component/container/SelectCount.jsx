import React, { useContext } from 'react';

import {
    ButtonGroup, Button
} from 'reactstrap';

import { DetailContext } from '../../context/DetailContext'


function SelectCount(item) {
    const { count, decreaseCount, increaseCount, onChangeCount } = useContext(DetailContext);

    const onHandelDecreaseCount = () => {
        if (count > 1) {
            decreaseCount(item)
        }
    }

    const onHandelIncreaseCount = () => {
        if (count < 20) {
            increaseCount(item)
        }
    }

    const onHandleChangeCount = (e) => {
        const value = e.target.value
        if (!Number.isNaN(value) && Number(value) > 0 && Number(value) < 21) {
            onChangeCount(value, item);
        }
    }
    return (
        <ButtonGroup aria-label="Basic example" className="mb-4">
            <Button className="btn-info btn-gradient" onClick={onHandelDecreaseCount} >-</Button>
            <input className="input-number text-center count" value={count} onChange={onHandleChangeCount} type="text" />
            <Button className="btn-info btn-gradient" onClick={onHandelIncreaseCount}>+</Button>
        </ButtonGroup>
    );
}

export default SelectCount;