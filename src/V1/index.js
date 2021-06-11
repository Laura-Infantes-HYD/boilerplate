import './style.scss';
import pollForEl from '../helpers/pollForEl';
import _onLoad from './components/_onLoad';


// Test name to be added to ./style.scss and testName variable below
const testName = "test001" // add test name here

// Uncomment the following line to run peview links:
// pollForTrue(()=>{return qaCookieExists(testName)}).then(()=>{pollForEl('body').then(init)})

// Comment the following line to run peview links:
pollForEl('body').then(init);

function init() {
    const testAlreadyLoaded = document.body.classList.contains(testName)
    const errorMsg = "Test already loaded"

    if (testAlreadyLoaded) { console.warn(errorMsg); return }

    document.body.classList.add(testName);

    _onLoad()

}



