
const parent = React.createElement('div', {id: 'parent'}, [
    React.createElement('div', {id: 'child'}, [
        React.createElement('p', {id: 'child3'}, "I am a child"),
        React.createElement('button', {onClick: () => console.log("You clicked the button")}, "Click me!")
    ]),
    React.createElement('div', {id: 'child1'}, [
        React.createElement('h2', {id: 'child4'}, "This is another child"),
        React.createElement('p', {id: 'child2'}, 'Hello World')
    ])
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);