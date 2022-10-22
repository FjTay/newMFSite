const ReduceTag = (data, key) => {
    const set = new Set();
    for (const obj of data) {
        const value = obj.data[key];
        if (Array.isArray(value)) {
            value.forEach(val => set.add(val));
        } else {
            set.add(obj.data[key]);
        }
    }
    return [...set];
}

export default ReduceTag;