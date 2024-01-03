import { TIMEOUT_SEC } from "../config";
import {async} from 'regenerator-runtime';
const timeout = function (s) {
    return new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new Error(`Request took too long! Timeout after ${s} second`));
      }, s * 1000);
    });
  };


export const AJAX=async function(url,uploadData=undefined){
  const fetchPRo =uploadData ? fetch(url,{
    method : 'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(uploadData),

  }) : fetch(url);
  try{

    const res=await Promise.race([fetchPRo,timeout(TIMEOUT_SEC)])
    const data = await res.json();
    console.log(res, data);
    if (!res.ok) throw new Error(`${data.message}(${data.status}) Error tt hx`);
    return data;
}
catch(err){
    throw err;
}
}


  /*export const getJSON=async function(url){
    try{
        const fetchPRo = await fetch(url);
        const res=await Promise.race([fetchPRo,timeout(TIMEOUT_SEC)])
        const data = await res.json();
        console.log(res, data);
        if (!res.ok) throw new Error(`${data.message}(${data.status}) Error tt hx`);
        return data;
    }
    catch(err){
        throw err;
    }
}

export const sendJSON=async function(url,uploadData){
  try{
      const fetchPRo = fetch(url,{
        method : 'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(uploadData),

      });
      const res=await Promise.race([fetchPRo,timeout(TIMEOUT_SEC)])
      const data = await res.json();
      console.log(res, data);
      if (!res.ok) throw new Error(`${data.message}(${data.status}) Error tt hx`);
      return data;
  }
  catch(err){
      throw err;
  }
}*/