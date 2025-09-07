1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
    ans->
      getElementById -> finds one element by its id.
      getElementsByClassName -> finds all elements with that class (like a list).
      querySelector -> finds the first element that matches a CSS selector.
      querySelectorAll -> finds all elements that match a CSS selector.

2. How do you **create and insert a new element into the DOM**?
    ans->
      let p = document.createElement("p");
      p.textContent = "Hello World";
      document.body.appendChild(p);

3. What is **Event Bubbling** and how does it work?
    ans->
      When we click an element, the event first happens on that element, then it moves up (bubbles) to its parent, then grandparent etc.

4. What is **Event Delegation** in JavaScript? Why is it useful?
    ans->
      Instead of putting event listeners on many child elements, we put one listener on the parent and check which child was clicked.
      
5. What is the difference between **preventDefault() and stopPropagation()** methods?