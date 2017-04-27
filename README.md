# Create React-Redux App

## Before starting

* install Chrome extension React Developer Tools
* install Chrome extension Redux DevTools
* install [Node](https://nodejs.org/en/)
* install npm package [create react app](https://github.com/facebookincubator/create-react-app)

~~~
npm i -g create-react-app
~~~

* install [Atom](https://atom.io/)
* install linter-xo

> in Atom / Settings / Install
> search for 'linter-xo'
> install

* install xo command line

~~~
npm i -g xo
~~~

## Setup
### Create the app

* go to the parent folder of your app
* create react app

> a root folder is created, with the name of your app, and the initial files architecture is setup

~~~
create-react-app reactreduxapp
~~~

### Add dependencies

* go to the project

~~~
cd reactreduxapp
~~~

* add react and redux packages to the project

> react-router-redux is not compatible with last version of react-router.
> So for now we grab v2.7.0 as suggest in [Redux doc](http://redux.js.org/docs/advanced/UsageWithReactRouter.html)

~~~
npm i -S prop-types
npm i -S redux
npm i -S react-redux
npm i -S react-router@^2.8.0
npm i -S react-router-redux
~~~

* add linter-xo plugins for react

~~~
npm i -D eslint
npm i -D eslint-plugin-react
npm i -D eslint-config-xo-react
~~~

* enable linter-xo for your project

> create-react-app do not fit with linter-xo rules
> but you may like it

~~~
xo --init
~~~

### Start coding

* open the project in your text editor

~~~
atom .
~~~

* customize some xo rules
* code in `package.json`

~~~
{
// [...]
  "xo": {
    "extends": "xo-react",
    "space": 2,
    "env": [
      "browser",
      "node"
    ]
  }
}
~~~

* lint the react app

> Follow the rules: naming, spaces, LF...

* tips for css

~~~
/* eslint-disable import/no-unassigned-import */
import './app.css';
/* eslint-enable */
~~~

* start the server

~~~
npm start
~~~

## React

### First components

* create `/src/components` directory

~~~
cd src/
mkdir components
~~~

* creates a Main component

~~~
cd components
touch main.js
~~~

* code in `/src/components/main.js`

~~~
import React, {Component} from 'react';

class Main extends Component {
  render() {
    return (
      <div>
        <h2>
          React Main Component
        </h2>
      </div>
    );
  }
}

export default Main;
~~~

* add Main in you app
* modif in `/src/app.js`

~~~
+ import Main from './components/main';
~~~
~~~
<p className="app-intro">
  To get started, edit <code>src/App.js</code> and save to reload.
</p>
+ <Main/>
~~~

> In the browser you see the react logo and the text from Main component

### Routing

* create some other components

~~~
touch button.js todo-app.js
~~~

* code in `/src/components/button.js`

~~~
import React, {Component} from 'react';
import {Link} from 'react-router';

class Button extends Component {
  render() {
    return (
      <Link to="/todoapp">
        <button>
          Todo App
        </button>
      </Link>
    );
  }
}

export default Button;
~~~

* code in `/src/components/todo-app.js`

~~~
import React, {Component} from 'react';

class TodoApp extends Component {
  render() {
    return (
      <div>
        This is my TODOs
      </div>
    );
  }
}

export default TodoApp;
~~~

* prepare Main component to manage the links and have children components

* modif in `/src/components/main.js`

~~~
+ import {Link} from 'react-router';
+ import PropTypes from 'prop-types';
~~~
~~~
  <div>
    <h2>
+    <Link to="/">
        React Main Component
+    </Link>
    </h2>
+ {React.cloneElement(this.props.children)}
  </div>
~~~
~~~
Main.propTypes = {
  children: PropTypes.element.isRequired
};
~~~

* prepare App component to pass the children

* modify `/src/app.js`

~~~
+ <Main {...this.props}/>
~~~

* create the router and defines the routes

* modif in `/src/index.js`

~~~
+ import {Router, Route, IndexRoute, browserHistory} from 'react-router';
~~~
~~~
+ import Button from './components/button';
+ import TodoApp from './components/todo-app';
~~~
~~~
+ const router = (
+   <Router history={browserHistory}>
+    <Route path="/" component={App}>
+      <IndexRoute component={Button}/>
+      <Route path="/todoapp" component={TodoApp}/>
+    </Route>
+  </Router>
+ );

ReactDOM.render(
+ router,
  document.getElementById('root')
);
~~~

* add a bit of CSS

* modif in `index.css`

~~~
button {
  cursor: pointer;
}
~~~

> In the Browser you should see the home page with the Main component and the Button component.
> Click on the link in Button component change URL and display the TodoList component
> Click on Main component title go back to the Home page with Button component
> Browser navigation back and forward works fine.

## Redux
Here we add a TODO list as describe in [redux basics](http://redux.js.org/docs/basics/)

### Store

* create Store

~~~
cd ../
touch store.js
~~~

* code in `/src/store.js`

~~~
import {createStore} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

const defaultState = {
  visibilityFilter: 'SHOW_ALL',
  todos: [
    {id: 0, text: 'Run Redux', completed: true}
  ]
};

/* eslint-disable no-underscore-dangle */
const store = createStore(
  defaultState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
~~~

### Actions

* create action types

~~~
mkdir actions
cd /actions
touch types.js
~~~

* code in `/src/actions/types.js`

~~~
export const Todos = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO'
};

export const VisibilityFilter = {
  SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER'
};

export const Filters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};
~~~

* create actions

~~~
touch actions.js
~~~

* code in `/src/actions/actions.js`

~~~
import {Todos, VisibilityFilter} from './types';

let nextTodoId = 0;
export function addTodo(text) {
  return {
    type: Todos.ADD_TODO,
    id: ++nextTodoId,
    text
  };
}

export function toggleTodo(id) {
  return {
    type: Todos.TOGGLE_TODO,
    id
  };
}

export function setVisibilityFilter(filter) {
  return {
    type: VisibilityFilter.SET_VISIBILITY_FILTER,
    filter
  };
}
~~~

### Reducers

* create one reducer by state element

~~~
cd ../
mkdir reducers
cd reducers/
touch todos.js visibility-filter.js
~~~

* code in `/src/reducers/todos.js`

~~~
import {Todos} from '../actions/types';

function todos(state = [], action) {
  switch (action.type) {
    case Todos.ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case Todos.TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          return Object.assign({},
            todo,
            {completed: !todo.completed}
          );
        }
        return todo;
      });
    default:
      return state;
  }
}

export default todos;
~~~

* code in `/src/reducers/visibility-filter.js`

~~~
import {VisibilityFilter, Filters} from '../actions/types';

function visibilityFilter(state = Filters.SHOW_ALL, action) {
  switch (action.type) {
    case VisibilityFilter.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default visibilityFilter;
~~~

* combine reducers in a root reducer

* create a root reducer

~~~
touch root.js
~~~

* code in `/src/reducers/root.js`

~~~
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import todos from './todos';
import visibilityFilter from './visibility-filter';

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  routing: routerReducer
});

export default rootReducer;
~~~

### Update Store
* modif id `/src/store.js`

~~~
+ import {Filters} from './actions/types';
+ import rootReducer from './reducers/root';

  const defaultState = {
+  visibilityFilter: Filters.SHOW_ALL,
    todos: [
      {id: 0, text: 'Run Redux', completed: true}
    ]
  };

  /* eslint-disable no-underscore-dangle */
  const store = createStore(
+   rootReducer, defaultState,
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  /* eslint-enable */
~~~

### Provider

* modif in `/src/index.js`

~~~
+ import {Router, Route, IndexRoute} from 'react-router';
+ import {Provider} from 'react-redux';
+ import store, {history} from './store';

  const router = (
+   <Provider store={store}>
+     <Router history={history}>
         <Route path="/" component={App}/>
           <IndexRoute component={Button}/>
           <Route path="/todoapp" component={TodoApp}/>
         </Route>
       </Router>
+   </Provider>
);
~~~

> In the Browser you should be able to go in the inspector, in the `Redux` tab,
> and see some `@@router` actions dispatched when you change page.

## Todo App

TodoApp component is composed of 3 sub-components. The form to add a todo, the list of todo, and a menu to change the filters.

### Sub-components

* create components

~~~
cd ../components
touch add-todo.js todo-list.js footer.js
~~~

* code in `/src/components/add-todo.js`

~~~
import React, {Component} from 'react';

class AddTodo extends Component {
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            />
          <button type="submit">
            Add todo
          </button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
~~~

* code in `/src/components/todo-list.js`

~~~
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoList extends Component {
  render() {
    return (
      <div>
        This will be my TodoList
      </div>
    );
  }
}

export default TodoList;
~~~

* code in `/src/components/footer.js`

~~~
import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
        Show:
        {' '}
        All
        {' '}
        Active
        {' '}
        Completed
      </div>
    );
  }
}

