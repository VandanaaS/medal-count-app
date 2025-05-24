import Flag from "../components/Flag";

export default function MedalGrid({
  data,
  sortKey,
  onSortChange,
  flagIndexMap,
}) {
  const getArrow = (key) => (sortKey === key ? "▼" : "");

  return (
    <div className="container mt-4">
      <h4 className="text-primary fw-bold mb-3">MEDAL COUNT</h4>

      {/* Header */}
      <div className="row fw-bold text-center border-bottom pb-2">
        <div className="col-1">#</div>
        <div className="col-1">Flag</div>
        <div className="col-2">Country</div>
        <div
          className="col-1"
          role="button"
          onClick={() => onSortChange("gold")}
        >
          🥇 {getArrow("gold")}
        </div>
        <div
          className="col-1"
          role="button"
          onClick={() => onSortChange("silver")}
        >
          🥈 {getArrow("silver")}
        </div>
        <div
          className="col-1"
          role="button"
          onClick={() => onSortChange("bronze")}
        >
          🥉 {getArrow("bronze")}
        </div>
        <div
          className="col-2"
          role="button"
          onClick={() => onSortChange("total")}
        >
          🏅 Total {getArrow("total")}
        </div>
      </div>

      {/* Rows */}
      {data.slice(0, 10).map((country, index) => (
        <div className="row text-center py-2 border-bottom" key={country.code}>
          <div className="col-1 fw-bold">{index + 1}</div>
          <div className="col-1">
            <Flag countryIndex={flagIndexMap[country.code]} />
          </div>
          <div className="col-2">{country.code}</div>
          <div className="col-1">{country.gold}</div>
          <div className="col-1">{country.silver}</div>
          <div className="col-1">{country.bronze}</div>
          <div className="col-2 fw-bold">
            {country.gold + country.silver + country.bronze}
          </div>
        </div>
      ))}
    </div>
  );
}
