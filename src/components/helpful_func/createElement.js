let nextId = 3;

const createElement = (text) => {
    return {
        id: ++nextId,
        title: text,
        important: false,
        done: false
    };
};

export default createElement;