import './PlayButton.css';

function PlayButton({message, children, onPlay, onPause}){
    let playing = false; // Don't use this appraoch

    function handleClick(e){
        console.log(e);
        e.stopPropagation()
        // e.preventDefault();

        if(playing) onPause()
        else onPlay();

        playing = !playing;
    
    }

    return(
        <button onClick={handleClick}> {children}: {playing?'>':'||'}  </button>
    )

}

export default PlayButton;