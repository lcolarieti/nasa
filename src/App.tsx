import React, {useEffect} from 'react';
import {fetchPhotos, selectFetchedPhotos} from './slice/photos';
import {useDispatch, useSelector} from 'react-redux';
import {selectLoading} from './slice/loading';

function App() {
  const dispatch = useDispatch();
  const {data, error, errorMessage} = useSelector(selectFetchedPhotos);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchPhotos())

    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">

    </div>
  );
}

export default App;
