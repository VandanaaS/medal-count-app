export function sortMedals(data, key) {
  let sorted = [...data];

  if (key === "total") {
    sorted.sort((a, b) => {
      let totalA = a.gold + a.silver + a.bronze;
      let totalB = b.gold + b.silver + b.bronze;
      if (totalB !== totalA) return totalB - totalA;
      return b.gold - a.gold;
    });
  } else {
    sorted.sort((a, b) => {
      if (b[key] !== a[key]) return b[key] - a[key];
      return b.gold - a.gold;
    });
  }

  return sorted;
}
