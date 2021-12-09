import configureStore from './store/configureStore';
import * as actions from './store/bugs';

const store = configureStore();

store.dispatch(actions.bugAdded({ description: "Bug one" }));
store.dispatch(actions.bugAdded({ description: "Bug two" }));
store.dispatch(actions.bugResolved({ id: 2 }));
store.dispatch(actions.bugRemoved({ id: 1 }));
