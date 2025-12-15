const bttn_one = document.getElementById("bttn_one");
const bttn_two = document.getElementById("bttn_two");
const bttn_three = document.getElementById("bttn_three");
const page = document.getElementById("bttn_three");

var textone = "";
var texttwo = "";
var textthree = "";

var dir_txt = (document.getElementById("title"));
var category_num = -1;

var dir_2D = [ 
    ["[half]", "[color]", "[nocolor]"], 
    ["[full]", "[color]", "[nocolor]"], 
    ["[etc]", "[bust]", "[misc]"] 
];

var dir_3D = [ 
    ["[model]", "[lpoly]", "[hpoly]"], 
    ["[object]", "[lpoly]", "[hpoly]"], 
    ["[etc]", "[scene]", "[misc]"] 
];

var dir_music = [
    ["[all]", "[soundtrap]", "[beepbox]"]
    ["[beepbox]", "[all]", "[soundtrap]"]
    ["[soundtrap]", "[beepbox]", "[all]"]
]

var class_2D = [
    ".half", ".hcolor", ".hnocolor",
    ".full", ".fcolor", ".fnocolor",
    ".etc", ".bust", ".misc"
];

var class_3D = [ 
    ".model", ".mlowpoly", ".mhighpoly",
    ".object", ".olowpoly", ".ohighpoly",
    ".etc", ".scene", ".misc"
];

var class_music = [ 
    ".model", ".mlowpoly", ".mhighpoly"
];

var chosen_dir = [];

var chosen_class = [];

var chosen_size = [];

function to2DArt() {
    window.location.replace("https://sillyguy.nekoweb.org/html/2D_art");
}
function to2DPricing() {
    window.location.replace("https://sillyguy.nekoweb.org/html/2D_pricing");
}
function to3DArt() {
    window.location.replace("https://sillyguy.nekoweb.org/html/3D_art.html");
}
function to3DPricing() {
    window.location.replace("https://sillyguy.nekoweb.org/html/3D_pricing.html");
}
function toAbout() {
    window.location.replace("https://sillyguy.nekoweb.org/html/about.html");
}
function toCodes() {
    window.location.replace("https://sillyguy.nekoweb.org/html/codes.html");
}
function toCommissions() {
    window.location.replace("https://sillyguy.nekoweb.org/html/commissions.html");
}
function toDirectories() {
    window.location.replace("https://sillyguy.nekoweb.org/html/directories.html");
}
function toGallery() {
    window.location.replace("https://sillyguy.nekoweb.org/html/gallery.html");
}
function toGuestbook() {
    window.location.replace("https://sillyguy.nekoweb.org/html/guestbook.html");
}
function toHome() {
    window.location.replace("https://sillyguy.nekoweb.org/html/home.html");
}
function toLinks() {
    window.location.replace("https://sillyguy.nekoweb.org/html/links.html");
}
function toLogs() {
    window.location.replace("https://sillyguy.nekoweb.org/html/logs.html");
}
function toMisc() {
    window.location.replace("https://sillyguy.nekoweb.org/html/misc.html");
}
function toNotFound() {
    window.location.replace("https://sillyguy.nekoweb.org/html/not_found.html");
}
function toPricing() {
    window.location.replace("https://sillyguy.nekoweb.org/html/pricing.html");
}
function toRooms() {
    window.location.replace("https://sillyguy.nekoweb.org/html/rooms.html");
}
function toTos() {
    window.location.replace("https://sillyguy.nekoweb.org/html/TOS.html");
}
function toIndex() {
    window.location.replace("https://sillyguy.nekoweb.org");
}

// gets title of page
function getTitle() {
    return dir_txt.innerText;
}

// assigns direction and class based on title
function setDirAndClass() {
    switch (getTitle()) {
        case "featured 2D art":
            chosen_dir = dir_2D;
            chosen_class = class_2D;
            break;
        case "featured 3D art":
            chosen_dir = dir_3D;
            chosen_class = class_3D;
            break;
        case "featured music":
            chosen_dir = dir_3D;
            chosen_class = class_music;
            break;
        default:
    }
}

// sets category based on the text of the chosen direction
function getCategory() {
    if(bttn_one.innerText == chosen_dir[0][0]) {
        return 0;
    } else if(bttn_one.innerText == chosen_dir[1][0]) {
        return 3;
    } else if(bttn_one.innerText == chosen_dir[2][0]) {
        return 6;
    } 
    return -1;
}

// assigns text to the buttons
function setCategoryText() {
    bttn_one.innerText = textone;
    bttn_two.innerText = texttwo;
    bttn_three.innerText = textthree;
    categorytxt = bttn_one.innerText;
}

// sets text to categories
function setCategory(row) {
    textone = chosen_dir[row][0];
    texttwo = chosen_dir[row][1];
    textthree = chosen_dir[row][2];
}

// hides whatever class is passed into the function
function hideClass(hide) {
    var hideableSections = document.querySelectorAll(hide);
    for (var i = 0; i < hideableSections.length; i++) {
        hideableSections[i].style.display = "none";
  }
}

// displays whatever class is passed into the function
function showClass(show) {
    var hideableSections = document.querySelectorAll(show);
    for (var i = 0; i < hideableSections.length; i++) {
        hideableSections[i].style.display = "block";
  }
}

// show all images
function showAll() {
    category_num = getCategory();
    textone = chosen_dir[0][0];
    texttwo = chosen_dir[1][0];
    textthree = chosen_dir[2][0];
    setCategoryText();
    showClass(".allimg");
}

// first button
function bttnOne() {
    category_num = getCategory();
    if(bttn_one.innerText == chosen_dir[0][0]) {
        setCategory(0);
        hideClass(".allimg");
        showClass(chosen_class[0]);
    } else if (bttn_one.innerText == chosen_dir[1][0]) {
        setCategory(1);
        hideClass(".allimg");
        showClass(chosen_class[3]);
    } else if (bttn_one.innerText == chosen_dir[2][0]) {
        setCategory(2);
        hideClass(".allimg");
        showClass(chosen_class[6]);
    }
    setCategoryText();
}

// second button
function bttnTwo() {
    category_num = getCategory();
    if(bttn_two.innerText == chosen_dir[1][0]) {
        setCategory(1);
        hideClass(".allimg");
        showClass(chosen_class[3]);
    } else {
        hideClass(".allimg");
        showClass(chosen_class[category_num+1]);
    }
    setCategoryText();
}

// third button
function bttnThree() {
    category_num = getCategory();
    if(bttn_three.innerText == chosen_dir[2][0]) {
        setCategory(2);
        hideClass(".allimg");
        showClass(chosen_class[6]);
    } else {
        hideClass(".allimg");
        showClass(chosen_class[category_num+2]);
    }
    setCategoryText();
}

function isUp() {
    if (!up) {
        toIndex();
    } else {
        if (window.location.href == "https://sillyguy.nekoweb.org") {
            toHome();
        }
    }
}