

//Canvas WebGL
let canvas = document.getElementById('myCanvas');
let gl = canvas.getContext('webgl');

let debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
let vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
let renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);


//timezone
function getTimeZone(){
    let time = new Date().getTimezoneOffset()/-60;
    if (time>0) {
        return "UTC +"+ time;
    }
    else{
        return "UTC " + time;
    }
}


// use adblock
let usedAdblock;
window.adBlockRunning = function() {
    return (getComputedStyle(document.getElementById("detect"))["display"] === "none");
  }()
usedAdblock = window.adBlockRunning;


//plugins
function getPluginsString(){
    let s='';
    for (let i=0; i<navigator.plugins.length; i++){
        let k;
        k = navigator.plugins[i].name;
        s+=k;
    }
    return s;
}

//fonts
const fontCheck = new Set([
  // Windows 10
 'Arial', 'Arial Black', 'Bahnschrift', 'Calibri', 'Cambria', 'Cambria Math', 'Candara', 'Comic Sans MS', 'Consolas', 'Constantia', 'Corbel', 'Courier New', 'Ebrima', 'Franklin Gothic Medium', 'Gabriola', 'Gadugi', 'Georgia', 'HoloLens MDL2 Assets', 'Impact', 'Ink Free', 'Javanese Text', 'Leelawadee UI', 'Lucida Console', 'Lucida Sans Unicode', 'Malgun Gothic', 'Marlett', 'Microsoft Himalaya', 'Microsoft JhengHei', 'Microsoft New Tai Lue', 'Microsoft PhagsPa', 'Microsoft Sans Serif', 'Microsoft Tai Le', 'Microsoft YaHei', 'Microsoft Yi Baiti', 'MingLiU-ExtB', 'Mongolian Baiti', 'MS Gothic', 'MV Boli', 'Myanmar Text', 'Nirmala UI', 'Palatino Linotype', 'Segoe MDL2 Assets', 'Segoe Print', 'Segoe Script', 'Segoe UI', 'Segoe UI Historic', 'Segoe UI Emoji', 'Segoe UI Symbol', 'SimSun', 'Sitka', 'Sylfaen', 'Symbol', 'Tahoma', 'Times New Roman', 'Trebuchet MS', 'Verdana', 'Webdings', 'Wingdings', 'Yu Gothic',
  // macOS
  'American Typewriter', 'Andale Mono', 'Arial', 'Arial Black', 'Arial Narrow', 'Arial Rounded MT Bold', 'Arial Unicode MS', 'Avenir', 'Avenir Next', 'Avenir Next Condensed', 'Baskerville', 'Big Caslon', 'Bodoni 72', 'Bodoni 72 Oldstyle', 'Bodoni 72 Smallcaps', 'Bradley Hand', 'Brush Script MT', 'Chalkboard', 'Chalkboard SE', 'Chalkduster', 'Charter', 'Cochin', 'Comic Sans MS', 'Copperplate', 'Courier', 'Courier New', 'Didot', 'DIN Alternate', 'DIN Condensed', 'Futura', 'Geneva', 'Georgia', 'Gill Sans', 'Helvetica', 'Helvetica Neue', 'Herculanum', 'Hoefler Text', 'Impact', 'Lucida Grande', 'Luminari', 'Marker Felt', 'Menlo', 'Microsoft Sans Serif', 'Monaco', 'Noteworthy', 'Optima', 'Palatino', 'Papyrus', 'Phosphate', 'Rockwell', 'Savoye LET', 'SignPainter', 'Skia', 'Snell Roundhand', 'Tahoma', 'Times', 'Times New Roman', 'Trattatello', 'Trebuchet MS', 'Verdana', 'Zapfino',
    //Linux
    'LiberationSerif-Regular','DejaVuSerifCondensed','NotoColorEmoji','LiberationSerif-Italic','LiberationSansNarrow-BoldItalic','LiberationMono-Regular','Quicksand-Ligh','DejaVuSansMono-Oblique','DejaVuSerifCondensed-Italic','LiberationMono-Italic','DejaVuSansCondensed-Bold','DejaVuSansMono-Bold','DejaVuSans-BoldOblique','DejaVuSans-Oblique','DejaVuSerif-Italic','NotoMono-Regular','LiberationSans-Regular','LiberationSans-Bold','Quicksand-Regular','LiberationMono-Bold','LiberationSerif-BoldItalic','DejaVuSerif-Bold','DejaVuSerifCondensed-BoldItalic','DejaVuSansMono-BoldOblique','DejaVuSansCondensed-Oblique','DroidSansFallbackFull','LiberationSerif-Bold','DejaVuSerifCondensed-Bold','DejaVuSansCondensed-BoldOblique','LiberationMono-BoldItalic','DejaVuSansMono','DejaVuSans-ExtraLigh','Quicksand-Bold','LiberationSansNarrow-Italic','DejaVuSeri','DejaVuSansCondensed','LiberationSansNarrow-Bold','DejaVuMathTeXGyre','DejaVuSans','LiberationSansNarrow-Regular','LiberationSans-Italic','LiberationSans-BoldItalic','DejaVuSans-Bold','DejaVuSerif-BoldItalic','Quicksand-Medium'
].sort());

const x = () => {
  //await document.fonts.ready;

  const fontAvailable = new Set();

  for (const font of fontCheck.values()) {
    if (document.fonts.check(`12px "${font}"`)) {

      fontAvailable.add(font);
    }
  }
  return [...fontAvailable.values()]
};
let arr=x();
let strng='';
for (let i=0; i<arr.length; i++){
    if (i===0){
    strng=strng+ arr[i];
    }
    else   {
       strng= strng + '; '+ arr[i];
    }

}

//localstorage session storage
function hasLocalStorage() {
      try{
        return !!window.localStorage;
      } catch(e) {
        return true;
      }
    }
function hasSessionStorage() {
      try{
        return !!window.sessionStorage;
      } catch(e) {
        return true;
      }
    }

    //canvas
    function isCanvasSupported() {
        let elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
    }


//screen resolution

    function getScreenResolution() {
        return (screen.height > screen.width) ? [screen.height, screen.width] : [screen.width, screen.height];
    }
    function getCanvasFingerprint() {
          let canvas = document.createElement('canvas');
          let ctx = canvas.getContext('2d');
          // https://www.browserleaks.com/canvas#how-does-it-work
          let txt = 'CANVAS_FINGERPRINT';
          ctx.textBaseline = "top";
          ctx.font = "14px 'Arial'";
          ctx.textBaseline = "alphabetic";
          ctx.fillStyle = "#f60";
          ctx.fillRect(125,1,62,20);
          ctx.fillStyle = "#069";
          ctx.fillText(txt, 2, 15);
          ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
          ctx.fillText(txt, 4, 17);
          let strng = canvas.toDataURL();
          if (strng.length===0) return;
          return CryptoJS.MD5(strng).toString();
}







