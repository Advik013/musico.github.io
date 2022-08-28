const music_container = document.getElementById("music-container");
const play = document.getElementsByClassName("play");
  

const music = [
  {
    name: "Wolves",
    singer: "Selena Gomez",
    src: "../audio/wolves.mp3",
    img: "../image/wolves.jpg",
  },
  {
    name: "Fake Love",
    singer: "BTS",
    src: "../audio/fakelove.mp3",
    img: "../image/fakelove.jpg",
  },
  {
    name: "Bad Boy",
    singer: "Badshah",
    src: "../audio/badboybadgirl.mp3",
    img: "../image/badboybadgirl.jpg",
  },
  {
    name: "Moh Moh",
    singer: "Monali thakur",
    src: "../audio/mohmoh.mp3",
    img: "../image/mohmoh.jpg",
  },
  {
    name: "Swarloon",
    singer: "Monali thakur",
    src: "../audio/swarloon.mp3",
    img: "../image/swarloon.jpg",
  },
  {
    name: "Arambh",
    singer: "Piyush Mishra",
    src: "../audio/arambh.mp3",
    img: "../image/arambh.jpeg",
  },
  {
    name: "Bajrang",
    singer: "Hariharam",
    src: "../audio/bajrang.mp3",
    img: "../image/Bajarang.jpg",
  },
];




let index = 0,
  prev,
  next;
song = music[index].src;
let audio = new Audio(song);

music.map((element, i) => {
  return (music_container.innerHTML += `

 
 <div class="music-card">
 <img src=${element.img} id="img">
 <div class="info">
     <h4 class="font" style="width: 100px;">${element.name}</h4>
     <span>${element.singer}</span>
 


</div>
<div class="control crS${i}"   style="height: 80px;">


 <i class="fa fa-play-circle play" style="font-size:48px;color:blue"  ></i>
</div>
</div>
 
 
 
`);
});

for (const btn of play) {
  // console.log(play);
  btn.addEventListener("click", async () => {
    // index = btn.parentElement.className.
    index = btn.parentNode.className.charAt(
      btn.parentNode.className.length - 1
    );

    // console.log(index);
    if (audio.paused) {
      song = music[index].src;
      audio = new Audio(song);

      audio.play();

      btn.className = "fa fa-pause-circle play";
      prev = index;
    } else if (!audio.paused) {
      if (prev === index) {
        // console.log("matched");
        prev = index;
        audio.pause();
        btn.className = "fa fa-play-circle play";
      } else if (prev != index) {
        audio.pause();
        play[prev].className = "fa fa-play-circle play";

        // console.log("not matched");

        song = music[index].src;
        audio = new Audio(song);

        audio.play();
        prev = index;
        play[prev].className = "fa fa-pause-circle play";
      }
    }
  });
}
