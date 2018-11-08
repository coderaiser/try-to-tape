'use strict';

const test = require('tape');
const diff = require('sinon-called-with-diff');
const sinon = diff(require('sinon'));
const tryCatch = require('try-catch');

const tryToTape = require('..');

test('try-to-tape: no args', (t) => {
    const [e] = tryCatch(tryToTape);
    
    t.equals(e.message, 'tape should be a function!', 'should throw');
    t.end();
});

test('try-to-tape: tape', async (t) => {
    const tape = sinon.stub();
    
    const test = tryToTape(tape);
    const promise = async () => {
        throw Error('some error');
    };
    
    test('hello world', promise);
    
    t.ok(tape.calledWith('hello world', () => {}), 'should call tape');
    t.end();
});

test('try-to-tape: tape: rejects: fail', async (t) => {
    const fail = sinon.stub();
    const end = sinon.stub();
    const tape = async (msg, promise) => {
        const t = {
            fail,
            end,
        };
        
        await promise(t);
    };
    
    const test = tryToTape(tape);
    const promise = async () => {
        throw Error('some error');
    };
    
    await test('hello world', promise);
    
    t.ok(fail.calledWith('some error'), 'should call fail');
    t.end();
});

test('try-to-tape: tape: rejects: end', async (t) => {
    const fail = sinon.stub();
    const end = sinon.stub();
    const tape = async (msg, promise) => {
        const t = {
            fail,
            end,
        };
        
        await promise(t);
    };
    
    const test = tryToTape(tape);
    const promise = async () => {
        throw Error('some error');
    };
    
    await test('hello world', promise);
    
    t.ok(end.calledWith(), 'should call end');
    t.end();
});

test('try-to-tape: tape: resolves: fail', async (t) => {
    const fail = sinon.stub();
    const end = sinon.stub();
    const tape = async (msg, promise) => {
        const t = {
            fail,
            end,
        };
        
        await promise(t);
    };
    
    const test = tryToTape(tape);
    const promise = async () => {};
    
    await test('hello world', promise);
    
    t.notOk(fail.called, 'should not call fail');
    t.end();
});

test('try-to-tape: tape: resolves: end', async (t) => {
    const fail = sinon.stub();
    const end = sinon.stub();
    const tape = async (msg, promise) => {
        const t = {
            fail,
            end,
        };
        
        await promise(t);
    };
    
    const test = tryToTape(tape);
    const promise = async () => {};
    
    await test('hello world', promise);
    
    t.notOk(end.called, 'should not call fail');
    t.end();
});
