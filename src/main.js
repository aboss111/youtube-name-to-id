// Import required modules
const { remote, ipcRenderer } = require('electron')

// minimize window function
document.getElementById('min').addEventListener('click', () => {
    remote.getCurrentWindow().minimize()
})

// close window function
document.getElementById('close').addEventListener('click', () => {
    remote.app.quit()
})

//Get API
function getAPI() {
    var channelName = document.getElementById('channel_name').value;
    var userID = document.getElementById('user_id');

    fetch('https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&forUsername='+channelName+'&key=insert_api_key')
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            userID.innerHTML = data.items[0].id;
            userID.style = "float: left; position: relative; top: 15px; right: 80px;"
            document.getElementById('user_img').src = data.items[0].snippet.thumbnails.default.url;
            document.getElementById('user_img').style = "border-radius: 50%; float: left; position: relative; top: 15px; width: 50px; margin-right: 10px;";
        })
}
