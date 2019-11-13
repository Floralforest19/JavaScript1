const recordCompany = {
    name:'Cyber Records',
    owners: [
        'Johan Hårdstam',
        'Mia Karlsson'
    ],
    artists: [
        {
         name: 'Snailking',
         albums: [
             'Storm',
             'Winter'
         ]
        },
        {
            name: 'BTS',
            albums: [
                'Persona'
            ] 
        }
    ],
        findArtist: function (artists){
        console.log(recordCompany)
        for (let i =0; i<recordCompany.artists.length; i++){
            if (artists === recordCompany.artists[i].name){
                return recordCompany.artists[i]
            }
        }
        return false
    }
}

recordCompany.artists.push({
name: 'Britney',
albums: []
})



const artist = recordCompany.findArtist('Snailking')
console.log(artist)
artist.albums.push('Revolver')
console.log(recordCompany.artists[0])