const axios = require('axios');

var url = 'https://kitabgaul.com/api/entries/';

var kata = function(word){
    let newUrl = url+word;
    axios.get(newUrl).then(response => {
        let data        = response.data,
        result      = data.entries[0],
        word        = result.word,
        definition  = result.definition,
        example     = result.example;
        console.log("========= Penjelasan =============");
        console.log(word);
        console.log(definition);
        console.log(example);

    }).catch(err => {
        console.log(err)
    });

}

exports.kata = kata;