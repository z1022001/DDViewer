//                                                                    
//                                                                    
//                                                                    
//                                              .:---.                
//              *@@%#*=:                     -*%@@@@@*                
//             -@@@#*%@@%*-   .:--======-:.-%%*-:*%=#@.               
//             +@*#@*:.-*%@%#%@@@@@@%%@@@@@@%-..##--*@:               
//             #@=-=#@*:..-*%%*=-.......:-=*%@%%*---*@:               
//             #@=---=%%:....................-#@%+--#@.               
//             #@+---=%@#......................-%@#=@%                
//             +@#--=@@@=.......................:%@@@-                
//             :@@+-%@%-...........:-=+*####%###*#@@*                 
//              +@@#@@=.........:+%@@@@@@@@@%@@@@@@@%+.               
//               +@@@#........-#@@@#*==--:::..:::-+#@@@*.             
//                =@@=.......=@@@*-::-:::.          :+%@%:            
//                =@@:......-@@%+-::-:::.           .:-#@%.              d88P      d8b d8b                    .d8888b.   .d8888b.   .d8888b.  888                             888                             888             888                       
//                *@%.......%@@#=-:-::-::.          .::-#@*             d88P       Y8P 88P                   d88P  Y88b d88P  Y88b d88P  Y88b 888                             888                             888             888                       
//                #@#......-@@@*+-:-:::::::........:::::+@@:           d88P            8P                    888        888    888 888    888 888                             888                             888             888                       
//          :+*##*%@*:.....-@@@*+=:::::::::::::::::::::--@@+          d88P         888 "  88888b.d88b.       888d888b.  888    888 888    888 888  888      .d8888b  888  888 88888b.  .d8888b       888  888 888888 888  888 88888b.   .d88b.  888d888 
//        .*@@@@@@@@*:.....:@@@*++=-::-:::::::::::::-::--@@*          Y88b         888    888 "888 "88b      888P "Y88b 888    888 888    888 888 .88P      88K      888  888 888 "88b 88K           888  888 888    888  888 888 "88b d8P  Y8b 888P"   
//       .%@@+::=:@@+:......#@@#+++++==-----::::::----=+*@@+           Y88b        888    888  888  888      888    888 888    888 888    888 888888K       "Y8888b. 888  888 888  888 "Y8888b.      Y88  88P 888    888  888 888  888 88888888 888     
//       *@@-..+@%@@+-......-@@%*+++++++++++++++++++++++#@@+:           Y88b       888    888  888  888      Y88b  d88P Y88b  d88P Y88b  d88P 888 "88b           X88 Y88b 888 888 d88P      X88       Y8bd8P  Y88b.  Y88b 888 888 d88P Y8b.     888     
//      -@@*.::*@:=#@%+-.....+@@%*+++++++++++++++++++++#@@@@*            Y88b      888    888  888  888       "Y8888P"   "Y8888P"   "Y8888P"  888  888       88888P'  "Y88888 88888P"   88888P'        Y88P    "Y888  "Y88888 88888P"   "Y8888  888     
//      *@@=---#@-::-+#@#+....-%@@#*+++++++++++++++**#%@@#*@=         
//      %@#--*%%*----:::+%%+....+%@@@%%%%%%%%%%%%%%@@@%+. *@:         
//     .@@+-%@+-----:::...#@%:....:==+*#%%%@@@%%%%@@%+....%@=:        
//     -@@=-*%%*=--::::....#@%###%%%%%###########%@+......=*%@%*-     
//     =@@=---+#@#-::-:..=#@@*:###%%#=====+++%%=***@#-. ...+#@@%=     
//     =@@=-----+@+:--+#@@%%#-:#####%**##****%%:++ #*%%*=::@@=.       
//     =@@=-----%%+*#@@%#####-.#####%%%#%%##%%#:=+ #:+%@@@%%@*        
//     -@@=----=%@@@%%%%#####-.#####%*%%###%+%#:=* #-=%@@:=*@%.       
//     :@@+------+@@%%%%%####-.######%##%###%%#:=* #=-%@@.   .        
//     .@@*------=@@@@@@@@@@@%%@@@@@@@@@@@@@@@@%%@#@%#@@@             
//      %@#------=@@#***#####************+++++++++++==*@%             
//      *@@------=@@+----------:......................=@%             
//      +@@=-----=@@*----==+++++++++++=++++==========+*@%             
//      +@@*------@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%%%@%             
//      -@@%------@@%####*****##%%%@@%%%%#%%%%%@%##***#@%             
//      .@@@=-----%@%**##%%%@@@%%%%%%#%%%%@@%%#+#%#***#@@             
//       +@@#+=---#@@@@@@%%%%#%%%%%%%%@@%%#%#++#*+*@%##@%             
//       .+@@@@@@%%@@%%#%%%%%#%%%%@@%##*****#%%*+##++#@@%             
//         .-=+#%%@@@%%%%%%%%@@@@%##**********#%@#+*#+#@%             
//                =@@%%@@@@@@@@@@@@@@@@@@@@@%@%%%%%%##%@#             
//                :@@@#*+=-------#@@.   :@@*----------#@*             
//                 %@#-----------#@%     @@%----------#@+             
//                 *@@=----------%@#     *@@=--------=@@-             
//                 -@@#----------@@*     :@@%***++**#%@@:             
//                  +@@*=-------+@@-      -#@@@@@@@@@@#-              
//                   +@@@%####%@@%+          .:-==-:..                
//                    .=*####**+=.                                    
//                                                                    
//                                                                    
//                                                                    
// AA from https://en.rakko.tools/tools/68/
//         https://www.patorjk.com/software/taag/#p=display&f=Colossal

