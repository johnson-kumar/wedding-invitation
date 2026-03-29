async function checkGuest() {
    const inputNum = document.getElementById('mobileInput').value.trim();
    const errorMsg = document.getElementById('error-msg');
    
    // IMPORTANT: Replace this with your Google Sheet CSV Link
    const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ39MpyVBKsQGbJQ-9ohqSrCmzSxqytZ7ZOi85JXKk1hBPAVLJvXC7OAuQElg3f7c9LiJr_-s8n3L-r/pub?output=csv'; 

    try {
        const response = await fetch(csvUrl);
        const data = await response.text();
        
        const rows = data.split('\n').slice(1); 
        let guestName = null;

        for (let row of rows) {
            const columns = row.split(',');
            if (columns.length >= 2) {
                const mobile = columns[0].trim();
                const name = columns[1].trim();
                
                if (mobile === inputNum) {
                    guestName = name;
                    break;
                }
            }
        }

        if (guestName) {
            document.getElementById('login-overlay').style.display = 'none';
            document.getElementById('invitation-content').style.display = 'block';
            document.getElementById('guestNameDisplay').innerText = `Welcome, ${guestName} & Family`;
            window.scrollTo(0, 0); // Scroll to top
        } else {
            // Show "You are not invited" message
            errorMsg.style.display = 'block';
            errorMsg.classList.add('animate__animated', 'animate__shakeX');
        }
    } catch (err) {
        alert("Check your connection.");
    }
}