// Get Current Year
function getCurrentYear() {
    var d = new Date();
    var year = d.getFullYear();
    document.querySelector("#displayDateYear").innerText = year;
}
getCurrentYear()

//client section owl carousel
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
        '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

function addData(event){
    event.preventDefault();

    var name = document.getElementById('name').value;
    var phone = document.getElementById('phoneNumber').value;
    var email = document.getElementById('email').value;

    var tableBody=document.getElementById('list').getElementsByTagName('tbody')[0];

    var tr = tableBody.insertRow();

    var nameCell = tr.insertCell(0);
    var phoneCell = tr.insertCell(1);
    var emailCell = tr.insertCell(2);

    nameCell.textContent = name;
    phoneCell.textContent = phone;
    emailCell.textContent = email;

    document.getElementById('name').value = '';
    document.getElementById('phoneNumber').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}