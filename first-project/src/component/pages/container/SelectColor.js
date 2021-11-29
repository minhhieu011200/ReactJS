import React, { Component } from 'react';
import classNames from 'classnames';

import '../../css/product.css'

class SelectColor extends Component {
    handleSelectColor = (e) => {
        this.props.onClickColor(e.target.value)
    }
    render() {
        return (
            <div>
                <label className={classNames('btn mr-3 lb-color', {
                    'btn-white': this.props.color === "Trắng",
                    'btn-black': this.props.color === "Đen",
                    'btn-red': this.props.color === "Đỏ"
                })}
                    htmlFor={"rdColor" + this.props.index}>
                </label>
                <br />
                <input type="radio"
                    className="btn-check ml-3"
                    name="color"
                    id={"rdColor" + this.props.index}
                    value={this.props.color}
                    onChange={this.handleSelectColor}
                    checked={this.props.rdColor === this.props.color}
                />
            </div>
        )

    }


}

export default SelectColor