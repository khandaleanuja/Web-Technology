// DOM manipulation  ----> changing HTML using JS
// e.g. show error msg, success msg, change color, clear input field
// HTML --> for code, CSS --> change style, JS --> DOM changes
// get user input --> .value

//Event  --> Event is an action that happens in browser  for e.g. clicking a button, moving mouse, 
// pressing key, submitting forms, loading page, ect.
// JS can detect this events and respond to them

// Types of event
// 1. Mouse event --> click , dbl click, mouse hover, mouse out
// 2. Keyword event --> key down, key up
// 3. Browser event --> scroll, resize

//onclik="alert()"   is not a good way ---> html should contain structure and JS should contain logic. 
// So mixing them is bad logic.  Hard to maintain big projects

// select element assign function to click event when clicked -> function runs
// only one event can be assign , cannot handle multiple listeners properly


// Activity -->  jquery, type, timestamp, default prevented, target source element, current target
// client X, client Y, screen x, screen y, alt, ctrl, shift


// addEventListener   ---> is a JS method used to attach an event handler to HTML element so that specific function run 
// when a particular event occurs.

// true --> event capturing,   parent -> child
// false --> event propagation,  child -> parent
// event goes to inner element to parent and parent to document.  