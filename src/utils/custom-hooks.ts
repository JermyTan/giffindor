import { useEffect, useState, useCallback } from "react";
import firebase from "./firebase";
import Axios from "axios";
import { giphyApiKey } from "../keys";
import { Gif } from "../components/body/gif-item/GifItem";
import { IndexRange } from "react-virtualized";

const LIMIT = 10;

/*
".id";
".title";
".images.fixed_width.url";
".import_datetime";
".user.display_name";
".user.avatar_url"
*/

function parseData(data: any[]): Gif[] {
  return data.map((value: any) => {
    return {
      id: value?.id,
      title: value?.title,
      gifUrl: value?.images?.fixed_width.url,
      uploadDate: value?.import_datetime,
      uploader: value?.user?.display_name,
      profileUrl: value?.user?.avatar_url,
    };
  });
}

export function useTrendingGif() {
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [hasNextPage, setHasNextPage] = useState(true);

  const fetchTrendingGifs = (params: IndexRange) => {
    setLoading(true);
    const { startIndex, stopIndex } = params;

    return Axios.get(
      `https://api.giphy.com/v1/gifs/trending?api_key=${giphyApiKey}&offset=${startIndex}&limit=${
        stopIndex - startIndex + LIMIT
      }`
    ).then((response) => {
      console.log(response);
      if (response.status === 200) {
        const parsedData: Gif[] = parseData(response.data.data);
        console.log(parsedData);

        if (parsedData.length < LIMIT) {
          setHasNextPage(false);
        }

        setGifs(gifs.concat(parsedData));
        setLoading(false);
      }
    });
  };

  return [loading, gifs, hasNextPage, fetchTrendingGifs];
}

export function useSearchGif(searchTerm: string) {
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [hasNextPage, setHasNextPage] = useState(true);

  useEffect(() => {
    setGifs([]);
    setHasNextPage(true);
    setLoading(false);
  }, [searchTerm]);

  const fetchSearchGifs = (params: IndexRange) => {
    setLoading(true);
    const { startIndex, stopIndex } = params;
    console.log(startIndex, stopIndex);
    return Axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=${searchTerm}&limit=${
        stopIndex - startIndex + LIMIT
      }&offset=${startIndex}`
    ).then((response) => {
      console.log(response);
      if (response.status === 200) {
        const parsedData: Gif[] = parseData(response.data.data);
        console.log(parsedData);

        if (parsedData.length < LIMIT) {
          setHasNextPage(false);
        }

        setGifs(gifs.concat(parsedData));
        setLoading(false);
      }
    });
  };

  return [loading, gifs, hasNextPage, fetchSearchGifs];
}

export function useFavourites(uid: string) {
  const [favouritesData, setFavouritesData] = useState([
    new Set<string>(),
    Array<Gif>(),
  ]);

  const ref = firebase.database().ref(`users/${uid}/favouriteGifs`);

  useEffect(() => {
    const retrieveFavouritesData = async (gifIds: string[]) => {
      try {
        const ids = gifIds.join(",");
        const response = await Axios.get(
          `https://api.giphy.com/v1/gifs?api_key=${giphyApiKey}&ids=${ids}`
        );
        const parsedData: Gif[] = parseData(response.data.data);
        setFavouritesData([new Set(gifIds), parsedData]);
      } catch (error) {
        setFavouritesData([new Set(), []]);
      }
    };
    // retrieves favourite gifs and set up observer on db
    ref.on("value", (snapshot) => {
      const result = snapshot.val();
      console.log(result);
      retrieveFavouritesData(Object.keys(result ?? {}));
    });
    // cleanup function, removes observer
    return () => ref.off("value");
  }, [uid]);

  const addToFavourites = (gifId: string) => ref.child(gifId).set(true);

  const removeFromFavourites = (gifId: string) => ref.child(gifId).remove();

  return [...favouritesData, addToFavourites, removeFromFavourites];
}

/*

type ActionType = "CONCAT_GIFS" | "FETCH_GIFS" | "NEXT_PAGE";

export type Action = {
  type: ActionType;
  [key: string]: any;
};

type Dispatch = (action: Action) => void;

export function useInfiniteScroll(scrollRef: any, dispatch: Dispatch) {
  const scrollObserver = useCallback(
    (node) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            dispatch({ type: "NEXT_PAGE" });
          }
        });
      });
      observer.observe(node);
    },
    [dispatch]
  );

  useEffect(() => {
    console.log("scrollRef", scrollRef);
    console.log("scrollRef.currrent", scrollRef.current);
    if (scrollRef.current) {
      scrollObserver(scrollRef.current);
    }
  }, [scrollObserver, scrollRef]);
}
*/
