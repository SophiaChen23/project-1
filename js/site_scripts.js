// Create the section element
var section = document.createElement("section");

// Create a div to hold the list items
var div = document.createElement("div");
div.id = "partners";

// Create an array of partner image sources and alt texts
var partners = [
    { src: "images/sponsors/footer-usssa-logo-2.png", alt: "Partner Bus Tours" },
    { src: "images/sponsors/footer-ndpa-logo.png", alt: "Partner Cabin Rental" },
    { src: "images/sponsors/footer-member-issa-logo.png", alt: "Partner Camping Adventure" },
    { src: "images/sponsors/footer-stop-drowning-now-logo.png", alt: "Partner College Tours" },
];

// Iterate through the partners array and create list items with images
for (var i = 0; i < partners.length; i++) {
    var partner = partners[i];

    // Create the list item element
    var listItem = document.createElement("div");
    listItem.className = "partner";

    // Create the image element
    var img = document.createElement("img");
    img.src = partner.src;
    img.alt = partner.alt;

    // Append the image element to the list item
    listItem.appendChild(img);

    // Append the list item to the div
    div.appendChild(listItem);
}

// Append the div to the section
section.appendChild(div);

// Append the section to the desired parent element in the document
var parentElement = document.getElementById("partners");
parentElement.appendChild(section);
