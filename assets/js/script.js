VANTA.CLOUDS({
  el: ".vanta-bg",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  skyColor: 0x2caef5,
  cloudColor: 0xc5cee1,
  sunColor: 0xeb9431,
  sunGlareColor: 0xe37755,
  sunlightColor: 0xc88851
})


// Checks to see if darkmode is in LS for persistence 
function checkLocalStorageDM() {
    if (window.localStorage.getItem('darkmode')) {
        darkModeTest()
    } else {
        return
    }
}

//Switches to darkmode
function darkModeTest() {
    // Toggles the CSS class
    document.body.classList.toggle('dark-mode')
    if (document.body.classList.contains('dark-mode')) {
        // If darkmode put object in LS
        VANTA.NET({
          el: '.vanta-bg',
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x66FF66,
          backgroundColor: 0x1B1B1B,
          points: 11.00,
          maxDistance: 18.00,
          spacing: 13.00,
          showDots: false
        })
        window.localStorage.setItem('darkmode', true)
        console.log('[!] Dark Mode Enabled')
    } else {
      VANTA.CLOUDS({
        el: ".vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        skyColor: 0x2caef5,
        cloudColor: 0xc5cee1,
        sunColor: 0xeb9431,
        sunGlareColor: 0xe37755,
        sunlightColor: 0xc88851
      })
        window.localStorage.removeItem('darkmode')
        console.log('[!] Light Mode Enabled')
    }
}

// Runs the check on page load 
checkLocalStorageDM()
// Event Listen for click to change CSS mode 
document.getElementById("darkmode-button").addEventListener("click", darkModeTest);

// Vars/Func to make Nav bar stick to stop after scroll 
window.onscroll = function() {stickyNav()};

let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}