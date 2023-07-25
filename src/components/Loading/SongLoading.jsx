import { RotatingLines } from 'react-loader-spinner';

const SongLoading = ({ size }) => {
    return (
        <RotatingLines
            strokeColor="white"
            strokeWidth="5"
            animationDuration="1"
            width={size}
            visible={true}
        />
    );
};

export default SongLoading;
