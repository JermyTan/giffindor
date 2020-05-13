import { useEffect, useState, useCallback, useRef } from "react";
import firebase from "./firebase";
import Axios from "axios";
import { giphyApiKey } from "../config/keys";
import { Gif } from "../components/gif-list/GifList";
import AvatarImage from "../assets/avatar.jpg";

type ActionType = "CONCAT_GIFS" | "FETCH_GIFS" | "NEXT_PAGE";

export type Action = {
  type: ActionType;
  [key: string]: any;
};

type Dispatch = (action: Action) => void;

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

export function useLazyLoading(gifSelector: any, items: any) {
  const gifObserver = useCallback((node) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          const currentGif = entry.target as any;
          const newGifSrc = currentGif.dataset.src;
          currentGif.src = !newGifSrc ? AvatarImage : newGifSrc;
          observer.unobserve(node);
        }
      });
    });
    observer.observe(node);
  }, []);

  const gifsRef = useRef<NodeListOf<any>>();

  useEffect(() => {
    gifsRef.current = document.querySelectorAll(gifSelector);

    if (gifsRef.current) {
      gifsRef.current.forEach((gif) => gifObserver(gif));
    }
  }, [gifObserver, gifsRef, gifSelector, items]);
}

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
    if (scrollRef.current) {
      scrollObserver(scrollRef.current);
    }
  }, [scrollObserver, scrollRef]);
}

export function useFetchGif(data: any, dispatch: Dispatch) {
  useEffect(() => {
    dispatch({ type: "FETCH_GIFS", fetching: true });
    Axios.get(
      `https://api.giphy.com/v1/gifs/trending?api_key=${giphyApiKey}&offset=${
        data.page * LIMIT
      }&limit=${LIMIT}`
    ).then((response) => {
      console.log(response);
      if (response.status === 200) {
        const parsedData: Gif[] = parseData(response.data.data);
        console.log(parsedData);

        dispatch({ type: "CONCAT_GIFS", gifs: parsedData });
        dispatch({ type: "FETCH_GIFS", fetching: false });
      }
    });
  }, [data.page, dispatch]);
}

export function useFavourites(uid: string) {
  const [favourites, setFavourites] = useState(new Set<string>());

  const ref = firebase.database().ref(`users/${uid}/favouriteGifs`);

  useEffect(() => {
    // retrieves favourite gifs and set up observer on db
    ref.on("value", (snapshot) => {
      const result = snapshot.val();
      console.log(result);
      setFavourites(new Set(Object.keys(result ?? {})));
    });
    // cleanup function, removes observer
    return () => ref.off("value");
  });

  const addToFavourites = (gifId: string) => ref.child(gifId).set(true);

  const removeFromFavourites = (gifId: string) => ref.child(gifId).remove();

  return [favourites, addToFavourites, removeFromFavourites];
}
