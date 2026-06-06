import { useState } from 'react';
import { useEmojiContext } from '../context/EmojiContext';


function Emoji() {
    const [mood, setMood] = useState('😀')

    const {currentEmoji, handleUpdateEmoji} = useEmojiContext() 


    const handleChangeMood = () => {
        let newMood = '😣';
            if (mood === '😣') newMood = '😫'
            else if (mood === '😫') newMood = '😭';
        setMood(newMood)


        handleUpdateEmoji ({mood: mood})
    }




    return(
        <div className="Emoji componentBox">
            Current Mood: {mood}

            <button onClick={handleChangeMood}>Change Mood</button>
            
        </div>
    )
}

export default Emoji