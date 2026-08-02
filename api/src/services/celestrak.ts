export async function getTLE(noradId: number) {
  const url =
    `https://celestrak.org/NORAD/elements/gp.php?CATNR=${noradId}&FORMAT=TLE`;

  const response = await fetch(url, {
    headers: {
      "User-Agent": "satellite-ops-dashboard"
    },
    signal: AbortSignal.timeout(15000)
  });

  if (!response.ok) {
    throw new Error(
      `CelesTrak returned ${response.status}`
    );
  }

  const tle = await response.text();

  if (!tle.trim()) {
    throw new Error("Empty TLE response");
  }

  return tle;
}