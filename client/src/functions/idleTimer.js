// import React from 'react';
// import { useIdleTimer } from 'react-idle-timer';
// import App from '../App';

// export default function IdleUser(props){
//   const handleOnIdle = event => {
//     console.log('user is idle', event)
//     console.log('last active', getLastActiveTime())
//   }

//   const handleOnActive = event => {
//     console.log('user is active', event)
//     console.log('time remaining', getRemainingTime())
//   }

//   const handleOnAction = (e) => {
//     console.log('user did something', e)
//   }

//   const {getRemainingTime, getLastActiveTime} = useIdleTimer({
//     timeout: 1000 * 60 * 15,
//     onIdle: handleOnIdle,
//     onActive: handleOnActive,
//     onAction: handleOnAction,
//     debounce: 500
//   })

//   return(
//     <div>
//       <App />
//     </div>
//   )
// }
