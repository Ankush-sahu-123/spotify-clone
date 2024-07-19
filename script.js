let spotifyPlaylist = document.getElementById("spotifyPlaylist");
        let songPage = document.getElementById("songPage");
        let songImgPlay = document.getElementById("songImgPlay");
        let song = document.getElementById("song");
        let songName = document.getElementById("songName");
        let singerName = document.getElementById("singerName");
        const cards = document.querySelectorAll('.card');
        const audios = document.querySelectorAll('audio');
        let ctrlIcon = document.getElementById("ctrlIcon");
        
        


        cards.forEach(card => {
    card.addEventListener('click', () => {
        const imageSrc = card.getAttribute('data-image');
        const audioSrc = card.getAttribute('data-audio');
        const name = card.getAttribute('data-name');
        const singer = card.getAttribute('data-singer');
        songImgPlay.setAttribute('src', imageSrc);
        song.setAttribute("src",audioSrc);
        songName.textContent = name;
        singerName.textContent = singer;
    });
});

        
        song.onloadedmetadata = function(){
            progress.max = song.duration;
            progress.value = song.currentTime;
        }
    
        function songClick(){
            spotifyPlaylist.style.display="none";
            songPage.style.display="block";

        }

        function playPause(){
            if(ctrlIcon.classList.contains("fa-pause")){
                song.pause();
                ctrlIcon.classList.remove("fa-pause");
                ctrlIcon.classList.add("fa-play");
            }
            else{
                song.play();
                ctrlIcon.classList.add("fa-pause");
                ctrlIcon.classList.remove("fa-play");
            }
        }
        
        function backWard(){
            song.currentTime-=10;
        }
        function forWard(){
            song.currentTime+=10;
        }
        
        
        function backToHome(){
            if(ctrlIcon.classList.contains("fa-pause")){
                song.pause();
                ctrlIcon.classList.remove("fa-pause");
                ctrlIcon.classList.add("fa-play");
            }
            spotifyPlaylist.style.display="block";
            songPage.style.display="none";
        }

        if(song.play()){
            setInterval(()=>{
                progress.value = song.currentTime;
            },500);
        }
        
        if(song.duration == progress.value.max){
            ctrlIcon.classList.remove("fa-pause");
            ctrlIcon.classList.add("fa-play");
        }


        progress.onchange = function(){
            song.play();
            song.currentTime = progress.value;
            ctrlIcon.classList.add("fa-pause");
            ctrlIcon.classList.remove("fa-play");
        }