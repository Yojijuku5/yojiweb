<<<<<<< HEAD
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

=======
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

>>>>>>> 6c1e9204363efd09f8e50d7f5655abb71006b7d9
export default Timepost;