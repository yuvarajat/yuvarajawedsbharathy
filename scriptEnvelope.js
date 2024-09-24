window.onload = function() {
    $(document).ready(function() {
        var envelope = $('#envelope');
        
        // Automatically open the envelope after 2 seconds (2000 ms)
        setTimeout(function() {
            openEnvelope();
        }, 1000);
        
        function openEnvelope() {
            envelope.addClass('open')
                .removeClass('close');
        }
    });

    console.log("Entire page is fully loaded");
};

const guestName = document.getElementById("guestName");
        
const queryString = window.location.search;

// Create a new URLSearchParams object
const params = new URLSearchParams(queryString);

// Retrieve specific parameters using .get()
let finalname=atob(params.get('guestName')||"R3Vlc3Q=");
        
guestName.innerText = finalname;
