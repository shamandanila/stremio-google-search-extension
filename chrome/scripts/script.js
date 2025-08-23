const addStremioButtonToGoogle = () => {
  let seriesOptions = document.querySelector(
    "div[data-attrid='kc:/tv/tv_program:media_actions_wholepage']",
  );
  let movieOptions = document.querySelector(
    "div[data-attrid='kc:/film/film:media_actions_wholepage']",
  );
  let filmReviewContainer = document.querySelector(
    "div[data-attrid='kc:/film/film:reviews']",
  );
  let seriesReviewContainer = document.querySelector(
    "div[data-attrid='kc:/tv/tv_program:reviews']",
  );

  let watchOption = null;
  let reviewContainer = null;
  let isMovie = true;
  let contentType = "movie";

  if (seriesOptions) {
    watchOption = seriesOptions;
    reviewContainer = seriesReviewContainer;
    isMovie = false;
    contentType = "series";
  } else if (movieOptions) {
    watchOption = movieOptions;
    reviewContainer = filmReviewContainer;
  }

  if (watchOption === null || reviewContainer === null) {
    return;
  }

  let imdbEle = reviewContainer.querySelector(
    "a[href*='https://www.imdb.com/']",
  );

  if (!imdbEle) {
    return;
  }

  let imdbParts = imdbEle.href.split("/");
  let imdbCode = imdbParts.pop() || imdbParts.pop();

  let childCount =
    watchOption.firstElementChild.firstElementChild.childElementCount;

  let watchNowEle =
    watchOption.firstElementChild.firstElementChild.firstElementChild;

  if (childCount === 2) {
    let divEle = document.createElement("div");
    watchNowEle = watchOption.firstElementChild.firstElementChild.insertBefore(
      divEle,
      watchNowEle,
    );
  }

  watchNowEle.innerHTML = `<a href='stremio:///detail/${contentType}/${imdbCode}'>
        <div class="streamio-cta__container">
          <img style='width: 40px;height: 40px;' src='https://www.stremio.com/website/stremio-logo-small.png'/>
          <div>Stremio</div>
          <div>Freedom to stream</div>
        </div>
      </a>`;
};

addStremioButtonToGoogle()
