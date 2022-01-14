import classes from './Search.module.css'

function Search({ placeholder, handleChange }) {
    return (
        <input className={classes.search} type='search' placeholder={placeholder} onChange={handleChange} />
    )
}

export default Search;