export default Footer;
~~~

* modif in `/src/components/todo-app.js`

~~~
+ import AddTodo from '../components/add-todo';
+ import TodoList from '../components/todo-list';
+ import Footer from '../components/footer';
~~~
~~~
  render() {
    return (
      <div>
+      <AddTodo/>
+      <TodoList/>
+      <Footer/>
      </div>
    );
  }
~~~

> In the Browser you can see the different components of TodoApp

### Display Todos

In `store.js` we define a `defaultState` with one todo as example. Let's display it.
TodoList component is composed of a list of Todo component.

* create Todo component

~~~
touch todo.js
~~~

* code in `/src/components/todo.js`

~~~
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Todo extends Component {
  // Bind the click handler to the component
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    // The data of the todo to display
    const {todo} = this.props;
    return (
      <li
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          cursor: 'pointer'
        }}
        onClick={this.handleClick}
        >
        {todo.text}
      </li>
    );
  }
  // The action called on click
  handleClick() {
    this.props.onClick(this.props.todo.id);
  }
}

// Description of the specific data needed by the component
Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired
};

export default Todo;
~~~

* Todo component is create in TodoList component
* modif in `/src/components/todo-list.js`

~~~
+ import PropTypes from 'prop-types';
+ import Todo from './todo';
~~~
~~~
render() {
+  // The todo list and the action to pass to each todo
+  const {todos, toggleTodo} = this.props;
    return (
      <div>
+      <ul>
+        {todos.map(todo => {
+         return (
+            <Todo
+              key={todo.id}
+              todo={todo}
+              onClick={toggleTodo}
+              />
+          );
+        })}
+      </ul>
      </div>
    );
  }
