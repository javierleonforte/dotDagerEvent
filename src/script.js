const body = document.querySelector('body');
const nav = document.querySelector('divNav');
const rainContainer = document.getElementById('rainPickles');
const sectionZero = document.getElementById('section0');
const sectionOne = document.getElementById('section1');
const sectionThree = document.getElementById('section3');
const warningPickle = document.getElementById('warningPickle');
const buttons = document.querySelectorAll('#divNav button');
const sections = document.querySelectorAll('section');
const flash = document.getElementById('flash');
const bgBlack = document.getElementById('bgBlack');

const card = document.querySelector('.card');
const logo = document.getElementById('logo');

const pickle = document.createElement('img');
const pickleCool = document.createElement('img');
const lastPickle = document.createElement('img');
const chatBalloon = document.createElement('div');
const chatBalloonCool = document.createElement('div');
const chatBalloonLast = document.createElement('div');
const divGame = document.createElement('div');
const canvas = document.createElement('canvas');
const button = document.createElementNS("http://www.w3.org/2000/svg", "svg");

const chatBalloonText = 'Hola, te presento a Mariano, conocido en el mundo digital como Dot Dager, este tipo esta obsesionado conmigo...';
const chatBalloonCoolText = '¡PORONGA! A este tipo le encanta hacer cosas, apreta la flechita y vas a ver que este chabon esta loquito.';
const chatBalloonLastText = '¡Llegaste al final! Ante cualquier consulta SERIA puedes dejar un mensaje acá para nuestro querido Dager. Si todo esto te pareció aburrido, dale click al logo *guiño*.';

function createRain() {
    const drop = document.createElement('img');
    drop.src = './images/pickleRain.png';
    drop.classList.add('rainDrop');

    drop.style.left = `${Math.random() * 100}%`;
    rainContainer.appendChild(drop);

    setTimeout(() => {
        rainContainer.removeChild(drop);
    }, 5000);
}

if (rainContainer) {
    setInterval(createRain, 500);
}

function createPickle() {
    pickle.src = './images/pickleGif.gif';
    pickle.classList.add('pickleGif');
    sectionZero.appendChild(pickle);
}

function createPickleCool() {
    pickleCool.src = './images/pickleCoolParacaidas.png';
    pickleCool.classList.add('pickleCool');
    sectionOne.appendChild(pickleCool);
}

function createLastPickle() {
    lastPickle.src = './images/lastPickle.png';
    lastPickle.classList.add('lastPickle');
    sectionThree.appendChild(lastPickle);
}

warningPickle.addEventListener('click', () => {
    createPickle();
    warningPickle.style.display = 'none';
    setTimeout(() => {
        pickle.src = './images/pickleChat2.png';
        chatBalloon.classList.add('chatBalloon');
        sectionZero.appendChild(chatBalloon);
        escribirChatBallooon();
    },5000)
})

let indice = 0;
function escribirChatBallooon() {
    if (indice < chatBalloonText.length) {
        chatBalloon.textContent += chatBalloonText.charAt(indice);
        indice++;
        setTimeout(escribirChatBallooon, 50);
    }
}

if (warningPickle) {
    setInterval(() => {
        warningPickle.style.animation = 'vibrationWarning .2s ease'
        setTimeout(() => {
            warningPickle.style.animation = ''
        }, 200);
    }, 3000);
}

let pickleCoolTriggered = false;
let lastPickleTriggered = false;
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 800 && !pickleCoolTriggered) {
        pickleCoolTriggered = true;
        createPickleCool();
        setTimeout(() => {
            pickleCool.src = './images/pickleCool.png';
            chatBalloonCool.classList.add('chatBalloonCool');
            sectionOne.appendChild(chatBalloonCool);
            escribirChatBalloonCool();
        }, 5000);
    }

    let indice2 = 0;
