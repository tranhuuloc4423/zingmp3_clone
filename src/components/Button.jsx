import React from 'react';

const Button = ({ styles, active, width = '', children, handleClick, addStyles }) => {
    return (
        <button
            type="button"
            onClick={handleClick}
            className={`${
                styles
                    ? styles
                    : `${
                          active ? `bg-hightlight-100` : 'bg-transparent'
                      } ${width} ${addStyles} text-xs text-white py-1 px-4 mr-3 rounded-l-full rounded-r-full uppercase border border-main hover:opacity-90`
            }`}
        >
            {children}
        </button>
    );
};

export default Button;
