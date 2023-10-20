# Event Bubbling and Capturing

Event bubbling and event capturing are two ways of event propagation in the Document Object Model (DOM) in JavaScript. When an event occurs in an element, it not only triggers on that specific element but also on its ancestors. Both event bubbling and event capturing describe the order in which these events are handled.

1. **Event Capturing:** During the capturing phase, the event is first captured by the outermost element and propagated to the inner elements. It goes from the top of the DOM tree downwards to the target element.

2. **Event Bubbling:** During the bubbling phase, the event is first captured and handled by the innermost element and then propagated to the outer elements. It goes from the target element up to the top of the DOM tree.

```javascript
addEventListener('click',function{},useCapture);
```
(useCapture==true) ==> Event Capturing.
(useCapture==false) ==> Event Bubbling.

## Default Behaviour
<ul>
<li>By Default,Browser calls the Event Bubbling Process.</li>
<li>Event Capturing has higher priority than Event Bubbling.</li>
<ul>