function escribirChatBalloonCool() {
    if (indice2 < chatBalloonCoolText.length) {
        chatBalloonCool.textContent += chatBalloonCoolText.charAt(indice2);
        indice2++;
        setTimeout(escribirChatBalloonCool, 50);
    }
}

    if (scrollPosition > 2500 && !lastPickleTriggered) {
        lastPickleTriggered = true;
        createLastPickle();
        setTimeout(() => {
            chatBalloonLast.classList.add('chatBalloonLast');
            sectionThree.appendChild(chatBalloonLast);
            escribirChatBalloonLast();
        }, 1000)
    }

    let indice3 = 0;
function escribirChatBalloonLast() {
    if (indice3 < chatBalloonLastText.length) {
        chatBalloonLast.textContent += chatBalloonLastText.charAt(indice3);
        indice3++;
        setTimeout(escribirChatBalloonLast, 50);
    }
}

    sections.forEach((section, i) => {
        const sectionPosition = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionPosition && scrollPosition < sectionPosition + sectionHeight) {
            buttons[i].classList.add('active');
        }
        else {
            buttons[i].classList.remove('active');
        }
    })
})

logo.addEventListener('click', () => {
    card.classList.toggle('flipped');
    flash.style.opacity = 1;
    flash.style.zIndex = 10000;
    body.style.overflow = 'hidden';
    setTimeout(() => {
        lamberJackGame();
        flash.style.opacity = 0;
        flash.style.zIndex = -1000;
        divNav.style.display = 'none';
    }, 1000);

    button.addEventListener('click', () => {
        cerrarLumberGame();
        card.classList.toggle('flipped');
    });
});




