
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { setQuery } from '../../store/reducers/headerReducer';


function Header () {

    const dispatch = useDispatch<AppDispatch>();
    const query = useSelector((state: RootState) => state.search.query);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuery(e.target.value));
  };
    

    return (
        <div>
        <input type="text" value={query} onChange={handleChange} />

        <button>Search</button>
        <Link to="/about">
        <button>About Page</button>
        <button>Theme</button>
        </Link>
        </div>
    )
}







export default Header;







/* class Header extends React.Component {



    render(): React.ReactNode {

        return (
            <div>
            <input type="text" />

            <button>Search</button>
            </div>
        )
    }

}



export default Header; */