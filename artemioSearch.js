const imageSearch = require('image-search-google');
const keyJson = require('./key.json');

const client = new imageSearch(keyJson.CSEID,keyJson.apiKey);
const options={page:1};

const artemioSearch = async (name,index) =>{
    var search = client.search(name, options);
    return search.then(images => (images[index].url)).catch(error =>(error));
}


module.exports.artemioSearch = artemioSearch;
