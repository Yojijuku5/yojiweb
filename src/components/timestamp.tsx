import { useEffect, useState } from "react";

interface TimepostProps {
    showTime: boolean;
}

const Timepost: React.FC<TimepostProps> = ({ showTime }) => {
    const [currentTime, setCurrentTime] = useState<string>('');

    useEffect(() => {
    const updateCurrentTime = () => {
        const now = new Date();
        const formattedTime = now.toLocaleTimeString();
        setCurrentTime(formattedTime);
    }

    updateCurrentTime();
    })

    return (
        <div>
            {showTime && <p>Time: {currentTime}</p>}
        </div>
    )
}

export default Timepost;