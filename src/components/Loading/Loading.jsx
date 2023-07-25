import React, { memo } from 'react';
import { Puff } from 'react-loader-spinner';

const Loading = () => {
    return (
        <Puff
            height="80"
            width="80"
            radius={1}
            color="white"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    );
};

export default memo(Loading);
