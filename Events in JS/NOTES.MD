<h3>Events</h3>
<ul style="list-style-type:disc;">
<li>Events are things that happen in the system you are programming — the system produces (or "fires") a signal of some kind when an event occurs, and provides a mechanism by which an action can be automatically taken (that is, some code running) when the event occurs.</li>
<li>Events are fired inside the browser window, and tend to be attached to a specific item that resides in it. This might be a single element, a set of elements, the HTML document loaded in the current tab, or the entire browser window.</li>
<li>To react to an event, you attach an event handler to it.his is a block of code that runs when the event fires. When such a block of code is defined to run in response to an event, we say we are <strong>registering an event handler</strong>.
<li>Multiple events can be associated with single element</li>
</ul>
> **_NOTE:_** Web events are not part of the core JavaScript language — they are defined as part of the APIs built into the browser.
<h3>Using addEventListener()</h3>
<ul>
<li>Adding Listener<br>

```js
btn.addEventListener("click", changeBackground);
```
</li>

<p>Other than click : some other events are </strong>focus,blur,dbclick,mouseover,mouseout</strong></p>
<li>Removing Listener</li>
<p>

```js
btn.addEventListener("click", changeBackground);
```
</p><br>
<p>Other way if arrow function is associated with button</p>

```js
const controller = new AbortController();

btn.addEventListener("click",
  () => {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
  },
  { signal: controller.signal } // pass an AbortSignal to this handler
);

controller.abort(); // removes any/all event handlers associated with this controller
```
<hr>
<h3>Event Handler Properties</h3>
<ul>
<li>Objects (such as buttons) that can fire events also usually have properties whose name is on followed by the name of the event. For example, elements have a property onclick. This is called an event handler property.</li>
<li>You should never use the HTML event handler attributes — those are outdated, and using them is bad practice.</li>

```html
<button onclick="alert('Hello, this is my old-fashioned event handler!');">
  Press me
</button>
```
<h3>Event Objects</h3>
<p>inside an event handler function, you'll see a parameter specified with a name such as event, evt, or e. This is called the event object, and it is automatically passed to event handlers to provide extra features and information.</p>
<li>The <i>target</i> property of the event object is always a reference to the element the event occurred upon.</li>


```js

function bgChange(e) {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  e.target.style.backgroundColor = rndCol;
  console.log(e);
}
```
<hr>
<h3>Preventing Default Behaviour</h3>
<p>It is done when we doesn't want default behaviour of any event.e.g.it is helpful in validation checks while submitting the form we ourselves decides what is right or what is wrong information to be filled in the form.</p>
<hr>
<h2>Types of Event Propagation</h2>
<h3>Event Bubbling</h3>
<ul>
<li>Event bubbling describes how the browser handles events targeted at nested elements.</li>
<li>If a parent fires a event , then its children also fires the same event implicitly</li>
<li>event bubbles up from the innermost element that was clicked.e.g,if body,div,and button,if they are nested , and everyone have some event,then innermost fires first and this process repeats till the parent element.</li>
</ul>
<hr>
<h3>Preventing the Event Bubbling</h3>
<ul>
<li>The Event object has a function available on it called stopPropagation() which, when called inside an event handler, prevents the event from bubbling up to any other elements.
<hr>
<h3>Event Capturing</h3>
<ul>
<li>An alternative form of event propagation is event capture. This is like event bubbling but the order is reversed: so instead of the event firing first on the innermost element targeted, and then on successively less nested elements, the event fires first on the least nested element, and then on successively more nested elements, until the target is reached.</li>
<li>Event capture is disabled by default. To enable it you have to pass the <i>capture option</i> in addEventListener().</li>
<hr>
<h3>Event Delegation</h3>
<ul>
<li>Event Delegation is a pattern based upon the concept of Event Bubbling. It is an event-handling pattern that allows you to handle events at a higher level in the DOM tree other than the level where the event was first received</li>
<li>In simple terms,In this practice, when we want some code to run when the user interacts with any one of a large number of child elements, we set the event listener on their parent and have events that happen on them bubble up to their parent rather than having to set the event listener on every child individually.<li>
</ul>





