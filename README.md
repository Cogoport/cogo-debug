# cogo-debug
Simple, Easy to use, Pure javascript, no configuration and small in size logger and debugger.


## Installation

Type in your terminal


### Install via NPM:

```bash
npm install cogo-debug

```

### Install via YARN:

```bash
yarn add cogo-debug

```

## Usage

Its Plug and Play. No configuration required. Just import and you are good to go.

```javascript
import cogoDebug from 'cogo-debug';

cogoDebug.log('Hello World');
```

### Built in Methods

source: https://developer.mozilla.org/en-US/docs/Web/API/console
#### cogoDebug supports all javascript cogoDebug methods

```javascript
cogoDebug.log('Logger Event');
For general output of logging information. You may use string substitution and additional arguments with this method.

cogoDebug.error('Error message');
Outputs an error message. You may use string substitution and additional arguments with this method.

cogoDebug.warn('Warn Message');
Outputs a warning message. You may use string substitution and additional arguments with this method.

cogoDebug.info('Info Message');
Informative logging of information. You may use string substitution and additional arguments with this method.

cogoDebug.assert()
Log a message and stack trace to cogoDebug if the first argument is false.

cogoDebug.clear()
Clear the cogoDebug.

cogoDebug.count()
Log the number of times this line has been called with the given label.

cogoDebug.countReset()
Resets the value of the counter with the given label.

cogoDebug.debug()
Outputs a message to the cogoDebug with the log level "debug".

cogoDebug.dir()
Displays an interactive listing of the properties of a specified JavaScript object. This listing lets you use disclosure triangles to examine the contents of child objects.

cogoDebug.dirxml()
Displays an XML/HTML Element representation of the specified object if possible or the JavaScript Object view if it is not possible.

cogoDebug.exception()  
An alias for error().

cogoDebug.group()
Creates a new inline group, indenting all following output by another level. To move back out a level, call 
groupEnd().

cogoDebug.groupCollapsed()
Creates a new inline group, indenting all following output by another level. However, unlike group() this starts with the inline group collapsed requiring the use of a disclosure button to expand it. To move back out a level, call groupEnd().

cogoDebug.groupEnd()
Exits the current inline group.

cogoDebug.profile() 
Starts the browser's built-in profiler (for example, the Firefox performance tool). You can specify an optional name for the profile.

cogoDebug.profileEnd() 
Stops the profiler. You can see the resulting profile in the browser's performance tool (for example, the Firefox performance tool).

cogoDebug.table()
Displays tabular data as a table.

cogoDebug.time()
Starts a timer with a name specified as an input parameter. Up to 10,000 simultaneous timers can run on a given page.

cogoDebug.timeEnd()
Stops the specified timer and logs the elapsed time in seconds since it started.

cogoDebug.timeLog()
Logs the value of the specified timer to the cogoDebug.

cogoDebug.timeStamp() 
Adds a marker to the browser's Timeline or Waterfall tool.

cogoDebug.trace()
Outputs a stack trace.

```

## Conditional Logging

### Via Javascript

```javascript
localStorage.setItem("debug", 'true');
Show logs and other events

localStorage.setItem("debug", 'false');
Hids logs and other events
```
### Via Browser

Directly set localStorage value in browser developer tools with tha name of `debug` as `true`.

## Prerequisite

No Prerequisite

## dependencies

Zero dependencies
