import { useState } from 'react';

function Emoji() {
    const [mood, setMood] = useState('😀')



    const handleChangeMood = () => {
        let newMood = '😣';
            if (mood === '😣') newMood = '😫'
            else if (mood === '😫') newMood = '😭';
        setMood(newMood)
    }

    return(
        <div className="Emoji componentBox">
            Current Mood: {mood}

            <button onClick={handleChangeMood}>Change Mood</button>
            
        </div>
    )
}

export default Emoji