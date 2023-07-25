import { Audio } from 'react-loader-spinner';

const AudioLoading = ({ size, color = 'white' }) => {
    return (
        <Audio
            height={size}
            width={size}
            color={color}
            ariaLabel="audio-loading"
            wrapperStyle={{}}
            wrapperClass="wrapper-class"
            visible={true}
        />
    );
};

export default AudioLoading;