~~~
~~~
+ // Description of the data needed by the component
+ TodoList.propTypes = {
+   todos: PropTypes.arrayOf(PropTypes.shape({
+     id: PropTypes.number.isRequired,
+     completed: PropTypes.bool.isRequired,
+     text: PropTypes.string.isRequired
+   }).isRequired),
+   toggleTodo: PropTypes.func
+ };

+ // Default data if empty
+ TodoList.defaultProps = {
+   todos: [{
+     id: 0,
+     completed: false,
+     text: 'default todo'
+   }],
+   toggleTodo: () => {
+     console.log('default');
+   }
+ };
~~~

> In the Browser, you can see a list of one todo with the label `default todo`.
> Notice that is it the default value set inside the component.
> It is not the data from the `store` (yet)

### Connect the store

Redux separate the **presentational components** render data, and the **containers components** that modify the data.
Basically the presentational components do not know about the state or the actions. The containers will get the state and feed the components with the data they need to render.
In a Redux app, we need to **connect** the state with the component using a container.

* create container for TodoList component

~~~
cd ../
mkdir containers
cd containers
touch connect-todo-list.js
~~~

* code in `/src/containers/connect-todo-list.js`

~~~
import {connect} from 'react-redux';
import {toggleTodo} from '../actions/actions';
import TodoList from '../components/todo-list';

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = {
  toggleTodo
};

const ConnectTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default ConnectTodoList;
~~~

* update TodoApp to use ConnectTodo

* modif in `/src/components/todo-app.js`

~~~
+ import ConnectTodoList from '../containers/connect-todo-list';
~~~
~~~
render() {
    return (
      <div>
        <AddTodo/>
+      <ConnectTodoList/>
        <Footer/>
      </div>
    );
  }
~~~

> In the Browser, you can see the todo labelled `Run Redux` that come from the store.
> You can toggle it back and forth.

### Add Todo

For adding a todo to the list we need to dispatch the action addTodo on submit the form.
AddTodo should stay a presentational component. Then we need to give him the action addTodo using a container.

* modif in `/src/components/add-todo.js`

~~~
+ import PropTypes from 'prop-types';
~~~
~~~
class AddTodo extends Component {
+  constructor() {
+    super();
+    this.handleSubmit = this.handleSubmit.bind(this);
+  }
    render() {
      return (
        <div>
+        <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              />
            <button type="submit">
              Add todo
            </button>
          </form>
        </div>
      );
    }
+  handleSubmit(e) {
+    e.preventDefault();
+    this.props.addTodo(e.target.querySelector('input').value);
+    e.target.querySelector('input').value = '';
+  }
}
~~~
~~~
+ AddTodo.propTypes = {
+   addTodo: PropTypes.func.isRequired
+ };
~~~

