import configureStore from './store/configureStore';
import * as actionsOfProject from './store/projects';
import * as actionsOfBug from './store/bugs';

const store = configureStore();

store.dispatch(actionsOfProject.projectAdded({ name: "Project one!" }));
store.dispatch(actionsOfBug.bugAdded({ description: "Bug one!" }));
