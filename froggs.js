const pictures = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg',
    'img/6.jpg',
    'img/7.jpg',
    'img/8.jpg',
    'img/9.jpg',
    'img/10.jpg',
    'img/11.jpg',
    'img/12.jpg',
    'img/13.jpg',
    'img/14.jpg',
    'img/15.jpg',
    'img/16.jpg',
    'img/17.jpg',
    'img/18.jpg',
    'img/19.jpg',
    'img/20.jpg',
    'img/21.jpg',
    'img/22.jpg',
    'img/23.jpg',
    'img/24.jpg',
    'img/25.jpg',
    'img/26.jpg',
    'img/27.jpg',
    'img/28.jpg',
    'img/29.jpg',
    'img/30.jpg',
    'img/31.jpg',
    'img/32.jpg',
    'img/33.jpg',
    'img/34.jpg',
    'img/35.jpg',
    'img/36.jpg',
    'img/37.jpg',
    'img/38.jpg',
    'img/39.jpg',
    'img/40.jpg',
    'img/41.jpg',
    'img/42.jpg',
    'img/43.jpg',
    'img/44.jpg',
    'img/45.jpg',
    'img/46.jpg',
    'img/47.jpg',
    'img/48.jpg',
    'img/49.jpg',
    'img/50.jpg',
    'img/51.jpg',
    'img/53.jpg',
    'img/54.jpg',
    'img/55.jpg',
    'img/56.jpg',
    'img/57.jpg',
    'img/58.jpg',
    'img/59.jpg',
    'img/60.jpg',
    'img/61.jpg',
    'img/62.jpg',
    'img/63.jpg',
    'img/65.jpg',
    'img/66.jpg',
    'img/67.jpg',
    'img/68.jpg',
    'img/69.jpg',
    'img/70.jpg',
    'img/71.jpg',
    'img/72.jpg',
    'img/73.jpg',
    'img/74.jpg',
    'img/76.jpg',
    'img/77.jpg',
    'img/78.jpg',
    'img/79.jpg',
    'img/80.jpg',
    'img/81.jpg',
    'img/82.jpg',
    'img/83.jpg',
    'img/84.jpg',
    'img/85.jpg',
    'img/86.jpg',
    'img/87.jpg',
    'img/88.jpg',
    'img/89.jpg',
    'img/90.jpg',
    'img/91.jpg',
    'img/92.jpg',
    'img/93.jpg',
    'img/94.jpg',
    'img/95.jpg',
    'img/98.jpg',
    'img/99.jpg',
    'img/100.jpg',
    'img/101.jpg',
    'img/102.jpg',
    'img/103.jpg',
    'img/104.jpg',
    'img/105.jpg',
    'img/106.jpg',
    'img/107.jpg',
    'img/108.jpg',
    'img/109.jpg',
    'img/110.jpg',
    'img/111.jpg',
    'img/112.jpg',
    'img/113.jpg',
    'img/114.jpg',
    'img/115.jpg',
    'img/116.jpg',
    'img/117.jpg',
    'img/118.jpg',
    'img/119.jpg',
    'img/120.jpg',
    'img/121.jpg',
    'img/122.jpg',
    'img/123.jpg',
    'img/124.jpg',
    'img/125.jpg',
    'img/126.jpg',
    'img/127.jpg',
    'img/128.jpg',
    'img/129.jpg',
    'img/130.jpg',
    'img/131.jpg',
    'img/132.jpg',
    'img/133.jpg',
    'img/134.jpg',
    'img/135.jpg',
    'img/136.jpg',
    'img/137.jpg',
    'img/138.jpg',
    'img/139.jpg',
    'img/140.jpg',
    'img/141.jpg',
    'img/142.jpg',
    'img/143.jpg'
];

/* code for gallery */
function frogsGallery() {
    const gallery = document.getElementById('gallery');
    let pic;
    for(let i = 0; i < pictures.length; i++) {
        pic = document.createElement('IMG');
        pic.src =  pictures[i];
        pic.onclick = showFrog;
        pic.style.height = '100px';
        pic.style.marginRight = '20px';
        pic.style.marginBottom = '20px';
        pic.style.cursor = 'pointer';
        gallery.appendChild(pic);
    }

    let length = pictures.length.toString();
    let frogWord;
    if (length[2] === '1') { frogWord = 'жаба' }
    else if (length[2] === '2' || length[2] === '3' || length[2] === '4') { frogWord = 'жабы' }
    else { frogWord = 'жаб' }
    document.getElementById('frogCounter').innerHTML = `В нашем каталоге на данный момент ${length} ${frogWord}.<br/>`;
    document.getElementById('frogCounter').innerHTML += `Our catalogue contains of ${length} frogs.`;
}

function showFrog() {
    const modal = document.getElementById('bigPicture');
    let picture = document.getElementById('bigFrog');
    const close = document.getElementById('close');

    picture.src = this.src;
    modal.style.display = 'block';

    close.onclick = function() {
        modal.style.display = 'none';
    };
}

/* code for chase */
function follower() {
    let position = document.getElementById('chase-pic');

    position.style.top = (Math.floor(Math.random() * 824) +1) + 'px';
    position.style.left = (Math.floor(Math.random() * 800) +1) + 'px';
}

/* code for catch */
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let i = randomInteger(5, 15); //number of needed clicks to catch a frog
let j = -1; //counter of done clicks
let width = 100;
let height = 76;

function catcher() {
    let coeff = 600 / i; //coefficient to resize the frog
    let frog = document.getElementById('catcher-pic');

    j++;
    if (j === i) {
        youWon();
    }
    else {
        let ymax = 900 - height;
        let xmax = 900 - width;
        frog.style.top = (Math.floor(Math.random() * ymax) + 1) + 'px';
        frog.style.left = (Math.floor(Math.random() * xmax) + 1) + 'px';
        frog.style.width = width + 'px';
        frog.style.height = height + 'px';
    }
    width = width + coeff;
    height = height +coeff;
}

function youWon() {
    let winFrog = document.getElementById('winPic');
    winFrog.src = pictures[Math.floor(Math.random() * pictures.length)];

    let winner = document.getElementById('winSplash');

    winner.style.display = 'block';
}

/* code for random frogg */
function start() {
    const modal = document.getElementById('attention');

    modal.style.display = 'block';

    const close = document.getElementById('attentionImg');
    close.onclick = function() {
        modal.style.display = 'none';
        frogs();
    };
}

function frogs() {
    let frog = document.getElementById('froggs-pic');
    frog.src = pictures[Math.floor(Math.random() * pictures.length)];
}