import React from 'react';

function FilteredFruitList(props) {
  const list = filterFruits(props.fruit);

  function filterFruits(items) {
    return !props.filter || props.filter === 'all' ? items : items.filter(i => i.fruit_type === props.filter);
  }

  return (
    <ul className="fruit-list">
      {list.map((item, index) => <li key={index}>{item.char}</li>)}
    </ul>
  );
}

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: ''
}

export default FilteredFruitList;
