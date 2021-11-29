import React, { createContext, useState } from 'react';

export const DetailContext = createContext();

const DetailContextProvider = (props) => {
    const [color] = useState(["Trắng", "Đen", "Đỏ"]);
    const [rdColor, setRDColor] = useState("");

    const [size] = useState(['S', 'M', 'L']);
    const [rdSize, setRDSize] = useState();

    const [count, setCount] = useState(1)

    const onClickColor = (value) => {
        setRDColor(value)
    }

    const onClickSize = (value) => {
        setRDSize(value)
    }

    const increaseCount = (value) => {
        setCount(count + 1)
    }


    const decreaseCount = (value) => {
        setCount(count - 1)
    }

    const onChangeCount = (value, item) => {
        setCount(Number(value))
    }


    return (
        <DetailContext.Provider
            value={{
                color,
                rdColor,
                onClickColor,
                size,
                rdSize,
                onClickSize,
                count,
                increaseCount,
                decreaseCount,
                onChangeCount
            }}>
            {props.children}
        </DetailContext.Provider>
    );
}

export default DetailContextProvider;
