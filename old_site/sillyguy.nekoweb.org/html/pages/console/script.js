var canvas = document.getElementById('SizeReadingSample');
var ctx = canvas.getContext('2d');
var isDrawing = false;
const pl = document.getElementById("p1");
const printing = document.getElementById("printing");

const width_slider = document.getElementById("canvas-width");
const height_slider = document.getElementById("canvas-height");
const text_slider = document.getElementById("canvas-text-size");
const brush_slider = document.getElementById("canvas-brush-size");

const side_box = document.getElementById("canvas-sides");

const canvas_clear_bttn = document.getElementById("clear-canvas");


var is_square = true;

var text_row = 50;
var text_col = 108;

var brush_size = 5;

var text = makeArray(text_col, text_row, 0);

var text_brush = [ 0, 1 ];

const toggle = () => {
    isDrawing = !isDrawing;
    if(isDrawing) {
        
    } else {
        printText();
    }
};
              
const draw = (destination) => {
    if (isDrawing) {
        const bounding = canvas.getBoundingClientRect();
        const x = event.clientX - bounding.left;
        const y = event.clientY - bounding.top;
        ctx.fillStyle = destination;
        ctx.fillRect(x-brush_size, y-brush_size, brush_size*2, brush_size*2);
    }
    set_text_pixels();
};

width_slider.oninput = function() {
  var temp_row = this.value;
  var temp_col = this.value * 2;
  if (is_square) {
      text_col = this.value * 2;
  }
  text_row = this.value;
  text = makeArray(text_col, text_row, 0);
  set_text_pixels();
  printText();
};

height_slider.oninput = function() {
  if (!is_square) {
      text_col = this.value * 2;
      text = makeArray(text_col, text_row, 0);
      set_text_pixels();
      printText();
  }
};

text_slider.oninput = function() {
  pl.style.fontSize = this.value + "px";
};

brush_slider.oninput = function() {
  brush_size = this.value;
};

side_box.oninput = function() {
  is_square = !is_square;
};

canvas_clear_bttn.oninput = function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  text = makeArray(text_col, text_row, 1);
};

function printText() {
    var teext = "";
    pl.innerText = "";
    for(let i = 0 ; i < text_row; i++) {
        for (let j = 0; j < text_col; j++) {
            teext += text[i][j];
        }
        teext += '\n';
    }    
    pl.innerText = teext;
}

function get_colored_pixels() {
    var arr = [];
    var count = 0;
    for(let i = 0 ; i < text_row; i++) {
        for (let j = 0; j < text_col; j++) {
            if (is_pixel_colored(i, j)) { /// 
                arr[count] = [i, j];
                count++;
            }
        }
    }
    return [arr, count];
}

function set_text_pixels() {
    var temp = get_colored_pixels();
    var arr = temp[0];
    var count = temp[1];
    for (let i = 0; i < count; i++) {
        text[arr[i][0]][arr[i][1]] = 1;
    }
}

function is_pixel_colored(i, j) {
    const bounding = canvas.getBoundingClientRect();
    const x = Math.ceil(bounding.right/text_row);
    const y = Math.ceil(bounding.bottom/text_col);
    const pixel = ctx.getImageData(y*j-brush_size, x*i-brush_size, brush_size*2, brush_size*2).data;
    //printing.innerText = "";
    if(sumOfArray(pixel)) {
        return true;
    }

    return false;
}

function makeArray(w, h, val) {
    var arr = [];
    for(let i = 0; i < h; i++) {
        arr[i] = [];
        for(let j = 0; j < w; j++) {
            arr[i][j] = val;
        }
    }
    return arr;
}

function sumOfArray(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}


canvas.addEventListener("mousedown", (event) => toggle());
canvas.addEventListener("mousemove", (event) => draw("#FFFFFF"));
canvas.addEventListener("mouseup", (event) => toggle());