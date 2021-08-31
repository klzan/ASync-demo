(() => { 

// function simulateAsyncAPI(text, timeout){ 
//     setTimeout(() =>  console.log(text), timeout);
// }

// simulateAsyncAPI('A', 1000);
// simulateAsyncAPI('B', 500);
// simulateAsyncAPI('C', 100);




//  function simmulateAsyncAPI(text, timeout, callback) { 
//       setTimeout(() => { 
//           console.log(text) 
           
//           if (callback) { 
//               callback();
//           }
//       }, timeout);
//  }

//  simmulateAsyncAPI('A', 1000, () => { 
//     simmulateAsyncAPI('B', 500, () => {  
//         simmulateAsyncAPI('C', 100,);
//  }); 
// });


function simulateAsyncAPI(text, timeout) { 
    return new Promise((resolve, reject) => { 
        setTimeout(() => { 
            // if (text === 'B') return reject('B got rejected'); 
            console.log(text); 
            resolve();
        }, timeout);
    });
}
 
   simulateAsyncAPI('A', 1000) 
   .then(() => { 
       return simulateAsyncAPI('B', 500);
   }) 
   .then(() => { 
      return simulateAsyncAPI('C', 100);
   }) 
   .catch((error) => { 
       console.error(error);
   })

 

   function simulateAsyncAPI(text, timeout) { 
    return new Promise((resolve, reject) => { 
        setTimeout(() => { 
            // if (text === 'B') return reject('B got rejected'); 
            console.log(text); 
            resolve();
        }, timeout);
    });
}
 
async function run () { 
    try { 
        await simulateAsyncAPI('A', 1000); 
        await simulateAsyncAPI('B', 500); 
        await simulateAsyncAPI('c', 100); 
    } catch (error) { 
        console.error(error);
    }
}
 run();


})();
