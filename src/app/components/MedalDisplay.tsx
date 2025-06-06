import Flag from "../components/Flag";
import styles from "../styles/MedalsDisplay.module.css";

export default function MedalDisplay({
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
          className={`col-1 text-warning ${styles.sortable}`}
          onClick={() => onSortChange("gold")}
        >
          <svg width="14" height="14" viewBox="0 0 100 100" className="me-1">
            <polygon
              points="50,0 93,25 93,75 50,100 7,75 7,25"
              fill="#FFD700"
            />
          </svg>
          {getArrow("gold")}
        </div>

        <div
          className={`col-1 text-secondary ${styles.sortable}`}
          onClick={() => onSortChange("silver")}
        >
          <svg width="14" height="14" viewBox="0 0 100 100" className="me-1">
            <polygon
              points="50,0 93,25 93,75 50,100 7,75 7,25"
              fill="#C0C0C0"
            />
          </svg>
          {getArrow("silver")}
        </div>

        <div
          className={`col-1 ${styles.bronze} ${styles.sortable}`}
          onClick={() => onSortChange("bronze")}
        >
          <svg width="14" height="14" viewBox="0 0 100 100" className="me-1">
            <polygon
              points="50,0 93,25 93,75 50,100 7,75 7,25"
              fill="#CD7F32"
            />
          </svg>
          {getArrow("bronze")}
        </div>

        <div
          className={`col-2 ${styles.sortable}`}
          onClick={() => onSortChange("total")}
        >
          <svg width="14" height="14" viewBox="0 0 100 100" className="me-1">
            <polygon
              points="50,0 93,25 93,75 50,100 7,75 7,25"
              fill="#6c757d"
            />
          </svg>
          Total {getArrow("total")}
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
