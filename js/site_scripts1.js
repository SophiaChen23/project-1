// Create the section element
var section = document.createElement("section");

// Create a div to hold the list items
var div = document.createElement("div");
div.id = "partner1";

// Create an array of partner image sources and alt texts
var partners = [
    { src: "images/awards/bay-area-parent-2019.jpeg", alt: "" },
    { src: "images/awards/bay-area-parent-gold2020.png", alt: "" },
    { src: "images/awards/best-colorado-community-media-2021.jpeg", alt: "" },
    { src: "images/awards/best-of-la-kids-winner.jpeg", alt: "" },
    { src: "images/awards/best-of-the-best-2018.jpeg", alt: "" },
    { src: "images/awards/colorado-parenting-family-fav2019.jpeg", alt: "" },
    { src: "images/awards/colorado-parenting-family-fav2020.png", alt: "" },
    { src: "images/awards/colorado-parenting-family-fav2021.png", alt: "" },
    { src: "images/awards/gold-daisy-award-finalist-2018.jpeg", alt: "" },
    { src: "images/awards/website-parenting-oc-2019.jpeg", alt: "" },
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
var parentElement = document.getElementById("partner1");
parentElement.appendChild(section);