function lamberJackGame() {
    divGame.classList.add('card-back');
    divGame.getAttribute('id', 'cardGame')
    card.appendChild(divGame);

    canvas.getAttribute('id', 'gameCanvas');
    divGame.appendChild(canvas);
    setTimeout(() => {        
        button.classList.add('buttonExit', 'fill-current', 'h-6');
        button.setAttribute('version', '1.1');
        button.setAttribute('id', 'Capa-1');
        button.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        button.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
        button.setAttribute("x", "0px");
        button.setAttribute("y", "0px");
        button.setAttribute("viewBox", "0 0 52.001 52.001");
        button.setAttribute("style", "enable-background:new 0 0 52.001 52.001;");
        button.setAttribute("xml:space", "preserve");

        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute('d', "M47.743,41.758L33.955,26.001l13.788-15.758c2.343-2.344,2.343-6.143,0-8.486 c-2.345-2.343-6.144-2.342-8.486,0.001L26,16.91L12.743,1.758C10.4-0.584,6.602-0.585,4.257,1.757 c-2.343,2.344-2.343,6.143,0,8.486l13.788,15.758L4.257,41.758c-2.343,2.343-2.343,6.142-0.001,8.485 c2.344,2.344,6.143,2.344,8.487,0L26,35.091l13.257,15.152c2.345,2.344,6.144,2.344,8.487,0 C50.086,47.9,50.086,44.101,47.743,41.758z")

        button.appendChild(path);

        divGame.appendChild(button);
    }, 1000);


    //! COLORS
const WHITE = "rgb(255, 255, 255)";
const BLACK = "rgb(0, 0, 0)";
const RED = "rgb(255, 0, 0)";
const GREEN = "rgb(0, 255, 0)";
const BROWN = "rgb(139, 69, 19)";
const BRICK_RED = "rgba(128, 29, 12, 0.8)";
const BRICK_RED_TRANSPARENT = "rgba(128, 29, 12, 0.5)";

//! MEDIA VARIABLES
// Sounds
let chopSound = new Audio("sounds/Chop_Log_Sound.mp3");
chopSound.volume = 0.7;
let pauseSound = new Audio("sounds/Pause_Sound.mp3");
pauseSound.volume = 0.3;
// Sprites
let manSprite = new Image();
manSprite.src = "sprites/man.png";
let flippedManSprite = new Image();
flippedManSprite.src = "sprites/flipped_man.png";
let background = new Image();
background.src = "images/background.png";
let sBranch = new Image();
sBranch.src = "sprites/branch.png";
let sFlippedBranch = new Image();
sFlippedBranch.src = "sprites/branch_flipped.png";
let iTrunk = new Image();
iTrunk.src = "images/trunk.png";
// Fonts
let pixelFont = new FontFace('PixelFont', 'url(./fonts/PixelEmulator-xq08.ttf)');
document.fonts.add(pixelFont);


//! GAME CONSTANTS
// Canvas

const ctx = canvas.getContext('2d');
// Canvas dimensions
canvas.width = 608;
canvas.height = 1080;
const WIDTH = canvas.width;
const HEIGHT = canvas.height;
// Player dimensions
const PLAYER_HEIGHT = HEIGHT / 4;
const PLAYER_WIDTH = PLAYER_HEIGHT * (383 / 521); //TODO hardcoded ratio, to be changed if using another image
// Tree dimensions
const TREE_WIDTH = WIDTH / 5;
// Branch dimensions
const BRANCH_HEIGHT = PLAYER_HEIGHT / 2;
const BRANCH_WIDTH = WIDTH / 2.5;
// Timer
const HARD_MAX_TIMER = 30;
// Number of branches
const NUM_BRANCHES = Math.floor((HEIGHT - PLAYER_HEIGHT) / BRANCH_HEIGHT);
// Player positions
const P_LEFT = WIDTH / 2 - TREE_WIDTH / 2 - PLAYER_WIDTH / 2
const P_RIGHT = WIDTH / 2 + TREE_WIDTH / 2 + PLAYER_WIDTH / 2
// Physics
const TREE_SLIDING_SPEED = 700; // pixels per second
const GRAVITY = 400; // pixels per second squared
const FADING_BRANCH_SPEED = 1; // alpha per second
const AXE_IMPULSE = 200; // pixels per second
const BRANCH_ANGULAR_VELOCITY = 0.5; // radians per second
// Pause button variables
const PAUSE_BUTTON_X = WIDTH - 100;
const PAUSE_BUTTON_Y = 10;
const PAUSE_BUTTON_WIDTH = 90;
const PAUSE_BUTTON_HEIGHT = 38;

//! GAME VARIABLES
// Time
let start = Date.now();
let current = start;
let delta = 0;
// Game variables
let score = 0;
let max_score = 0;
let max_timer = HARD_MAX_TIMER;
let timer = max_timer / 2;
let game_started = false;
let game_over = false;
let game_paused = false;
let tree_y = 0;
let is_tree_sliding = false;
let prev_target_height = 0;
// Player position
let player_x = P_RIGHT;
let player_y = HEIGHT - PLAYER_HEIGHT;

//! DATA STRUCTURES
let branches = [];
let falling_branches = [];


//////////////////////////////////////////////////
//! Input handling functions (Event listeners defined at the end of the file)
//////////////////////////////////////////////////
//#region Input handling functions
function handleKeyDown(event) {
    if (!game_started && !game_over && !game_paused) {
        if (event.code === 'Space') {
            startGame();
        }
    } else if (game_started && !game_over && !game_paused) {
        if (event.code === 'Space') {
            pauseGame();
        }
        if (event.code === 'ArrowLeft') {
            movePlayer('left');
        } else if (event.code === 'ArrowRight') {
            movePlayer('right');
        }
    } else if (game_paused) {
        if (event.code === 'Space') {
            resumeGame();
        }
    } else if (game_over) {
        if (event.code === 'Space') {
            restartGame();
        }
    }
}

function handleMouseDown(event) {
    if (!game_started && !game_over && !game_paused) {
        startGame();
    } else if (game_over){
        restartGame();
    } else if (game_paused) {
        resumeGame();
    }
    else {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        //! DEBUG
        //console.log ("Pressed in " + x + " " + y + " position");
        //console.log ("Pause Button is in " + PAUSE_BUTTON_X + " " + PAUSE_BUTTON_Y + " position");
        //console.log ("Pause Button in check should be in " + PAUSE_BUTTON_X / 2  + " " + PAUSE_BUTTON_Y + " position");

        // TODO Works in mobile, but not in Desktop
        if (x >= PAUSE_BUTTON_X && x <= PAUSE_BUTTON_X + PAUSE_BUTTON_WIDTH && y >= PAUSE_BUTTON_Y && y <= PAUSE_BUTTON_Y + PAUSE_BUTTON_HEIGHT) {
            pauseGame();
        }
        else {
            movePlayer(x < WIDTH / 2 ? 'left' : 'right');
        }
    }
}

// TODO Needs to be adjusted and studied
function handleMouseOver(event) {
    if(game_started) {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        if(x >= PAUSE_BUTTON_X / 2 && x <= PAUSE_BUTTON_X / 2 + PAUSE_BUTTON_WIDTH && y >= PAUSE_BUTTON_Y && y <= PAUSE_BUTTON_Y + PAUSE_BUTTON_HEIGHT) {
            canvas.style.cursor = "pointer";
        }
    }
    else {
        canvas.style.cursor = "default";
    }
}

//#endregion
//////////////////////////////////////////////////
//! Game states functions
//////////////////////////////////////////////////
//#region Game states functions
function pauseGame() {
    game_paused = true;
    game_started = false;

    pauseSound.play();
}

function resumeGame() {
    game_paused = false;
    game_started = true;

    pauseSound.play();
}

function startGame() {
    game_started = true;
    score = 0;
}

function restartGame() {
    game_started = true;
    game_over = false;
    max_timer = HARD_MAX_TIMER;
    timer = max_timer / 2;
    tree_y = 0;
    score = 0;
    tree_y = 0;
    is_tree_sliding = false;
    prev_target_height = 0;
    player_x = P_RIGHT;
    branches = [];
    falling_branches = [];
    generate_first_branches();
}

//#endregion
//////////////////////////////////////////////////
//! Controls Functions
//////////////////////////////////////////////////
//#region Controls Functions
function movePlayer(direction) {
    player_x = (direction === 'left' ? P_LEFT : direction === 'right' ? P_RIGHT : player_x);

	if ((branches[branches.length - 1].side === "left" && direction === "left") ||
		(branches[branches.length - 1].side === "right" && direction === "right")) {
		game_over = true;
	}
	moveBranchesDown();
    score++;
	applyImpulseToLastFallingBranch();
    chopSound.cloneNode().play();

	// Update record
    if (max_score < score) {
		max_score = score;
	}

    // Game time management
    let inverseProportionalToTimer = max_timer / timer * 0.4; // valore compreso tra 1 e max_timer(per timer maggiore o uguale a 1), poi diviso per 2
    let percentageInverseProportionalToTimer = inverseProportionalToTimer / max_timer; // percentuale compresa tra 0 e 1(per timer maggiore o uguale a 1)
    addTime(percentageInverseProportionalToTimer);
}
//#endregion
//////////////////////////////////////////////////
//! Game Logic functions
//////////////////////////////////////////////////
//#region Game Logic functions
function generate_branch(type = null) {
    const sides = ["left", "right", "none"];
    const side = type ? type : sides[Math.floor(Math.random() * sides.length)];
	let x_val;
	if (side === "left") {
		x_val = WIDTH / 2 - TREE_WIDTH / 2 - BRANCH_WIDTH;
	}
	else if (side === "right") {
		x_val = WIDTH / 2 + TREE_WIDTH / 2;
	}
    return { side: side,
		y: -prev_target_height , x: x_val,
		angle: 0, angular_velocity: (Math.random() * BRANCH_ANGULAR_VELOCITY - BRANCH_ANGULAR_VELOCITY / 2),
		velocity: 0, hvelocity: 0,
		alpha: 1, };
}

function generate_first_branches() {
    for (let i = -1; i < NUM_BRANCHES - 1; i++) {
        branches.push(generate_branch());
        branches[branches.length - 1].y = (i + 1) * BRANCH_HEIGHT;
    }
}

function addTime(percentage) {
    if (timer + percentage * max_timer >= max_timer) {
        timer = max_timer;
    }
    else {
        timer += percentage * max_timer;
    }
}

// TODO fix this thing when prev_target_height is < 0. It is there the problem
function moveBranchesDown() {
    if (is_tree_sliding && prev_target_height != 0) {
        // let modulo = branches[0].y % BRANCH_HEIGHT;
        branches.forEach(branch => branch.y += prev_target_height);
        tree_y += prev_target_height;
        if (tree_y > HEIGHT / 2) {
            tree_y -= HEIGHT / 2;
        }
    }
    if (!is_tree_sliding && prev_target_height <= 0) {
        is_tree_sliding = true;
    }
    prev_target_height = BRANCH_HEIGHT;
    pop_push_new_branch();
}

function pop_push_new_branch() {
    let falling_branch = branches.pop();
    falling_branch["velocity"] = 0;
    falling_branch["alpha"] = 1;
    falling_branches.push(falling_branch);
    branches.unshift(generate_branch());
}

function computePhysicsFallingBranches() {
    falling_branches.forEach(function(branch) {
        branch.y += delta / 1000 * branch.velocity;
		branch.x += delta / 1000 * branch.hvelocity;
        branch.alpha -= delta / 1000 * FADING_BRANCH_SPEED;
		branch.alpha = branch.alpha < 0 ? 0 : branch.alpha;
        branch.velocity += delta / 1000 * GRAVITY;
		branch.angle += delta / 1000 * branch.angular_velocity;
        if (branch.y >= HEIGHT) {
            falling_branches.splice(falling_branches.indexOf(branch), 1);
        }
    });
}

function applyImpulseToLastFallingBranch() {
	let last = falling_branches.length - 1;
	let branch = falling_branches[last];
	let abs_velocity = AXE_IMPULSE + (Math.random() * 200 - 100);//parentheses for readability

	if (branch.side === "left") {
		branch.hvelocity = -abs_velocity;
	} else if (branch.side === "right") {
		branch.hvelocity = abs_velocity;
	}
}

//#endregion
//////////////////////////////////////////////////
//! FPS calculation functions
//////////////////////////////////////////////////
//#region FPS calculation functions
function update() {
    if (game_started && !game_over) {
        // Updates the timer
        timer -=  delta / 1000;
        if (timer <= 0) {
            game_over = true;
        }

        computePhysicsFallingBranches();

        // Updates max timer value
        max_timer = Math.max(HARD_MAX_TIMER - score * 0.02, 0.5);
        
        //TODO check if this if condition then is needed
        if (prev_target_height <= 0) {
            // tree_y += prev_target_height;
            // // if (tree_y <= HEIGHT / 2) {
            // //     tree_y += HEIGHT / 2;
            // // }
            // branches.forEach(branch => branch.y += prev_target_height);
            // prev_target_height = 0;
            is_tree_sliding = false;
        }
        if (is_tree_sliding) {
            tree_y += delta / 1000 * TREE_SLIDING_SPEED;
            if (tree_y > HEIGHT / 2) {
                tree_y -= HEIGHT / 2;
            }
            branches.forEach(branch => branch.y += delta / 1000 * TREE_SLIDING_SPEED);
            prev_target_height -= delta / 1000 * TREE_SLIDING_SPEED;
        }
    }
}
//#endregion
//////////////////////////////////////////////////
//! Drawing functions (drawing game scene and interface)
//////////////////////////////////////////////////
//#region Drawing functions
// thanks to https://stackoverflow.com/questions/3793397/html5-canvas-drawimage-with-at-an-angle second answer
// rotate 45º image "imgSprite", based on its rotation axis located at x=20,y=30 and draw it on context "ctx" of the canvas on coordinates x=200,y=100
function rotateAndPaintImage ( context, image, angleInRad , positionX, positionY, width, height ) {
	context.translate( positionX, positionY );
	context.rotate( angleInRad );
	context.drawImage( image, 0, 0, width, height);
	context.rotate( -angleInRad );
	context.translate( -positionX, -positionY );
}

function draw() {
    ctx.canvas.width = WIDTH;
    ctx.canvas.height = HEIGHT;
    ctx.fillStyle = WHITE;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    ctx.font = screen.width < 1024 ? "20px PixelFont" : "36px PixelFont";

    if (!game_started && !game_paused) {
        ctx.fillStyle = BLACK;
        ctx.textAlign = "center";
        ctx.fillText("Apreta para empezar", WIDTH / 2, HEIGHT / 2);
    } else if (game_over) {
        /*
        ctx.fillStyle = BLACK;
        ctx.textAlign = "center";
        ctx.fillText("Game Over!", WIDTH / 2, HEIGHT / 2);
        ctx.fillText(`Punteggio: ${score}`, WIDTH / 2, HEIGHT / 2 + 40);
        ctx.fillText(`Record: ${max_score}`, WIDTH / 2, HEIGHT / 2 + 80);
        ctx.fillText("Premi per ricominciare", WIDTH / 2, HEIGHT / 2 + 120);
        */
        draw_scene();
        ctx.fillStyle = BRICK_RED_TRANSPARENT;
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
        ctx.fillStyle = WHITE;
        ctx.textAlign = "center";
        ctx.fillText("Perdiste!", WIDTH / 2, HEIGHT / 2);
        ctx.fillText(`Puntuación: ${score}`, WIDTH / 2, HEIGHT / 2 + 40);
        ctx.fillText(`Record: ${max_score}`, WIDTH / 2, HEIGHT / 2 + 80);
        ctx.fillText("Apreta para reintentar", WIDTH / 2, HEIGHT / 2 + 120);
    } else if (game_paused) {
        draw_scene();
        ctx.fillStyle = BRICK_RED_TRANSPARENT;
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
        ctx.fillStyle = WHITE;
        ctx.textAlign = "center";
        ctx.fillText("Pausa", WIDTH / 2, HEIGHT / 2);
    } else {
        draw_scene();

        // Disegna il punteggio
        ctx.fillStyle = BRICK_RED;
        ctx.textAlign = "left";
        let textWidth = ctx.measureText(`Puntuación: ${score}`).width + 20;
        let textHeight = 36;
        ctx.fillRect(10, 10, textWidth, textHeight*2 + 5);
        ctx.fillStyle = WHITE; // Cambia il colore del testo
        ctx.fillText(`Puntuación: ${score}`, 20, 35);
        ctx.fillText(`Record: ${max_score}`, 20, 75);

        // Disegna il timer
        ctx.strokeStyle = BLACK;
        ctx.lineWidth = 2;
        ctx.strokeRect(10, HEIGHT - 30, WIDTH / 5, 20);
        ctx.fillStyle = GREEN;
        ctx.fillRect(12, HEIGHT - 28, (WIDTH / 5 - 2) * (timer / max_timer), 16);

        // Disegna il pulsante di pausa (Versione beta, sostituire testo con immagine) 
        ctx.fillStyle = BRICK_RED;
        ctx.textAlign = "center";
        ctx.fillRect(PAUSE_BUTTON_X, PAUSE_BUTTON_Y, PAUSE_BUTTON_WIDTH, PAUSE_BUTTON_HEIGHT);
        ctx.fillStyle = WHITE;
        ctx.fillText("Pausa", WIDTH - 54, 35);
    }
}

function draw_scene() {
    // Draws background
    ctx.drawImage(background, 0, 0, WIDTH, HEIGHT);
    const TREE_FRACTION = TREE_WIDTH / 3;
    
    // Draws tree
    // TODO CHANGE THE FOLLOWING CODE TO DRAW A TRUNK THAT IS UNREADABLE
    //upper tile(slightly larger than TREE_WIDTH cause image has a little bit of transparency)
    ctx.drawImage(iTrunk, WIDTH / 2 - TREE_WIDTH / 2 - TREE_FRACTION, tree_y, TREE_WIDTH + TREE_FRACTION * 2, HEIGHT / 2);
    //lower tile(slightly larger than TREE_WIDTH cause image has a little bit of transparency)
    ctx.drawImage(iTrunk, WIDTH / 2 - TREE_WIDTH / 2 - TREE_FRACTION, tree_y + HEIGHT / 2, TREE_WIDTH + TREE_FRACTION * 2, HEIGHT / 2);
    // extra trunk to cover the gap between the two tiles
    ctx.drawImage(iTrunk, WIDTH / 2 - TREE_WIDTH / 2 - TREE_FRACTION, tree_y - HEIGHT / 2, TREE_WIDTH + TREE_FRACTION * 2, HEIGHT / 2);

    // Draws branches
    ctx.fillStyle = GREEN;
    branches.forEach(branch => {
        if (branch.side === "left") {
            ctx.drawImage(sFlippedBranch, branch.x, branch.y, BRANCH_WIDTH, BRANCH_HEIGHT);
        } else if (branch.side === "right") {
            ctx.drawImage(sBranch, branch.x, branch.y, BRANCH_WIDTH, BRANCH_HEIGHT);
        }
    });
    // Draws falling branches
    falling_branches.forEach(branch => {
        ctx.globalAlpha = branch.alpha;
		// ctx.translate(WIDTH / 2, HEIGHT / 2);
		// ctx.rotate(1.5);
        if (branch.side === "left") {
			rotateAndPaintImage( ctx, sFlippedBranch, branch.angle , branch.x, branch.y, BRANCH_WIDTH, BRANCH_HEIGHT);
            // ctx.drawImage(sFlippedBranch, branch.x, branch.y, BRANCH_WIDTH, BRANCH_HEIGHT);
        } else if (branch.side === "right") {
			rotateAndPaintImage( ctx, sBranch, branch.angle , branch.x, branch.y, BRANCH_WIDTH, BRANCH_HEIGHT)
        }
        ctx.globalAlpha = 1;
		// ctx.rotate(-1.5);
		// ctx.translate(-WIDTH / 2, -HEIGHT / 2);
    });
    // Draws player
    if (player_x === P_LEFT) {
        ctx.drawImage(manSprite, player_x - PLAYER_WIDTH / 2, player_y, PLAYER_WIDTH, PLAYER_HEIGHT);
    }
    else if (player_x === P_RIGHT) {
        ctx.drawImage(flippedManSprite, player_x - PLAYER_WIDTH / 2, player_y, PLAYER_WIDTH, PLAYER_HEIGHT);
    }
    // ctx.fillStyle = RED;
    // ctx.fillRect(player_x - PLAYER_WIDTH / 2, player_y, PLAYER_WIDTH, PLAYER_HEIGHT);

}
//#endregion
//////////////////////////////////////////////////
//! Main game flow 
//////////////////////////////////////////////////
//#region Main game flow
generate_first_branches();

// Input handling
document.addEventListener('keydown', handleKeyDown);
canvas.addEventListener('mousedown', handleMouseDown);
canvas.addEventListener('mouseover', handleMouseOver);

function gameLoop() {
    current = Date.now();
    delta = current - start;
    start = current;
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();
//#endregion
}

function cerrarLumberGame() {
    const cardGame = document.getElementById('cardGame');
    divGame.removeChild(button);
    divGame.parentNode.removeChild(divGame);
    body.style.overflowY = 'visible';
    divNav.style.display = 'flex';
}