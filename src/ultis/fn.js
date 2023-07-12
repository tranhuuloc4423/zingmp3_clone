import moment from 'moment';
export const getArrSlider = (start, end, number) => {
    const limit = start > end ? number : end;
    let output = [];
    for (let i = start; i <= limit; i++) {
        output.push(i);
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
