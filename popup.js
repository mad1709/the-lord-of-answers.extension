let suggestions = [];

fetch('suggestions.json')
    .then(response => response.json())
    .then(data => {
        suggestions = data;
        // Bây giờ bạn có thể sử dụng mảng `suggestions` như bình thường
    })
    .catch(error => console.error('Error loading suggestions:', error));

function showSuggestion() {
    console.log("Preparing to show suggestion...");
    document.getElementById('message').style.display = 'none';
    document.getElementById('countdown').innerHTML = "3";
    setTimeout(() => { document.getElementById('countdown').innerHTML = "2"; }, 1000);
    setTimeout(() => { document.getElementById('countdown').innerHTML = "1"; }, 2000);
    setTimeout(() => { 
        document.getElementById('countdown').style.display = 'none';
        document.getElementById('suggestion').innerText = suggestions[Math.floor(Math.random() * suggestions.length)];
        document.getElementById('fireworks').style.display = 'block';
        console.log("Suggestion shown.");
    }, 3000);
}

setTimeout(showSuggestion, 2000);
