-   [ ] Why would you use class component over functional components (removing hooks from the question)?

So that you could use state in your component.

-   [ ] Name three lifecycle methods and their purposes.

componentDidMount(): This is a good place to initiate API calls, if you need to load data from a remote endpoint.
componentDidUpdate(): The most common use case for the componentDidUpdate() method is updating the DOM in response to prop or state changes.
componentWillUnmount(): If there are any cleanup actions that you would need to do, this would be the right spot.

-   [ ] What is the purpose of a custom hook?

Custom Hooks are a mechanism to reuse stateful logic (such as setting up a subscription and remembering the current value), but every time you use a custom Hook, all state and effects inside of it are fully isolated.

-   [ ] Why is it important to test our apps?

prevents future bugs, helps us control our code, good practice.
