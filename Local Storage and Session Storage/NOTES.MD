## Web Storage: localStorage and sessionStorage

`localStorage` and `sessionStorage` are two types of web storage objects that allow web developers to store key/value pairs locally within the user's browser. They are part of the Web Storage API, providing a simple key-value based storage system that enables data storage within the browser.

### Differences between localStorage and sessionStorage:

1. **Lifetime**:
   - `localStorage`: Data persists even after the browser is closed and reopened.
   - `sessionStorage`: Data is cleared when the page session ends, i.e., when the browser is closed.

2. **Scope**:
   - Both are specific to the protocol of the page and accessible only on the client side.
   - That is it is guided by three things :
   <ol>
   <ii>Protocol::if we change from HTTP to HTTPS,we can't able to acess that".</li>
   <li>Host::Host name should be same.</li>
   <li>Port No:: if we are accessing storage on 8000,you can't access it on 8001".</li>
   <ol>

3. **Storage Capacity**:
   - `localStorage` generally provides more storage space compared to `sessionStorage`.

4. **Usage**:
   - `localStorage`: Suitable for storing persistent data such as user preferences or caching data.
   - `sessionStorage`: Ideal for storing data that should only be accessible during a single session.

### Example usage in JavaScript:

```javascript
// Storing data in localStorage
localStorage.setItem('key', 'value');

// Retrieving data from localStorage
const retrievedValue = localStorage.getItem('key');

// Removing data from localStorage
localStorage.removeItem('key');

// Clearing all data from localStorage
localStorage.clear();
