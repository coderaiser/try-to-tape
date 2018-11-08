# Try to Tape [![NPM version][NPMIMGURL]][NPMURL] [![Dependency Status][DependencyStatusIMGURL]][DependencyStatusURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL] [![Coverage Status][CoverageIMGURL]][CoverageURL]

[NPMIMGURL]:                https://img.shields.io/npm/v/try-to-tape.svg?style=flat&longCache=true
[BuildStatusIMGURL]:        https://img.shields.io/travis/coderaiser/try-to-tape/master.svg?style=flat&longCache=true
[DependencyStatusIMGURL]:   https://img.shields.io/david/coderaiser/try-to-tape.svg?style=flat&longCache=true
[NPMURL]:                   https://npmjs.org/package/try-to-tape "npm"
[BuildStatusURL]:           https://travis-ci.org/coderaiser/try-to-tape  "Build Status"
[DependencyStatusURL]:      https://david-dm.org/coderaiser/try-to-tape "Dependency Status"

[CoverageURL]:              https://coveralls.io/github/coderaiser/try-to-tape?branch=master
[CoverageIMGURL]:           https://coveralls.io/repos/coderaiser/try-to-tape/badge.svg?branch=master&service=github

Wrap `tape` `async` functions and show error on reject.

## Install

```
npm i try-to-tape
```

## Example

```js
const tryToTape = require('try-to-tape');
const tape = tryToTape(require('tape'));

test('lib: arguments', async (t) => {
    throw Error('hello');
    // will call t.fail with an error
    // will call t.end
    
    t.end();
});
```

## Related

- [try-catch](https://github.com/coderaiser/try-catch "TryCatch") - functional try-catch wrapper.
- [try-to-catch](https://github.com/coderaiser/try-to-catch "TryToCatch") - functional try-catch wrapper for promises.

## License

MIT

