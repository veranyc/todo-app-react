import React from 'react';

import Button from './button';
import TodoLink from './todo-link';

const noop = () => {};

/**
 * Prop Types
 * @private
 */
const propTypes = {
  filtered: React.PropTypes.bool,
  onClickDelete: React.PropTypes.func,
  onClickTodo: React.PropTypes.func,
  status: React.PropTypes.string,
  text: React.PropTypes.string,
  archive: React.PropTypes.bool,
};

/**
 * Default Props
 * @private
 */
const defaultProps = {
  filtered: false,
  onClickDelete: noop,
  onClickTodo: noop,
  onClickArchive: noop,
  status: '',
  text: '',
  archive: false,
};

/**
 * Todo component
 * @returns {ReactElement}
 */
const Todo = ({
  filtered,
  onClickDelete,
  onClickTodo,
  onClickArchive,
  status,
  text,
  archive }) => {
  /**
   * Base CSS class
   */
  const baseCls = 'todo';

  const todoCls = baseCls
    + (status === 'complete' ? ' todo--status-complete' : '')
    + (filtered ? ' todo--filtered' : '');

//Show Archive button for completed items only
  const showArchiveButton = () => {
    if (status == 'complete') {
      return (
        <Button text="Archive" onClick={onClickArchive} />
      )
    }
  }

  return (
    <li className={todoCls}>
      <TodoLink text={text} onClick={onClickTodo} />

      {showArchiveButton()}

      <Button text="X" onClick={onClickDelete} />
    </li>
  );
}

Todo.propTypes = propTypes;
Todo.defaultProps = defaultProps;

export default Todo;
