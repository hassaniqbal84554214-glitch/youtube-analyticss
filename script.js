function loadData() {
    let search = document.getElementById("searchBox").value;

    document.getElementById("result").innerHTML = "<h3>Loading...</h3>";

    fetch("https://yt-api.p.rapidapi.com/trending?geo=US", {
        method: "GET",
        headers: {
            "x-rapidapi-key": "YOUR_API_KEY_HERE",
            "x-rapidapi-host": "yt-api.p.rapidapi.com"
        }
    })
    .then(res => res.json())
    .then(data => {

        let html = "";

        data.data.forEach(video => {
            if (video.viewCount >= 1000000) {

                if (search === "" || video.title.toLowerCase().includes(search.toLowerCase())) {

                    html += `
                        <div class="video-card">
                            <h2>${video.title}</h2>
                            <p>Views: ${video.viewCount.toLocaleString()}</p>
                            <a href="https://www.youtube.com/watch?v=${video.videoId}" target="_blank">Watch Video</a>
                        </div>
                    `;
                }
            }
        });

        document.getElementById("result").innerHTML = html;

    })
    .catch(err => {
        document.getElementById("result").innerHTML = "<h3>Error loading data.</h3>";
    });
}
