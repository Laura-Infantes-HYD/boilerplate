import './style.scss';
import pollForEl from '../helpers/pollForEl';


// Test name to be added to ./style.scss and init function below

pollForEl('body').then(init);

function init() {
    const testName = "test001" // add test name here
    const testAlreadyLoaded = document.body.classList.contains(testName)
    const errorMsg = "Test already loaded"

    if (testAlreadyLoaded) { console.warn(errorMsg); return }

    document.body.classList.add(testName);

    //add changes here

}



