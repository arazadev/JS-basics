//     Javascript Eexcution Context

/**

{} -> Global EC -> this keyword contains window object in browser

Types
1. Global Execution Context
2. Function Execution Context
3. Eval Execution Context

{} -> memory creation phase and Execution phase

 */

/*

1. JavaScript first creates the **Global Execution Context (GEC)** when a script starts running.

2. The Global Execution Context is created in two phases:

   * **Memory Creation Phase (Creation Phase)**
   * **Execution Phase**

3. Memory Creation Phase:

   * Variables declared with `var` are allocated memory and initialized with `undefined`.
   * Function declarations are stored completely in memory along with their definitions.
   * `let` and `const` are also allocated memory, but they remain in the **Temporal Dead Zone (TDZ)** and cannot be accessed before initialization.

4. Execution Phase:

   * JavaScript executes the code line by line.
   * Variables are assigned their actual values.
   * When a function is invoked, a **new Function Execution Context** is created for that function.

5. Each Function Execution Context also goes through:

   * Memory Creation Phase
   * Execution Phase

6. After a function finishes execution:

   * Its Execution Context is removed from the **Call Stack**.
   * Control returns to the Execution Context that called the function.

7. The **Call Stack** keeps track of all Execution Contexts.

   * The Global Execution Context is pushed onto the stack first.
   * Whenever a function is called, its Execution Context is pushed onto the stack.
   * When the function completes, its Execution Context is popped from the stack.
   * JavaScript is single-threaded, so only one Execution Context executes at a time.

Understand the Call Stack with a live demo:

1. Open the browser and press **F12** or right-click → **Inspect**.
2. Go to the **Sources** tab.
3. Click the **>>** button (if visible) and select **Snippets**.
4. Create a new snippet.
5. Write some functions in the snippet and save it using **Ctrl + S**.
6. Add breakpoints by clicking on the line numbers.
7. Run the snippet.
8. Use **Step Over (F10)**, **Step Into (F11)**, and **Step Out (Shift + F11)** to execute code line by line.
9. Observe the **Call Stack** panel while stepping through the code.
10. Notice how new Execution Contexts are pushed onto the stack when functions are called and removed when they finish execution.

Example:

function one() {
console.log("one");
two();
}

function two() {
console.log("two");
three();
}

function three() {
console.log("three");
}

one();

Call Stack Flow:

Global Execution Context
↓
one()
↓
two()
↓
three()
↓
three() removed
↓
two() removed
↓
one() removed
↓
Global Execution Context removed (after script execution ends)

*/