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
            // Smooth transition and redirect
            setTimeout(function() {
                $('body').addClass('fade-out'); // Add fade-out class
                setTimeout(function() {
                    window.location.href = 'invitation.html'; // Redirect after fade-out
                }, 200); // Delay to match the fade-out duration
            }, 3000); // Initial delay before fade-out
        }
    });

    console.log("Entire page is fully loaded");
};

const guestName = document.getElementById("guestName");
        
const queryString = window.location.search;

// Create a new URLSearchParams object
const params = new URLSearchParams(queryString);

// Retrieve specific parameters using .get()
let finalname=atob(params.get('invite')||"RGVhciBHdWVzdA==");
        
guestName.innerText = finalname;
