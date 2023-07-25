import React from 'react';

const Button = ({ text, style, active }) => {
    return (
        <button
            type="button"
            className={
                style
                    ? style
                    : `${
                          active ? `bg-hightlight-100` : 'bg-transparent'
                      } text-xs text-white py-1 px-4 mr-3 rounded-l-full rounded-r-full uppercase border border-main hover:opacity-90`
            }
        >
            {text}
        </button>
    );
};

export default Button;
