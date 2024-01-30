import { useState, useEffect } from 'react';

const Timestamp: React.FC = () => {
    const [currentTime, setCurrentTime] = useState<string>('');

    useEffect(() => {
        const updateCurrentTime = () => {
            const now = new Date();
            const formattedTime = now.toLocaleTimeString();
            setCurrentTime(formattedTime);
        }

        updateCurrentTime();

        const intervalId = setInterval(updateCurrentTime, 1000);

        return () => clearInterval(intervalId);
    })

    return (
        <div>
            <p>{currentTime}</p>
        </div>
    )
}

export default Timestamp;