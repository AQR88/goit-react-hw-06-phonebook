import css from './filtration.module.css';

import { useDispatch } from 'react-redux';
import { updateFilter } from '../../redux/contactsSlice';

const Filtration = () => {
  const dispatch = useDispatch();
  // const filter = useSelector(state => state.contacts.filter);
  let localFilter = '';

  const handleChange = event => {
    localFilter = event.target.value;
    dispatch(updateFilter(localFilter));
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={localFilter}
        placeholder="Search"
        onChange={handleChange}
      />
    </label>
  );
};

export default Filtration;
