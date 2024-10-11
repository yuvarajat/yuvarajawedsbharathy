window.onload = function () {
  $(document).ready(function () {
    var envelope = $("#envelope");
    var sealHeart = $("#sealHeart");
    var clickHereText = $("#clickHereText");
    var toOpen = $("#toOpen");
    var clickTimeout;

    //Preload decorations images
    var decorationImgLeft = new Image();
    decorationImgLeft.src = "../assets/img/left.png";

    var decorationImgRight = new Image();
    decorationImgRight.src = "../assets/img/right.png";

    // Preload background image for invitation.html
    var bgImage = new Image();
    bgImage.src = "../assets/img/DSC_7560.webp"; // Set the correct image path here

    // $(document).on('click', function(){
    //     document.getElementById("my_audio").play();
    // });

    // Set a timeout to show the "Click Here" text after 3 seconds
    clickTimeout = setTimeout(function () {
      clickHereText.show();
      toOpen.show();
    }, 3000); // 3 seconds

    // Open the envelope when it is clicked
    envelope.on("click", function () {
      clearTimeout(clickTimeout); // Clear the timeout if the user clicks
      clickHereText.hide(); // Hide the "Click Here" text
      toOpen.hide();
      sealHeart.hide();
      openEnvelope();
    });

    function openEnvelope() {
      envelope.addClass("open").removeClass("close");
      // Smooth transition and redirect
      setTimeout(function () {
        $("body").addClass("fade-out"); // Add fade-out class
        setTimeout(function () {
          window.location.href = "invitation.html"; // Redirect after fade-out
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
let finalname = atob(params.get("invite") || "RGVhciBHdWVzdA==");

guestName.innerText = finalname;
