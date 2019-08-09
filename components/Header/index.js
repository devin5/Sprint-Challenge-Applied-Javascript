// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component



const container = document.querySelector('.header-container');


function Header() {

      // elements created

      const headerA = document.createElement('div');
      const headerB = document.createElement('span');
      const headerC = document.createElement('h1');
      const headerD = document.createElement('span');

      // elements structured

      headerA.appendChild(headerB);
      headerA.appendChild(headerC);
      headerA.appendChild(headerD);

      // classed added

      headerA.classList.add('header');
      headerB.classList.add('date');
      headerD.classList.add('temp');

      // content added

      headerB.textContent = 'SMARCH 28, 2019';
      headerC.textContent = 'Lambda Times';
      headerD.textContent = '98°';

return headerA;
}

    
container.appendChild(Header())

