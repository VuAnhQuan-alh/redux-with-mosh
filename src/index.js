import configureStore from './store/configureStore';
import * as actions from './store/bugs';

const store = configureStore();

store.dispatch(actions.bugAdded("Bug one"));
store.dispatch(actions.bugAdded("Bug two"));
store.dispatch(actions.bugResolved(2));
store.dispatch(actions.bugRemoved(1));
