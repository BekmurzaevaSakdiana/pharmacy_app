// // src/app/store.js
// import { configureStore, combineReducers } from '@reduxjs/toolkit'
// import storage from 'redux-persist/lib/storage'
// import { persistReducer, persistStore } from 'redux-persist'
// import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'

// import counterReducer from '../features/counter/counterSlice'

// const rootReducer = combineReducers({
// //   counter: counterReducer,
// })

// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// })

// export const persistor = persistStore(store)
