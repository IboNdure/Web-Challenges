import { useEffect, useState } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ISSTracker() {
  const { data, error, isLoading, mutate } = useSWR(
    "https://api.wheretheiss.at/v1/satellites/25544",
    fetcher,
    {
      refreshInterval: 5000,
    }
  );

  if (isLoading) return <div>Load Position of ISS ...</div>;
  if (error) return <div> Fehler {error.message}</div>;

  const longitude = data?.longitude;
  const latitude = data?.latitude;

  return (
    <main>
      <Map longitude={longitude} latitude={latitude} />
      <Controls
        longitude={longitude}
        latitude={latitude}
        onRefresh={() => mutate()}
      />
    </main>
  );
}
