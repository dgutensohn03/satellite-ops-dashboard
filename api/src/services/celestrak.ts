export async function getTLE(noradId: number) {
  const url =
    `https://celestrak.org/NORAD/elements/gp.php?CATNR=${noradId}&FORMAT=TLE`;

  try {
    const response = await fetch(url, {
      signal: AbortSignal.timeout(15000)
    });

    if (!response.ok) {
      throw new Error(
        `CelesTrak request failed: ${response.status}`
      );
    }

    return await response.text();

  } catch (error) {
    console.error("CelesTrak fetch error:", error);
    throw error;
  }
}