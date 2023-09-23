<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Stack

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Stack data structure.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import stack from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-stack@esm/index.mjs';
```

#### stack()

Returns a `Stack` instance.

```javascript
var s = stack();
// returns <Stack>
```

##### s.clear()

Clears a stack.

```javascript
var s = stack();
// returns <Stack>

// Add values to the stack:
s.push( 'foo' ).push( 'bar' );

// Peek at the top value:
var v = s.first();
// returns 'bar'

// Examine the stack length:
var len = s.length;
// returns 2

// Clear all stack items:
s.clear();

// Peek at the top value:
v = s.first();
// returns undefined

// Examine the stack length:
len = s.length;
// returns 0
```

##### s.first()

Returns the top stack value (i.e., the value which is "first-out"). If the stack is currently empty, the returned value is `undefined`.

```javascript
var s = stack();
// returns <Stack>

// Add values to the stack:
s.push( 'foo' ).push( 'bar' );

// Peek at the top value:
var v = s.first();
// returns 'bar'
```

##### s.iterator()

Returns an iterator for iterating over a stack. If an environment supports `Symbol.iterator`, the returned iterator is iterable.

```javascript
var s = stack();

// Add values to the stack:
s.push( 'foo' ).push( 'bar' );

// Create an iterator:
var it = s.iterator();

// Iterate over the stack...
var v = it.next().value;
// returns 'bar'

v = it.next().value;
// returns 'foo'

var bool = it.next().done;
// returns true
```

**Note**: in order to prevent confusion arising from stack mutation during iteration, a returned iterator **always** iterates over a stack "snapshot", which is defined as the list of stack elements at the time of `s.iterator()` invocation.

##### s.last()

Returns the bottom stack value (i.e., the value which is "last-out"). If the stack is currently empty, the returned value is `undefined`.

```javascript
var s = stack();
// returns <Stack>

// Add values to the stack:
s.push( 'foo' ).push( 'bar' );

// Peek at the bottom value:
var v = s.last();
// returns 'foo'
```

##### s.length

Stack length.

```javascript
var s = stack();

// Examine the initial stack length:
var len = s.length;
// returns 0

// Add values to the stack:
s.push( 'foo' ).push( 'bar' );

// Retrieve the current stack length:
len = s.length;
// returns 2
```

##### s.pop()

Removes a value from the stack. If the stack is currently empty, the returned value is `undefined`.

```javascript
var s = stack();

// Add values to the stack:
s.push( 'foo' ).push( 'bar' );

// Remove the top value:
var v = s.pop();
// returns 'bar'

// Add a new value to the stack:
s.push( 'beep' );

// Remove the top value:
v = s.pop();
// returns 'beep'
```

##### s.push( value )

Adds a value to the stack.

```javascript
var s = stack();

// Add values to the stack:
s.push( 'foo' ).push( 'bar' );

// Remove the top value:
var v = s.pop();
// returns 'bar'

// Add a new value to the stack:
s.push( 'beep' );

// Remove the top value:
v = s.pop();
// returns 'beep'
```

##### s.toArray()

Returns an array of stack values.

```javascript
var s = stack();

// Add values to the stack:
s.push( 'foo' ).push( 'bar' );

// Get an array of stack values:
var vals = s.toArray();
// returns [ 'bar', 'foo' ]
```

**Note**: the order of the returned array is reverse stack insertion order (i.e., the "newest" stack elements come before the "oldest" stack elements).

##### s.toJSON()

Serializes a stack as JSON.

```javascript
var s = stack();

// Add values to the stack:
s.push( 'foo' ).push( 'bar' );

// Serialize to JSON:
var o = s.toJSON();
// returns { 'type': 'stack', 'data': [ 'bar', 'foo' ] }
```

**Note**: `JSON.stringify()` implicitly calls this method when stringifying a stack instance.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   A stack is also known as a Last-In-First-Out (LIFO) queue.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

<!-- eslint-disable stdlib/no-redeclare -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import Stack from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-stack@esm/index.mjs';

var stack;
var iter;
var len;
var v;
var i;

// Create a new stack:
stack = new Stack();

// Add some values to the stack:
stack.push( 'foo' );
stack.push( 'bar' );
stack.push( 'beep' );
stack.push( 'boop' );

// Peek at the top and bottom stack values:
v = stack.first();
// returns 'boop'

v = stack.last();
// returns 'foo'

// Inspect the stack length:
len = stack.length;
// returns 4

// Remove the top value:
v = stack.pop();
// returns 'boop'

// Inspect the stack length:
len = stack.length;
// returns 3

// Iterate over the stack:
iter = stack.iterator();
for ( i = 0; i < len; i++ ) {
    console.log( 'Stack value #%d: %s', i+1, iter.next().value );
}

// Clear the stack:
stack.clear();

// Inspect the stack length:
len = stack.length;
// returns 0

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-fifo`][@stdlib/utils/fifo]</span><span class="delimiter">: </span><span class="description">first-in-first-out (FIFO) queue.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-stack.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-stack

[test-image]: https://github.com/stdlib-js/utils-stack/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/utils-stack/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-stack/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-stack?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-stack.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-stack/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-stack/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-stack/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-stack/tree/esm
[branches-url]: https://github.com/stdlib-js/utils-stack/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-stack/main/LICENSE

<!-- <related-links> -->

[@stdlib/utils/fifo]: https://github.com/stdlib-js/utils-fifo/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
