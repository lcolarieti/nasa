import React, {useEffect} from 'react';
import {fetchPhotos, selectPhotos} from './slice/photos';
import {useDispatch, useSelector} from 'react-redux';
import {store} from './store';

function App() {
  const dispatch = useDispatch();
  const {data, error, errorMessage} = useSelector(selectPhotos);

  useEffect(() => {
    data.length === 0 && dispatch(fetchPhotos())
    console.log(store.getState())
  }, [data]);

  return (
    <div className="App">

    </div>
  );
}

export default App;
