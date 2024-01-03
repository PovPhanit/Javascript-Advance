'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const renderCountry = function (data, className = '') {
  //convert obj to array
  const arr = Object.entries(data[0].currencies);
  console.log(arr[0][1].name);
  const arr1 = Object.entries(data[0].languages);
  console.log(arr1);
  console.log(arr1[0][1]);
  let html = `
  <article class="country ${className}">
  <img class="country__img" src="${data[0].flags.png}" />
  <div class="country__data">
    <h3 class="country__name">${data[0].name.common}</h3>
    <h4 class="country__region">${data[0].region}</h4>
    <p class="country__row"><span>👫${(data[0].population / 1000000).toFixed(
      1
    )}</span> POP people</p>
    <p class="country__row"><span>🗣️${arr1[0][1]}</span></p>
    <p class="country__row"><span>💰${arr[0][1].name}</span></p>
  </div>
</article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
const renderError = function (msg) {
  countriesContainer.textContent = msg;
  countriesContainer.style.opacity = 1;
};

// First :
//new XMLHttpRequest(); : for call api
//variXMLHR.open('GET',`urlRestCountry`); :for open api urlRestCountry
//variXMLHR.send(); : for using option in API
//variXMLHR.responseText; : for convert XMLHR to text
//JSON.parse(variXMLHR.responseText); : convert to api

//fetch(`urlRestApi`).then(response=>{return response.json();}).then(data=>{}).catch(err=>{}).finally(()=>{});
//throw new Error(`user put`);
//if using fetch but return fetch again ,you will need use response.json() again then use data



new Promise((resolve,reject){
  resolve(` `); //for load and with settimeout
  reject(` `); //for error
}).then(message=>{

})


Promise.all([variArr,...]).then(messageResolve=>{}); // for output all of array
Promise.race([variArr,...]).then(messageResolve=>{}); //for output first element that faster
Promise.resolve(vari).then(messageResolve=>{});
Promise.reject(vari).then(messageReject=>{});




// const getCountryandNeibour = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     console.log(this);
//     console.log(request.responseText);
//     const data = JSON.parse(this.responseText);
//     console.log(data);
//     renderCountry(data);
//     //get neighbour country
//     const neighbour = data[0].borders;
//     if (!neighbour) return;
//     //ajax call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();
//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };
// getCountryandNeibour('Cambodia');

// ============================================================================

//  Second :
// need to study it again
// const getJSON=function(url,errorMsg='Something went wrong'){
//  return fetch(url)
//     .then(response => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`${errorMsg} (${response.status})`);

//       return response.json();
//     })
// }

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       renderCountry(data);
//       const neighbour = data[0].borders[0];
//       console.log(neighbour);
//       if (!neighbour) return;
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err}`);
//       console.log(err);
//       renderError(`Something went wrong ${err.message}. Try again!`);
//       countriesContainer.classList.add('errors');
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// getCountryData('cambodia');
// Third :
// let getJSON = function (url, errorMsg = 'Something went wrong') {
//   fetch(url).then(response => {
//     console.log(response);

//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
//     return response.json();
//   });
// };
// const getCountryData = function (country) {
//     getJSON(`https://restcountries.com/v3.1/name/${country}`)
//     .then(data => {
//       console.log(data);
//       renderCountry(data);
//       const neighbour = data[0].borders[0];

//       console.log(neighbour);
// if (!neighbour) return;
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         `country not found`
//       );
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err}`);
//       console.log(err);
//       renderError(`Something went wrong ${err.message}. Try again!`);
//       countriesContainer.classList.add('errors');
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// btn.addEventListener('click', function () {
//   getCountryData('portugal');
// });
// getCountryData('cambodia');

// four
// const whereamI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(res => {
//       console.log(res);
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`you are in ${data.city}. ${data.country}`);
//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found (${res.status})`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       // renderCountry(data, 'neighbour');
//       renderCountry(data);
//     })
//     .catch(err => console.error(`${err.message} 😋`));
// };
// whereamI(12.565679, 104.990963);
// whereamI(-33.933, 18.474);
// whereamI(-33.933, 18.474);
// whereamI(-33.933, 18.474);
// whereamI(52.508, 13.381);

//promise

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const imgContainer = document.querySelector('.images');

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', function () {
//       imgContainer.append(img);
//       resolve(img);
//     });
//     img.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };

// let currentImg;

// createImage('img/img-1.jpg')
//   .then(img => {
//   console.log(img);
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

// get Possition
// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };
// const whereAmI = async function (country) {
//   const pos = await getPosition();
//   console.log(pos);
//   const lat = pos.coords.latitude;
//   const lng = pos.coords.longitude;
//   console.log(lat, lng);
//   const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);// get country with lat and long
//   console.log(resGeo);
//   const dataGeo = await resGeo.json();
//   const res = await fetch(
//     `https://restcountries.com/v3.1/name/${dataGeo.country}`
//   );
//   const data = await res.json();
//   console.log(data);
//   renderCountry(data);
// };

// whereAmI();
// console.log('First');
//==========================================================
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

// part 1
// let currentImg;
// createImage('img/img-1.jpg')
//   .then(img => {
//   console.log(img);
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

// part 2
// const loadNPause = async function () {
//   try {
//     let img = await createImage('img/img-1.jpg');
//     console.log('Image 1 loaded');
//     await wait(2);
//     img.style.display = 'none';

//     //image 2
//     img = await createImage('img/img-2.jpg');
//     console.log('Image 2 loaded');
//     await wait(2);
//     img.style.display = 'none';
//   } catch (err) {
//     console.log(err);
//   }
// };
// loadNPause();

//part 3
const loadAll = async function (imgArr) {
  console.log(imgArr);
  try {
    const imgs = imgArr.map(img => createImage(img));
    console.log(imgs);
    const imgEl = await Promise.all(imgs);
    console.log(imgEl);
    imgEl.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(err);
  }
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);

// //promise test
let p = new Promise((resolve, reject) => {
  let a = true;
  if (a) {
    resolve('Successfully');
  } else {
    reject('Error');
  }
});

p.then(message => {
  console.log('This is ' + message);
}).catch(error => {
  console.error(error + ' function...');
});

// //      promise all,race,resolve,reject
const recordone = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'Video 1 is recorded');
});
const recordtwo = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'Video 2 is recorded');
});
const recordthree = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, 'Video 3 is recorded');
});

// // promise all
Promise.all([recordone, recordtwo, recordthree]).then(message => {
  console.log(message);
});

// // promise race
// //output first element is faster of array
Promise.race([recordone, recordtwo, recordthree]).then(message => {
  console.log(message);
});

// //promise resolve
Promise.resolve(recordone).then(message => {
  console.log(message);
});

// //promise reject
Promise.reject(recordone)
  .then(message => {
    console.log(message);
  })
  .catch(() => {
    console.log('Cant aceess');
  });

const functionf = async function () {
  return new Promise(function (resolve) {
    resolve(`Hello world`);
  });
};
functionf().then(message => {
  console.log(message);
});

