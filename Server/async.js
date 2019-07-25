const express = require('express')
const app = express();


console.log("before");
getRepositories(1);

console.log("Reading repos...");

function getRepositories(id,callback){
    setTimeout(()=>{
        user={ id:id, repo:['repo1','repo2','repo3']};
        callback(console.log(user));
    },2000)
    
}