// shift event
let shiftDown = false;
$(document).keydown(function(e){ shiftDown = e.shiftKey; });
$(document).keyup  (function(e){ shiftDown = e.shiftKey; });

// mouse event
let startX = 0;
let startY = 0;
let blockW = 0;
let blockH = 0;
let isDown = false;
let onDraw = null;
let drawPos = null;

function mouseDown(e) {
	// set buffer
	isDown = true;
	onDraw = e.target.parentElement;
	drawPos = e.target.className;	// scalebarR/scalebarB/scalebox
	// set var
	startX = e.pageX;
	startY = e.pageY;
	blockW = onDraw.offsetWidth;
	blockH = onDraw.offsetHeight;
	// show mask
	let mask = document.querySelector('.mask');
	mask.style.visibility = 'unset';
	// set event
	document.addEventListener('mousemove', move);
	document.addEventListener('mouseup', mouseUp);
}

function mouseUp(e) {
	// get size
	blockW = onDraw.offsetWidth;  blockW -= blockW % 3;
	blockH = onDraw.offsetHeight; blockH -= blockH % 3;
	// set size to 16:9 if close
	let r = blockH / blockW;
	if (Math.abs(0.5625 - r) < 0.01){
		blockH = Math.floor(blockW * 0.5625);
	}
	// set size
	onDraw.style.width = `${blockW}px`;
	onDraw.style.height = `${blockH}px`;
	// remove if H = 0
	if (blockH < 10 || blockW < 10){
		document.querySelector('.viewzone').removeChild(onDraw);
	}
	// clear buffer
	isDown = false;
	onDraw = null;
	drawPos = null;
	// hide mask
	let mask = document.querySelector('.mask');
	mask.style.visibility = 'hidden';
	// remove event
	document.removeEventListener('mousemove', move);
	document.removeEventListener('mouseup', mouseUp);
}

function move(e) {
	if (!isDown) return;
	// get distance
	let dx = e.pageX - startX;
	let dy = e.pageY - startY;
	if (drawPos == 'scalebarB') { dx = 0; }
	if (drawPos == 'scalebarR') { dy = 0; }
	// set size
	onDraw.style.width = `${blockW + dx}px`;
	onDraw.style.height = `${blockH + dy}px`;
	
	if (shiftDown){
		onDraw.style.height = `${onDraw.offsetWidth * 0.5625}px`;
	}
}

function newViewBlock(urlCode) {
	// console.log('newViewBlock');
	let sr = document.createElement('div');	sr.setAttribute('class','scalebarR');
	let sb = document.createElement('div');	sb.setAttribute('class','scalebarB');
	let sx = document.createElement('div');	sx.setAttribute('class','scalebox');
	let iframe = $(`<iframe src="https://www.youtube.com/embed/${urlCode}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>`)[0];
	sr.addEventListener('mousedown', mouseDown);
	sb.addEventListener('mousedown', mouseDown);
	sx.addEventListener('mousedown', mouseDown);
	
	let vb = document.createElement('div');	vb.setAttribute('class','viewblock');
	vb.appendChild(sr);
	vb.appendChild(sb);
	vb.appendChild(sx);
	vb.appendChild(iframe);
	
	let vz = document.querySelector('.viewzone');
	vz.appendChild(vb);
}

// draw event
document.addEventListener('dragover', (event) => { event.preventDefault(); }, false);
document.addEventListener('drop', (event) => {
	event.preventDefault();
	
	let url = event.dataTransfer.getData('text/plain');
	// let url = 'youtube.com/watch?v=4b6hK-q_uWo';
	if (!/(\=|\/)(\S{11})(\/|$)/.test(url))	return;
	let urlCode = url.match(/(\=|\/)(\S{11})(\/|$)/)[2];
	newViewBlock(urlCode);
}, false);

//$(document).ready(function () {
	//newViewBlock('7yqkgUdu8B8');
//});  

