const apiController = {};
const axios = require('axios');

apiController.searchResults = (req, res, next) => {
  // Assume query information is passed into req.body.query
  const { query } = req.body;

  axios({
    method: 'get',
    url: 'https://www.googleapis.com/books/v1/volumes',
    params: {
      q: query,
    }
  })
  .then((data) => {
    // Create a property labelled searchResults on res.locals and set its value to an empty array
    res.locals.searchResults = [];
    // Iterate through data.data and return only 10 search results
    for (let i = 0; i < 10; i += 1) {
      // console.log(res.locals.searchResults);
      res.locals.searchResults.push({
        id: data.data.items[i].id,
        title: data.data.items[i].volumeInfo.title,
        subtitle: data.data.items[i].volumeInfo.subtitle,
        authors: data.data.items[i].volumeInfo.authors,
        publisher: data.data.items[i].volumeInfo.publisher,
        publishedDate: data.data.items[i].volumeInfo.publishedDate,
        description: data.data.items[i].volumeInfo.description,
        pageCount: data.data.items[i].volumeInfo.pageCount,
        categories: data.data.items[i].volumeInfo.categories,
        imageLinks: data.data.items[i].volumeInfo.imageLinks,
        // textSnippet: data.data.items[i].searchInfo.textSnippet
      })
    }
    next();
  })
  .catch((err) => {
    console.log('ERROR! Error in apiController.searchResults: ', err);
    next(err);
  })
}


module.exports =  apiController;