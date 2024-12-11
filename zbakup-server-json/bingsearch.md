Bing search results for "ErrorBoundary.tsx:27 Uncaught error: Cannot convert object to primitive value React"

The error "Cannot convert object to primitive value" typically occurs when an object is being used where a primitive value is expected, such as in string concatenation or arithmetic operations. This can happen in React when rendering components or handling errors.

Here are some steps you can take to debug and fix the issue:

1. **Check the Error Boundary Component**: Ensure that the `ErrorBoundary` component and its `componentDidCatch` method are correctly implemented.

2. **Identify the Object Causing the Error**: The error stack trace indicates that the issue occurs in the `RenderedRoute` and `Routes` components from `react-router-dom`. Check if any of these components are passing objects where primitive values are expected.

3. **Inspect State and Props**: Verify if there are state or prop values that are objects being converted to strings or used in arithmetic operations.

4. **Use JSON.stringify**: If you need to convert an object to a string for debugging or display purposes, use `JSON.stringify`.

For more detailed information on handling this error in React, you can refer to the following resources:
- [React error handling with react-error-boundary](https://blog.logrocket.com/react-error-handling-react-error-boundary/)
- [Error Boundaries – React](https://legacy.reactjs.org/docs/error-boundaries.html)

If you need further assistance, please provide more details on the code causing the issue.

chunk-DRWLMN53.js?v=2216c878:133 Uncaught TypeError: Cannot convert object to primitive value
    at String (<anonymous>)
    at chunk-DRWLMN53.js?v=2216c878:133:22
    at Array.map (<anonymous>)
    at printWarning (chunk-DRWLMN53.js?v=2216c878:132:39)
    at error (chunk-DRWLMN53.js?v=2216c878:120:15)
    at lazyInitializer (chunk-DRWLMN53.js?v=2216c878:898:17)
    at mountLazyComponent (chunk-6BKLQ22S.js?v=2216c878:14822:27)
    at beginWork (chunk-6BKLQ22S.js?v=2216c878:15918:22)
    at HTMLUnknownElement.callCallback2 (chunk-6BKLQ22S.js?v=2216c878:3674:22)
    at Object.invokeGuardedCallbackDev (chunk-6BKLQ22S.js?v=2216c878:3699:24)
(anonymous)	@	chunk-DRWLMN53.js?v=2216c878:133
printWarning	@	chunk-DRWLMN53.js?v=2216c878:132
error	@	chunk-DRWLMN53.js?v=2216c878:120
lazyInitializer	@	chunk-DRWLMN53.js?v=2216c878:898
mountLazyComponent	@	chunk-6BKLQ22S.js?v=2216c878:14822
beginWork	@	chunk-6BKLQ22S.js?v=2216c878:15918
callCallback2	@	chunk-6BKLQ22S.js?v=2216c878:3674
invokeGuardedCallbackDev	@	chunk-6BKLQ22S.js?v=2216c878:3699
invokeGuardedCallback	@	chunk-6BKLQ22S.js?v=2216c878:3733
beginWork$1	@	chunk-6BKLQ22S.js?v=2216c878:19765
performUnitOfWork	@	chunk-6BKLQ22S.js?v=2216c878:19198
workLoopConcurrent	@	chunk-6BKLQ22S.js?v=2216c878:19189
renderRootConcurrent	@	chunk-6BKLQ22S.js?v=2216c878:19164
performConcurrentWorkOnRoot	@	chunk-6BKLQ22S.js?v=2216c878:18678
workLoop	@	chunk-6BKLQ22S.js?v=2216c878:197
flushWork	@	chunk-6BKLQ22S.js?v=2216c878:176
performWorkUntilDeadline	@	chunk-6BKLQ22S.js?v=2216c878:384

Uncaught TypeError: Cannot convert object to primitive value
    at String (<anonymous>)
    at chunk-DRWLMN53.js?v=2216c878:133:22
    at Array.map (<anonymous>)
    at printWarning (chunk-DRWLMN53.js?v=2216c878:132:39)
    at error (chunk-DRWLMN53.js?v=2216c878:120:15)
    at lazyInitializer (chunk-DRWLMN53.js?v=2216c878:898:17)
    at mountLazyComponent (chunk-6BKLQ22S.js?v=2216c878:14822:27)
    at beginWork (chunk-6BKLQ22S.js?v=2216c878:15918:22)
    at HTMLUnknownElement.callCallback2 (chunk-6BKLQ22S.js?v=2216c878:3674:22)
    at Object.invokeGuardedCallbackDev (chunk-6BKLQ22S.js?v=2216c878:3699:24)

    The above error occurred in one of your React components:

    at Lazy
    at RenderedRoute (http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=2216c878:4069:5)
    at Routes (http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=2216c878:4539:5)
    at Suspense
    at main
    at div
    at ErrorBoundary (http://localhost:5173/src/components/ErrorBoundary.tsx?t=1733886764758:5:1)
    at Router (http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=2216c878:4482:15)
    at BrowserRouter (http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=2216c878:5228:5)
    at App

React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

ErrorBoundary.tsx:27 Uncaught error: TypeError: Cannot convert object to primitive value 
{componentStack: '\n    at Lazy\n    at RenderedRoute (http://localhos…react-router-dom.js?v=2216c878:5228:5)\n    at App'}
componentStack
: 
"\n    at Lazy\n    at RenderedRoute (http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=2216c878:4069:5)\n    at Routes (http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=2216c878:4539:5)\n    at Suspense\n    at main\n    at div\n    at ErrorBoundary (http://localhost:5173/src/components/ErrorBoundary.tsx?t=1733886764758:5:1)\n    at Router (http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=2216c878:4482:15)\n    at BrowserRouter (http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=2216c878:5228:5)\n    at App"
[[Prototype]]
: 
Object
constructor
: 
ƒ Object()
assign
: 
ƒ assign()
length
: 
2
name
: 
"assign"
arguments
: 
(...)
caller
: 
(...)
[[Prototype]]
: 
ƒ ()
apply
: 
ƒ apply()
length
: 
2
name
: 
"apply"
arguments
: 
(...)
caller
: 
(...)
[[Prototype]]
: 
ƒ ()
apply
: 
ƒ apply()
length
: 
2
name
: 
"apply"
arguments
: 
(...)
caller
: 
(...)
[[Prototype]]
: 
ƒ ()
[[Scopes]]
: 
Scopes[0]
arguments
: 
(...)
bind
: 
ƒ bind()
call
: 
ƒ call()
caller
: 
(...)
constructor
: 
ƒ Function()
length
: 
1
name
: 
"Function"
prototype
: 
ƒ ()
apply
: 
ƒ apply()
length
: 
2
name
: 
"apply"
arguments
: 
(...)
caller
: 
(...)
[[Prototype]]
: 
ƒ ()
apply
: 
ƒ apply()
length
: 
2
name
: 
"apply"
arguments
: 
(...)
caller
: 
(...)
[[Prototype]]
: 
ƒ ()
apply
: 
ƒ apply()
length
: 
2
name
: 
"apply"
arguments
: 
(...)
caller
: 
(...)
[[Prototype]]
: 
ƒ ()
[[Scopes]]
: 
Scopes[0]
arguments
: 
(...)
bind
: 
ƒ bind()
length
: 
1
name
: 
"bind"
arguments
: 
(...)
caller
: 
(...)
[[Prototype]]
: 
ƒ ()
apply
: 
ƒ apply()
length
: 
2
name
: 
"apply"
arguments
: 
(...)
caller
: 
(...)
[[Prototype]]
: 
ƒ ()
[[Scopes]]
: 
Scopes[0]
arguments
: 
(...)
bind
: 
ƒ bind()
call
: 
ƒ call()
caller
: 
(...)
constructor
: 
ƒ Function()
length
: 
0
name
: 
""
toString
: 
ƒ toString()
Symbol(Symbol.hasInstance)
: 
ƒ [Symbol.hasInstance]()
get arguments
: 
ƒ ()
set arguments
: 
ƒ ()
get caller
: 
ƒ ()
set caller
: 
ƒ ()
[[FunctionLocation]]
: 
[[Prototype]]
: 
Object
[[Scopes]]
: 
Scopes[0]
[[Scopes]]
: 
Scopes[0]
call
: 
ƒ call()
caller
: 
(...)
constructor
: 
ƒ Function()
length
: 
0
name
: 
""
toString
: 
ƒ toString()
Symbol(Symbol.hasInstance)
: 
ƒ [Symbol.hasInstance]()
get arguments
: 
ƒ ()
set arguments
: 
ƒ ()
get caller
: 
ƒ ()
set caller
: 
ƒ ()
[[FunctionLocation]]
: 
[[Prototype]]
: 
Object
[[Scopes]]
: 
Scopes[0]
[[Scopes]]
: 
Scopes[0]
arguments
: 
(...)
bind
: 
ƒ bind()
call
: 
ƒ call()
caller
: 
(...)
constructor
: 
ƒ Function()
length
: 
0
name
: 
""
toString
: 
ƒ toString()
Symbol(Symbol.hasInstance)
: 
ƒ [Symbol.hasInstance]()
get arguments
: 
ƒ ()
set arguments
: 
ƒ ()
get caller
: 
ƒ ()
set caller
: 
ƒ ()
[[FunctionLocation]]
: 
[[Prototype]]
: 
Object
[[Scopes]]
: 
Scopes[0]
[[Scopes]]
: 
Scopes[0]
arguments
: 
(...)
bind
: 
ƒ bind()
length
: 
1
name
: 
"bind"
arguments
: 
(...)
caller
: 
(...)
[[Prototype]]
: 
ƒ ()
[[Scopes]]
: 
Scopes[0]
call
: 
ƒ call()
caller
: 
(...)
constructor
: 
ƒ Function()
length
: 
0
name
: 
""
toString
: 
ƒ toString()
Symbol(Symbol.hasInstance)
: 
ƒ [Symbol.hasInstance]()
get arguments
: 
ƒ ()
set arguments
: 
ƒ ()
get caller
: 
ƒ ()
set caller
: 
ƒ ()
[[FunctionLocation]]
: 
[[Prototype]]
: 
Object
[[Scopes]]
: 
Scopes[0]
arguments
: 
(...)
caller
: 
(...)
[[Prototype]]
: 
ƒ ()
[[Scopes]]
: 
Scopes[0]
length
: 
0
name
: 
""
toString
: 
ƒ toString()
Symbol(Symbol.hasInstance)
: 
ƒ [Symbol.hasInstance]()
get arguments
: 
ƒ ()
set arguments
: 
ƒ ()
get caller
: 
ƒ ()
set caller
: 
ƒ ()
[[FunctionLocation]]
: 
[[Prototype]]
: 
Object
[[Scopes]]
: 
Scopes[0]
[[Scopes]]
: 
Scopes[0]
arguments
: 
(...)
bind
: 
ƒ bind()
call
: 
ƒ call()
caller
: 
(...)
constructor
: 
ƒ Function()
length
: 
0
name
: 
""
toString
: 
ƒ toString()
Symbol(Symbol.hasInstance)
: 
ƒ [Symbol.hasInstance]()
get arguments
: 
ƒ ()
set arguments
: 
ƒ ()
get caller
: 
ƒ ()
set caller
: 
ƒ ()
[[FunctionLocation]]
: 
[[Prototype]]
: 
Object
[[Scopes]]
: 
Scopes[0]
[[Scopes]]
: 
Scopes[0]
create
: 
ƒ create()
defineProperties
: 
ƒ defineProperties()
defineProperty
: 
ƒ defineProperty()
entries
: 
ƒ entries()
freeze
: 
ƒ freeze()
fromEntries
: 
ƒ fromEntries()
getOwnPropertyDescriptor
: 
ƒ getOwnPropertyDescriptor()
getOwnPropertyDescriptors
: 
ƒ getOwnPropertyDescriptors()
getOwnPropertyNames
: 
ƒ getOwnPropertyNames()
getOwnPropertySymbols
: 
ƒ getOwnPropertySymbols()
getPrototypeOf
: 
ƒ getPrototypeOf()
groupBy
: 
ƒ groupBy()
hasOwn
: 
ƒ hasOwn()
is
: 
ƒ is()
isExtensible
: 
ƒ isExtensible()
isFrozen
: 
ƒ isFrozen()
isSealed
: 
ƒ isSealed()
keys
: 
ƒ keys()
length
: 
1
name
: 
"Object"
preventExtensions
: 
ƒ preventExtensions()
prototype
: 
{__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}
seal
: 
ƒ seal()
setPrototypeOf
: 
ƒ setPrototypeOf()
values
: 
ƒ values()
arguments
: 
(...)
caller
: 
(...)
[[Prototype]]
: 
ƒ ()
[[Scopes]]
: 
Scopes[0]
hasOwnProperty
: 
ƒ hasOwnProperty()
isPrototypeOf
: 
ƒ isPrototypeOf()
propertyIsEnumerable
: 
ƒ propertyIsEnumerable()
toLocaleString
: 
ƒ toLocaleString()
toString
: 
ƒ toString()
valueOf
: 
ƒ valueOf()
__defineGetter__
: 
ƒ __defineGetter__()
__defineSetter__
: 
ƒ __defineSetter__()
__lookupGetter__
: 
ƒ __lookupGetter__()
__lookupSetter__
: 
ƒ __lookupSetter__()
__proto__
: 
(...)
get __proto__
: 
ƒ __proto__()
set __proto__
: 
ƒ __proto__()
componentDidCatch	@	ErrorBoundary.tsx:27
﻿

