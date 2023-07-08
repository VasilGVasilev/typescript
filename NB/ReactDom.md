How does the React Virtual DOM work?

You have to understrand that there is a virtual DOM and browser DOM.
React intially builds the virtual DOM and replicates it to build the browser DOM from scratch.
The virtual DOM has instances.
Thus, when you update something and re-render is triggered, React compares old version of virtual DOM and new updated version of virtual DOM. This process is called diffing.
The differences in react nodes are pinpointed and only those branches of the virtual DOM are sent to the actual browser DOM to update it with.

