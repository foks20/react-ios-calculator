import React from "react";
import { v4 as uuidv4 } from 'uuid';

const Footer = ({ ...props }) => {
    const {
        keypadFooter,
        handleButtonClick,
    } = props;

    
    return (keypadFooter.map((elem, i) =>
        elem &&
        <>
            {(i === 0) &&
                <>
                    <td>
                        <button
                            className={'zero-btn-lhs'}
                            style={{ border: "none", padding: "none" }}
                            onClick={(e) => handleButtonClick(e)}
                        >{elem}</button>
                    </td>
                    <td>
                        <button
                            className={'zero-btn-rhs'}
                            style={{ border: "none", padding: "none" }}
                            onClick={(e) => handleButtonClick(e)}
                        >{elem}</button>
                    </td>
                </>
            }
            {(i === 2) &&
                <td>
                    <button
                        className={'light-gray-btn'}
                        onClick={(e) => handleButtonClick(e)}
                    >{elem}</button>
                </td>
            }
            {(i === 3) &&
                <td>

                    <button
                        className={'orange-btn'}
                        onClick={(e) => handleButtonClick(e)}
                    >{elem}</button>
                </td>
            }
        </>
    ));
}

export default Footer;