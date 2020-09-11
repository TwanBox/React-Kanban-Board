import React from 'react';
import List from './components/List';
import { connect } from 'react-redux';
import AddAnotherBtn from './components/AddAnotherBtn';
import { DragDropContext } from 'react-beautiful-dnd';
import './App.css';

function App({ lists }) {

  const onDragEnd = () => {

  }

  return (
    <DragDropContext onDragEnd={onDragEnd()}>
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
    </DragDropContext>
  );
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps) (App);
