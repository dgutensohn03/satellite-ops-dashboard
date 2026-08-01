export async function getTLE(noradId) {
    const url = `https://celestrak.org/NORAD/elements/gp.php?CATNR=${noradId}&FORMAT=TLE`;
    const response = await fetch(url);
    return response.text();
}
