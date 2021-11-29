import React, { useContext } from 'react';
import classNames from 'classnames';

import { DetailContext } from '../../context/DetailContext'

function SelectColor() {
    const { color, rdColor, onClickColor } = useContext(DetailContext);

    const handleSelectColor = (e) => {
        if (onClickColor)
            onClickColor(e.target.value)
    }

    return (
        <div>
            {
                color && color.map((color, index) => (
                    <div className="d-inline-block" key={index}>
                        <label className={classNames('btn mr-3 lb-color', {
                            'btn-white': color === "Trắng",
                            'btn-black': color === "Đen",
                            'btn-red': color === "Đỏ"
                        })}
                            htmlFor={"rdColor" + index}>
                        </label>
                        <br />
                        <input type="radio"
                            className="btn-check ml-3"
                            name="color"
                            id={"rdColor" + index}
                            value={color}
                            onChange={handleSelectColor}
                            checked={rdColor === color}
                        />
                    </div>
                ))
            }

        </div>
    );
}

export default SelectColor;