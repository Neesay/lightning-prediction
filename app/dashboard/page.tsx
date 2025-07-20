'use client';

import useSWR from 'swr';
import Map from '@/components/Map';

const fetcher = (url: string) => fetch(url).then(r => r.json());

export default function Dashboard() {
  const { data, isLoading } = useSWR('/api/predict', fetcher, {
    refreshInterval: 30_000,
  });

  return (
    <div className="flex h-screen flex-col md:flex-row">
      <div className="flex-1">
        <Map tileUrl={data?.tileUrl ?? null} />
      </div>
      <aside className="md:w-80 p-4 bg-white/80 backdrop-blur">
        <h1 className="text-xl font-semibold mb-2">Lightning Now‑Cast</h1>
        {isLoading ? (
          <p>Loading…</p>
        ) : (
          <>
            <p className="text-sm text-gray-700">
              Issued&nbsp;
              <time dateTime={data?.issued}>{data?.issued}</time>
            </p>
            <p className="mt-4">
              Predicted strikes:&nbsp;
              <strong>{data?.geojson?.features?.length ?? 0}</strong>
            </p>
          </>
        )}
      </aside>
    </div>
  );
}
