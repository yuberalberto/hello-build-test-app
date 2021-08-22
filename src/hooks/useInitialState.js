import { useState, useEffect } from 'react';

const useInitialState = (API) => {
    const [videos, setVideos] = useState({ myList: [], trends: [], originals: [] });

    useEffect( () => {
      fetch(API)
      .then(response => response.json())
      .then(data => setVideos(data));
    }, [API]);
    // console.log(videos.myList.length);
    return videos;
};

export default useInitialState;