import css from './Filter.module.css';

const Filter = ({ filterValue, onChange }) => (
  <>
    <label
      htmlFor="filter-field"
      className={`${css.filter__field} ${css.filter__field_label}`}
    >
      Find contacts by name
      <input
        id="filter-field"
        className={css.filter__field_input}
        type="text"
        value={filterValue}
        onChange={onChange}
      />
    </label>
  </>
);

export default Filter;
