import React from 'react';
import List from './components/List';
import { connect } from 'react-redux';
import AddAnotherBtn from './components/AddAnotherBtn';
import './App.css';

function App({ lists }) {

  return (
      <div className="App">
        <div className="app-listRow">
          { 
            lists.map(list => (
            <List key={list.id} listID={list.id} title={list.title} cards={list.cards} />
            )) 
          }
          <AddAnotherBtn list/>
        </div>
      </div>
  );
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps) (App);
