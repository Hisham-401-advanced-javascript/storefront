// let initialState = {
//   candidates: [
//     {
//       name: 'Hisham AlNaji',
//       votes: 0,
//     },
//     {
//       name: 'abdullah safi',
//       votes: 0,
//     },
//     {
//       name: 'ahmad Shela',
//       votes: 0,
//     },
//   ],
//   totalVotes: 0, 
// };

// // reducer : switch case
// export default (state = initialState, action) => {
//   let {type, payload} = action; // destructuring
//   // let type = action.type
//   // let payload = action.payload
    
//   switch(type) {
//   case 'INCREMENT':
//     let totalVotes = state.totalVotes + 1;
//     let candidates = state.candidates.map(candidate=> {
//       if (candidate.name === payload) {
//         return { name: candidate.name, votes: candidate.votes + 1};
//       }
//       return candidate;
//     });

//     // let candidates = state.candidates.map(candidate => candidate.name == payload ? {...candidate, votes: candidate.votes+1} : candidate);
            
//     return {candidates, totalVotes};

//   case 'RESET':
//     return initialState;
//   default:
//     return state;
//   }
// };

// // Actions function
// export const increment = (name) => {
//   return {
//     type: 'INCREMENT',
//     payload: name,
//   };
// };

// export const reset = () => {
//   return {
//     type: 'RESET',
//   };
// };
