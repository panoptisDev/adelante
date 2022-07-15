export default function css() {
  return {
    name: "App",
    extension: ".css",
    file: 
`
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;500&family=Ubuntu:wght@300;500&display=swap');

html {
  --main-color: #0A0613;
  --secondary-color: #36113C;
  --heading-color: #BD2C5C;
  --font-color: #FECF6A;
  --extra-color: #E96559;

  margin: 0;
  padding: 0;
  background-color: var(--main-color);
  color: var(--font-color);
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
}

::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  border-radius: 0px;
  background-color: var(--main-color);

}

::-webkit-scrollbar-thumb {
  border-radius: 0px;
  background-color: var(--font-color);
}

p {
  font-size: 1.3em;
  font-family: 'Inconsolata', monospace;
  font-weight: 300;
}

h1 {
  font-size: 1.8em;
  font-family: 'Ubuntu', sans-serif;
  color: var(--heading-color);
  font-weight: 500;
}

nav {
  display: flex;
  justify-content: space-between;
  background-color: var(--main-color);
  padding-left: 3rem;
  padding-right: 3rem;
  align-items: center;
  color: var(--font-color);
  border-bottom: 3px solid var(--extra-color);;
  font-weight: 400;
}

nav ul {
  margin: 0;
  padding: 1rem;
  list-style-type: none;
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  justify-content: center;
  column-gap: 2rem;
}
nav li {
  font-family: 'Inconsolata', monospace;
  font-size: 1.2em;
  font-weight: 500;
  text-decoration: none;
  color: var(--font-color);
}

nav li:hover {
  color: var(--heading-color);
  text-decoration: underline;
  cursor: pointer;
}

#nav-text {
  width: 600px;
  font-size: .7em;
  text-align: center;
}

button {
  margin: 1em;
  padding: 0.3em;
  width: auto;
  border-radius: 6px;
  border-style: none;
  color: var(--font-color);
  border: 3px solid var(--extra-color);
  background-color: var(--main-color);
  font-size: 1.2em;
}

.App {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  background-color: var(--main-color);
}

.components {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-color: var(--main-color);
}

.footer {
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  border-top: 2px solid var(--heading-color);
}

#footer-logo {
  width: 800px;
}

.connection-details {
  display: flex;
  flex-direction: column;
  width: auto;
  margin: 2em;
  margin-left: 4em;
  margin-right: 4em;
  padding: 2em;
  border: 2px solid var(--heading-color);
}

.logs {
  align-self: center;
  width: 95%;
  padding: 1em;
  height: 200px;
  overflow-y: scroll;
  border: 2px solid var(--heading-color);
}

.text-extra {
  color: var(--extra-color);
}

.log-text {
  color: var(--font-color);
}

.function-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--main-color);
  color: var(--font-color);
  border: 2px solid var(--heading-color);
  border-radius: 3px;
  width: 320px;
  height: auto;
  margin: 1em;
}

.function-box:hover {
  box-shadow: 0 0 10px var(--heading-color);
}

.box-heading {
  text-align: center;
}

.box-button {
  margin-top: auto;
  padding: 0.5em;
  margin-bottom: 2em;
}

.box-inputs {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

input[type=number]::-webkit-inner-spin-button {
  opacity: 0;
}

.box-inputs p {
  margin: 0;
  margin-top: 0.5em;
  padding: 0.2em;
  color: var(--font-color);
}

.box-inputs input {
  padding: 0.5em;
  margin: 0.5em;
  width: 70%;
  border-radius: 3px;
  border-style: none;
  color: var(--font-color);
  border: 1px solid var(--font-color);
  background-color: var(--main-color);
  font-size: 1.2em;
}

.box-inputs :last-child {
  margin-bottom: 2em;
}

.box-inputs input::placeholder {
  color: var(--font-color);
}

.function-box button {
  margin: 1em;
  margin-top: auto;
  padding: 0.5em;
  width: 70%;
  border-radius: 6px;
  border-style: none;
  color: var(--font-color);
  border: 3px solid var(--extra-color);
  background-color: var(--main-color);
  font-size: 1.2em;
}

button:hover {
  border: 3px solid var(--secondary-color);
  color: var(--main-color);
  background-color: var(--font-color);
}

`
  }
}