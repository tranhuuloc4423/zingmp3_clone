import moment from 'moment';
export const getArrSlider = (start, end, number) => {
    const limit = start > end ? number : end;
    let output = [];
    for (let i = start; i <= limit; i++) {
        output.push(i); // 0 1 2
    }
    if (start > end) {
        for (let i = 0; i <= end; i++) {
            output.push(i);
        }
    }
    return output;
};

export const formatSecond = (seconds) => {
    return moment.utc(seconds * 1000).format('HH:mm:ss');
};

export const handleStyleProgress = (ref, value) => {
    ref.current.style = `right: ${value}%`;
};

export const stringsLimit = (str, max) => {
    const array = str?.split(' ');
    let output = '';
    for (let i = 0; i < max; i++) {
        if (array[i]) {
            output += ` ${array[i]}`;
        }
    }
    return array.length >= max ? `${output}...` : output;
};

export const formatNumber = (input, numberFixed) => {
    if (input) {
        if (input >= 1000000) {
            return `${(input / 1000000).toFixed(numberFixed)}M`;
        } else if (input >= 1000) {
            return `${(input / 1000).toFixed(numberFixed)}K`;
        } else {
            return `${input}`;
        }
    }
};
