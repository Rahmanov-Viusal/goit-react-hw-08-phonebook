import s from "./FilterContact.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { filterContact } from "../../redux/actions";

const FilterContact = () => {
  const value = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.filterInput}
        onChange={e => dispatch(filterContact(e.target.value))}
        value={value}
      />
    </label>
  );
};

export default FilterContact;
