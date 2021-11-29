import React, { useContext } from 'react';
import { DetailContext } from '../../context/DetailContext'

SelectSize.propTypes = {

};

function SelectSize() {
    const { size, rdSize, onClickSize } = useContext(DetailContext);

    const onHandleChange = (e) => {
        if (onClickSize)
            onClickSize(e.target.value)
    }

    return (
        <div>
            {
                size && size.map((size, index) => (
                    <div className="d-inline-block" key={index}>
                        <input type="radio"
                            className="btn-check"
                            name="size"
                            id={"rdSize" + size}
                            value={size}
                            onChange={onHandleChange}
                            checked={rdSize === size} />
                        <label className="btn btn-outline-primary mr-3 lb-size" htmlFor={"rdSize" + size}>{size}</label>
                    </div>
                ))
            }

        </div>
    );
}

export default SelectSize;