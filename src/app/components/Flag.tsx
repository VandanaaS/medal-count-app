interface FlagProps {
  countryIndex: number;
}

export default function Flag({ countryIndex }: FlagProps) {
  return (
    <div
      style={{
        width: 24,
        height: 16,
        backgroundImage: "url(/flags.png)",
        backgroundPosition: `0 -${countryIndex * 16}px`,
        backgroundSize: "100% auto",
        display: "inline-block",
        border: "1px solid #ccc",
      }}
    />
  );
}
