import './style.css';
import { 
    populateStorage,
    getStorage,
    clearStorage,
    checkStorage,
} from './storageController';
import refreshLibrary from './domController';

// initialize storage
checkStorage();

refreshLibrary();

