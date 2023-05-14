async function fetchApi(apiUrl) {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  }

function selectRandom(ids) {
    const randomId = Math.floor(Math.random() * ids.length);
    return ids[randomId];
}
  
(async function() {
    const randomId = selectRandom([533,531,541,551])
    const result = await fetchApi("https://health.gov/myhealthfinder/api/v3/topicsearch.json?lang=es&topicId="+randomId);
    const title = (result.Result.Resources.Resource[0].Title);
    const targetUrl = (result.Result.Resources.Resource[0].AccessibleVersion);
    document.getElementById("recomendacionVacunaGobUSA").textContent = title;
    document.getElementById("recomendacionVacunaGobUSA").href = targetUrl;
})();