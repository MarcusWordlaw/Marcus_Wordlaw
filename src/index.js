import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// export { default as App } from './App/App';
// export { default as ScrollToTop } from './ScrollToTop/ScrollToTop';
// export { default as Pages } from './Pages/Pages';
// export { default as Navigation } from './Navigation/Navigation';
// export { default as Home } from './Home/Home';
// export { default as Portfolio } from './Portfolio/Portfolio';
// export { default as Logo } from './Logo/Logo';

export { default as Github} from './components/Social/Github';  
export { default as Linkedin } from './components/Social/Linkedin';
export { default as Medium} from './components/Social/Medium';
export { default as Gmail} from './components/Social/Gmail';

// export { default as Javascript} from './Tech/Javascript';
// export { default as Html} from './Tech/Html';
// export { default as Css} from './Tech/Css';
// export { default as Node} from './Tech/Node';
// export { default as Mongodb} from './Tech/Mongodb';
// export { default as Jquery} from './Tech/Jquery';
// export { default as ReactIcon} from './Tech/React';
// export { default as Heroku} from './Tech/Heroku';
// export { default as GithubPages} from './Tech/GithubPages';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
