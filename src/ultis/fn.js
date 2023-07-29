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

export const formatSecond = (seconds, form = 'mm:ss') => {
    return moment.utc(seconds * 1000).format(form);
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
