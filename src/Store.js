import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { rootReducer } from './RootReducer'
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['imageCustomizeReducer']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, {}, applyMiddleware(thunk))
const persistor = persistStore(store)

export { store, persistor }
