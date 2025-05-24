"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { medalsData } from "@/app/hooks/getMedalData";
import { sortMedals } from "@/app/utils/sortUtils";
import MedalDisplay from "@/app/components/MedalDisplay";

export default function Page() {
  const searchParams = useSearchParams();
  // const router = useRouter();

  // get the sort type from the URL or default to "gold"
  const initialSort = searchParams.get("sort") || "gold";

  const [sortKey, setSortKey] = useState(initialSort);
  const { data, error } = medalsData();

  // update URL when sortKey changes
  useEffect(() => {
    const newURL = `?sort=${sortKey}`;
    window.history.replaceState(null, "", newURL);
  }, [sortKey]);

  // show loading or error
  if (error) return <p className="text-danger text-center mt-4">{error}</p>;
  if (!data) return <p className="text-center mt-4">Loading medal data...</p>;

  // sort data and calculate flag indexes
  const sortedData = sortMedals(data, sortKey);
  const flagIndexMap = {};
  const sortedCountryCodes = [...data].sort((a, b) =>
    a.code.localeCompare(b.code)
  );
  sortedCountryCodes.forEach((country, index) => {
    flagIndexMap[country.code] = index;
  });

  return (
    <div>
      <MedalDisplay
        data={sortedData}
        sortKey={sortKey}
        onSortChange={setSortKey}
        flagIndexMap={flagIndexMap}
      />
    </div>
  );
}
