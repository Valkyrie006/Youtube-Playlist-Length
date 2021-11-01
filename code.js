var ytp = document.querySelectorAll("ytd-playlist-video-list-renderer > #contents > ytd-playlist-video-renderer");
calculateTime() // change here to -> calculateTime(l - 1, r); 
                 // To get playlist length from [l, r]
function calculateTime(l = 0, r = ytp.length) {
    var time = 0;

    for (var i = l; i < r; i++) {
        var a = ytp[i].getElementsByTagName('ytd-thumbnail-overlay-time-status-renderer')[0].innerText;
        var tx = a.split(':');
        if (tx.length < 3) {
            time = time + Number(tx[0]) * 60 + Number(tx[1]);
        } else if (tx.length = 3) {
            time = time + Number(tx[0]) * 60 * 60 + Number(tx[1]) * 60 + Number(tx[2]);
        }
    }

    var ytpT = convertS(time)
    var show = 'YouTube Playlist \n --------------- \n Total Videos : ' + (r - l) + '\n Total Duration : ' + ytpT + '\n Avg. Duration  : ' + convertS(time / (r - l));
    alert(show);
}

function convertS(sec) {
    var hrs = Math.floor(sec / 3600);
    var min = Math.floor((sec - (hrs * 3600)) / 60);
    var seconds = sec - (hrs * 3600) - (min * 60);
    seconds = Math.round(seconds * 100) / 100

    var result = (hrs < 10 ? "0" + hrs : hrs) + ' Hours ';
    result += (min < 10 ? "0" + min : min) + " Min ";
    result += (seconds < 10 ? "0" + seconds : seconds) + ' Sec ';
    return result;
}