const counter = (state = 0, action) => {
    console.log(action);
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

var CounterApp = (() => function() {
    const store = Redux.createStore(counter);
    const countEl = document.getElementById('count');

    store.subscribe(() => countEl.innerText = store.getState());
    store.dispatch({type: null});

    this.increment = () => store.dispatch({type: 'INCREMENT'});
    this.decrement = () => store.dispatch({type: 'DECREMENT'});
})();

window.counterApp = new CounterApp();