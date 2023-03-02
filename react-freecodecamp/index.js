/*
Vanilla JavaScript to create h1

const h1 = document.createElement('h1')
h1.textContent = 'This is an imperative way to program'
h1.className = 'header'
document.createElementById('root').append(h1)

*/

function MainContent() {
  return (
    <div>
      <header>
        <nav>
          <img src="./toffee.jpg" />
        </nav>
      </header>
      <h1>Little facts about my cat</h1>
      <body>
        <ul>
          <li>Her name is Toffee because he is a sweetie</li>
          <li>
            She was adopted when she was 4 mo and she was living in streets
          </li>
          <li>She doesn't seem to like human food</li>
          <li>
            She always meow loudly for attention when she thinks she is alone
          </li>
          <li>She is three-coloured</li>
        </ul>
      </body>
      <footer>Made with love</footer>
    </div>
  );
}

ReactDOM.render(<MainContent />, document.getElementById("root"));
