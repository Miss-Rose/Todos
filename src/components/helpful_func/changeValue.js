
const changeValue = (id, state, strValue) => {
    const index = state.findIndex(i =>
        i.id === id);
    const oldItem = state[index];
    const newValue = !oldItem[strValue];
    const newItem = {...state[index], [strValue]: newValue};
    const initialList = [
        ...state.slice(0, index),
        newItem,
        ...state.slice(index + 1)
    ];
    return {initialList};
};

export default changeValue;