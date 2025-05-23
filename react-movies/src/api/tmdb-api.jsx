
//Static endpoints

export const getMovies = () => {
  return fetch(
    `http://localhost:8080/api/movies/discover`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
  .catch((error) => {
      throw error
  });
};

export const getGenres = () => {
  return fetch(
    `http://localhost:8080/api/movies/genre`

  ).then( (response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};

export const getUpcomingMovies = () => {
  return fetch(
    `http://localhost:8080/api/movies/upcoming`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
  .catch((error) => {
    throw error;
  });
};

export const getPopularMovies = () => {
  return fetch(
    `http://localhost:8080/api/movies/popular`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
  .catch((error) => {
    throw error;
  });
};

export const getTopRatedMovies = () => {
  return fetch(
    `http://localhost:8080/api/movies/top_rated`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
  .catch((error) => {
    throw error;
  });
};

export const getNowPlayingMovies = () => {
  return fetch(
    `http://localhost:8080/api/movies/now_playing`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
  .catch((error) => {
    throw error;
  });
};

//Parameterised endpoints

export const getMovie = async (args) => {
  console.log(args);
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  
  const response = await fetch(`http://localhost:8080/api/movies/${id}`);
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.status_message || "Something went wrong");
  }
  
  return await response.json();
};


export const getMovieImages = async (args) => {
  console.log(args);
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  
  const response = await fetch(`http://localhost:8080/api/movies/${id}/images`);
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.status_message || "Something went wrong");
  }
  
  return await response.json();
};



export const getMovieReviews = async (args) => {
  console.log(args);
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  
  const response = await fetch(`http://localhost:8080/api/movies/${id}/reviews`);
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.status_message || "Something went wrong");
  }
  
  return await response.json();
};


export const getMovieCredits = async (args) => {
  console.log(args);
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  
  const response = await fetch(`http://localhost:8080/api/movies/${id}/credits`);
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.status_message || "Something went wrong");
  }
  
  return await response.json();
};

export const getMovieRecommendations = async (args) => {
  console.log(args);
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  
  const response = await fetch(`http://localhost:8080/api/movies/${id}/recommendations`);
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.status_message || "Something went wrong");
  }
  
  return await response.json();
};
