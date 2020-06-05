import React from 'react';
import './App.css';
import AddTodo from './components/addTodo'
import Content from './components/content'
import Footer from './components/Footer'
import store from './store/index'
import {Provider} from 'react-redux'

// 把store挂载到window对象上
declare global{
  interface Window{
    store:any
  }
}
window.store = store

function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <AddTodo />
          <Content />
          <Footer />
      </Provider>
      
    </div>
  );
}

export default App;
