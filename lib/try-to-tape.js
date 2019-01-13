'use strict';

const tryToCatch = require('try-to-catch');
const currify = require('currify');

const wrapper = (promise) => async (t, ...args) => {
    const [e] = await tryToCatch(promise, t, ...args);
    
    if (!e)
        return;
    
    t.fail(e.message);
    t.end();
};

const set = currify((wrapper, tape, str, promise) => {
    return tape(str, wrapper(promise));
});

module.exports = (tape) => {
    check(tape);
    
    const fn = set(wrapper, tape);
    
    fn.only = set(wrapper, tape.only);
    fn.skip = set(wrapper, tape.skip);
    
    return fn;
};

function check(tape) {
    if (typeof tape !== 'function')
        throw Error('tape should be a function!');
}

