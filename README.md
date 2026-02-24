```markdown

### ( Text Formatting মার্কডাউন (AI) দিয়ে করছি, যাতে দেখতে সুন্দর লাগে। )

### Q&A 
### 1. Whats the diffrence between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
- **`getElementById`**: Returns a single elment matchin the specific ID. It is the speediest method but limited to IDs.
- **`getElementsByClassName`**: Returns a live `HTMLCollection` of all elments with the given class name.
- **`querySelector`**: Returns the first elment that matches a specified CSS selector (ID, class, tag, etc.).
- **`querySelectorAll`**: Returns a static `NodeList` of all elements matchin the CSS selector.

### 2. How do u create and insert a new elment into the DOM?
1. **Create**: Use `document.createElement('tagName')`.
2. **Config**: Set attributes or content (ex: `el.textContent = 'Hello'`).
3. **Insert**: Use methods like `appendChild()`, `prepend()`, `before()`, or `after()` on a parent or sibling element.

### 3. What is Event Bubling? And how does it work?
Event bubling is a phase of event propagation where an event triggers on the innermost target elment and then moves up to its ancestors (parents) in the DOM tree until it reaches the `window` object.

### 4. What is Event Delegation in JS? Why is it useful?
Event delegation is a technique where a single event listener is added to a parent element to manage events for all of its current and future kids. It leverages event bubbling to identify which child triggered the event using `event.target`.
- **Why it's useful**: It improves performance by reducin the number of event listeners and handles elements added to the DOM later.

### 5. What is the diffrence between preventDefault() and stopPropagation() methods?
- **`preventDefault()`**: Stops the browser's default action associated with the event (example: prevents a link from navigatin or a form from submittin).
- **`stopPropagation()`**: Prevents the event from "bubling" up the DOM tree, ensurin that parent event handlers are not triggered.
```



