import React from "react";
import { v4 as uuidv4 } from "uuid";

function chillHop() {
    return [
        {
            name: "Dreaming",
            artist: "Misha, Jussi Halme, El Train, goodie bags",
            cover: "https://chillhop.com/wp-content/uploads/2022/12/b48463b9b5a0351cc2f34b31fcee6185fdb03bb5-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ['#D8BB77', '#373D3A' ],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=49425",
        },
        {
            name: "Kaleidoscope",
            artist: "El Train",
            cover: "https://chillhop.com/wp-content/uploads/2022/12/b48463b9b5a0351cc2f34b31fcee6185fdb03bb5-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ['#D8BB77', '#373D3A' ],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=49426",
        },
        {
            name: "Lavender",
            artist: "El Train",
            cover: "https://chillhop.com/wp-content/uploads/2022/12/b48463b9b5a0351cc2f34b31fcee6185fdb03bb5-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ['#D8BB77', '#373D3A' ],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=49428",
        },
        {
            name: "Snap Back",
            artist: "El Train, Marc Mathias",
            cover: "https://chillhop.com/wp-content/uploads/2022/12/b48463b9b5a0351cc2f34b31fcee6185fdb03bb5-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ['#D8BB77', '#373D3A' ],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=49429",
        },
        {
            name: "Spring",
            artist: "El Train, goodie bags",
            cover: "https://chillhop.com/wp-content/uploads/2022/12/b48463b9b5a0351cc2f34b31fcee6185fdb03bb5-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ['#D8BB77', '#373D3A' ],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=49439",
        },
    ]
}

export default chillHop;