* create container for AddTodo component

~~~
touch connect-add-todo.js
~~~

* code in `/src/containers/connect-add-todo.js`

~~~
import {connect} from 'react-redux';
import {addTodo} from '../actions/actions';
import AddTodo from '../components/add-todo';

const mapStateToProps = () => ({
});

const mapDispatchToProps = {
  addTodo
};

const ConnectTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);

export default ConnectTodoList;
~~~

* update TodoApp to use ConnectAddTodo

* modif in `/src/components/todo-app.js`

~~~
+ import ConnectAddTodo from '../containers/connect-add-todo';
~~~
~~~
render() {
    return (
      <div>
+      <ConnectAddTodo/>
        <ConnectTodoList/>
        <Footer/>
      </div>
    );
  }
~~~

> In the Browser, you can add a todo to the list using the form.

### Filters
The Footer component will display the visibility filters. We need a button for each filter that will update the store according the user click.
Each button and on click event ill be manage by one component.

* create Filter component

~~~
cd ../components/
touch filter.js
~~~

* code in `/src/components/filter.js`

~~~
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    const {label, filter, setFilter} = this.props;
    return (
      <span
        style={{
          textDecoration: filter === setFilter ? 'underline' : 'none',
          cursor: 'pointer'
        }}
        onClick={this.handleClick}
        >
        {label}
      </span>
    );
  }
  handleClick() {
    this.props.onClick(this.props.setFilter);
  }
}

Filter.propTypes = {
  label: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Filter;
~~~

* update Footer component to use Filter
* modif in `/src/components/footer.js`

~~~
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Filter from './filter';

class Footer extends Component {
  render() {
    const {filters, visibilityFilter, setVisibilityFilter} = this.props;
    return (
      <div>
        Show:
        {' '}
        <Filter
          label="All"
          filter={visibilityFilter}
          setFilter={filters.SHOW_ALL}
          onClick={setVisibilityFilter}
          />
        {' '}
        <Filter
          label="Active"
          filter={visibilityFilter}
          setFilter={filters.SHOW_ACTIVE}
          onClick={setVisibilityFilter}
          />
        {' '}
        <Filter
          label="Completed"
          filter={visibilityFilter}
          setFilter={filters.SHOW_COMPLETED}
          onClick={setVisibilityFilter}
          />
      </div>
    );
  }
}

Footer.propTypes = {
  filters: PropTypes.object.isRequired,
  visibilityFilter: PropTypes.string.isRequired,
  setVisibilityFilter: PropTypes.func.isRequired
};

export default Footer;
~~~

> Footer component is state-less, we need a container to connect the state to the component

* create a container for Footer component

~~~
cd ../containers/
touch connect-footer.js
~~~

code in `/src/containers/connect-footer.js`

~~~
import {connect} from 'react-redux';
import {setVisibilityFilter} from '../actions/actions';
import {Filters} from '../actions/types';
import Footer from '../components/footer';

const mapStateToProps = state => ({
  filters: Filters,
  visibilityFilter: state.visibilityFilter
});

const mapDispatchToProps = {
  setVisibilityFilter
};

const ConnectTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);

export default ConnectTodoList;
~~~

* update TodoApp to use ConnectFooter
* modif in `/src/components/todo-app.js`

~~~
+ import ConnectFooter from '../containers/connect-footer';
~~~
~~~
  render() {
    return (
      <div>
        <ConnectAddTodo/>
        <ConnectTodoList/>
+      <ConnectFooter/>
      </div>
    );
  }
~~~

* update ConnectTodoList to manage the filters
* modif in `/src/containers/connect-todo-list.js`

~~~
+ import {Filters} from '../actions/types';
~~~
~~~
+ // Filters
+ const getVisibleTodos = (todos, filter) => {
+   switch (filter) {
+     case Filters.SHOW_ALL:
+       return todos;
+     case Filters.SHOW_COMPLETED:
+       return todos.filter(t => t.completed);
+     case Filters.SHOW_ACTIVE:
+       return todos.filter(t => !t.completed);
+     default:
+       throw new Error('Unknown Filter: ' + filter);
+   }
+ };
~~~
~~~
const mapStateToProps = state => ({
+   todos: getVisibleTodos(state.todos, state.visibilityFilter)
});
~~~

> In the Browser, you can click on the different filters and it display only the corresponding todo
