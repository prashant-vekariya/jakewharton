import React, { useState, useEffect } from "react";
import AppList from "../../components/AppList";
import styles from "./styles.module.css";
import InfiniteScroll from "react-infinite-scroll-component";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { List, fetchMoreData } from "../../redux/actions/list";

const BASE_URL = "https://api.github.com/users/JakeWharton/repos?";

function JakeGit() {
  const [hasMore, setHasMore] = useState(true);

  const Lists = useSelector((state) => state.List.List);
  const CurrentPages = useSelector((state) => state.List.hasMore);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const fetchApi = await axios(
          BASE_URL + "page=" + CurrentPages + "&per_page=15"
        );
        var data = fetchApi.data;
        if (fetchApi.status === 200) {
          if (data.length < 15) {
            setHasMore(false);
          }
          if (!data.length) {
            setHasMore(false);
          }
          dispatch(List(data));
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [CurrentPages]);

  const fetchMoreDatas = () => {
    dispatch(fetchMoreData(CurrentPages));
  };

  return (
    <div>
      <div className={styles.navbarback}></div>
      <div className={styles.navbar + " p-3"}>
        <h5>Jake's Git</h5>
      </div>
      <InfiniteScroll
        dataLength={Lists.length}
        next={fetchMoreDatas}
        hasMore={hasMore}
        loader={
          <h4 style={{ textAlign: "center" }}>
            <ClipLoader color="#4b6781" size={35} />
          </h4>
        }
        endMessage={
          <p style={{ textAlign: "center" }}>{/* <b>No more..!</b> */}</p>
        }
      >
        {Lists.map((data) => {
          return <AppList data={data} />;
        })}
      </InfiniteScroll>
    </div>
  );
}

export default JakeGit;
