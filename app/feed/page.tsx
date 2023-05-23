import React, { Suspense } from "react";
import FeedList from "./FeedList";

const feedPage = async () => {
  // const { data } = useFeed();
  const idolData = await getArtist();

  console.log(idolData);
  return (
    <>
      <FeedList idolData={idolData} />
      <p>{idolData?.idol_name_kr}</p>
    </>
  );
};

export default feedPage;

async function getArtist() {
  const res = await fetch(`https://backend.myfavor.site/api/v1/idols/1/`);
  return res.json();
}
