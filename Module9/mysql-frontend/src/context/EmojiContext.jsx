import React, { createContext, useState, useContext } from "react";



const EmojiContext = React.createContext();




export const EmojiProvider = (props) => {

const [currentEmoji, setCurrentEmoji] = useState({});

const handleUpdateEmoji = (Emoji) => {
setCurrentEmoji(Emoji);
}





return (
<EmojiContext.Provider value={{currentEmoji,
handleUpdateEmoji}}>
{props.children}
</EmojiContext.Provider>
);
}




export const useEmojiContext = () => {
return useContext(EmojiContext);
}