import { useEffect } from "react"

const UseTile = (title) => {
    useEffect(() => { 
        document.title = `${title} - The Dragon News`;
    }, [title]);
}

export default UseTile;