import React from 'react'
type Todos1 = {
    todos1: string
}

const ShowCards: React.FC<{ todos1: string }> = ({ todos1 }) => {
    return (
        <div>
            <form>
                <p>{todos1}</p>
            </form>
        </div>
    )
}

export default ShowCards;
