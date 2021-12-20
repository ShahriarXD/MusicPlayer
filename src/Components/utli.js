import { v4 as uuidv4 } from 'uuid';

function chillHop() {
    return (
        [
            {
                name : "Devil Eyes",
                cover : "https://i1.sndcdn.com/artworks-000269256428-rlsi8w-t500x500.jpg",
                artist : "Hippie Sabotage",
                id:uuidv4(),
                active : true,
                color : ["#000000", "#FFF0F7"],
                audio : 'https://cdn.discordapp.com/attachments/550242758141542407/922310844526776330/hippie_sabotage_devil_eyes_bass_boosted_7382883126789364131.mp3'
            },
            {
                name : "Zaalima | Raees",
                cover : "https://c.saavncdn.com/334/Raees-Hindi-2016-20200430093124-500x500.jpg",
                artist : "Arijit Singh & Harshdeep Kaur",
                id:uuidv4(),
                active : false,
                color : ["#DBD9A0", "#A3A05D"],
                audio : 'https://cdn.discordapp.com/attachments/550242758141542407/922252541935362098/zaalima.mp3'
            },
            {
                name : "Na Pawar Golpo",
                cover : "https://f4.bcbits.com/img/a0600278755_10.jpg",
                artist : "Encore",
                id:uuidv4(),
                active : false,
                color : ["#A2403F", "#7E86AB"],
                audio : 'https://cdn.discordapp.com/attachments/550242758141542407/922252541100687410/na_pawar.mp3'
            },
            {
                name : "Hate Me",
                cover : "https://i1.sndcdn.com/artworks-000656453191-1pjgsp-t500x500.jpg",
                artist : "Ellie Goulding, Juice WRLD",
                id:uuidv4(),
                active : false,
                color : ["#8E141F", "#E7C1C0"],
                audio : 'https://cdn.discordapp.com/attachments/550242758141542407/922252540664512572/hate_me.mp3'
            }
        ]
    )
}
export default chillHop;