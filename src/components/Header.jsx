import { useState, useEffect } from 'react';
import logo from '../assets/logo.webp';

function Header() {
    const [dateTime, setDateTime] = useState({
        date: '',
        day: '',
        time: '',
    });

    const [textSize, setTextSize] = useState(16); // Default text size
    const [language, setLanguage] = useState('en'); // Default language

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

            const date = now.toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
            });

            const day = days[now.getDay()];
            const time = now.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true,
            });

            setDateTime({ date, day, time });
        };

        updateDateTime();
        const intervalId = setInterval(updateDateTime, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const increaseTextSize = () => {
        setTextSize((prevSize) => Math.min(prevSize + 2, 24)); // Increase text size, max 24px
    };

    const decreaseTextSize = () => {
        setTextSize((prevSize) => Math.max(prevSize - 2, 12)); // Decrease text size, min 12px
    };

    const toggleLanguage = () => {
        setLanguage((prevLang) => (prevLang === 'en' ? 'hi' : 'en'));
    };

    const navItems = [
        { label: 'Home' },
        { label: 'Overview' },
        { label: 'Announcements' },
        { label: 'Grievances' },
        { label: 'Helpdesk' },
        { label: 'Statistics' },
        { label: 'Contact us' }
    ];

    const [active, setActive] = useState(null);

    const handleClick = (index) => {
      setActive(index); 
    };

    return (
        <div className="w-full ">
            {/* Top Bar with Date and Text Controls */}
            <div className="bg-hblue1 text-white flex justify-between items-center px-5 py-2 text-sm">
                <div>{`${dateTime.date} | ${dateTime.day} | ${dateTime.time}`}</div>
                <div className="flex items-center gap-3">
                    <button onClick={decreaseTextSize} className="text-lg">
                        -
                    </button>
                    <span style={{ fontSize: `${textSize}px` }}>A</span>
                    <button onClick={increaseTextSize} className="text-lg">
                        +
                    </button>
                    <span>|</span>
                    <button onClick={toggleLanguage}>
                        {language === 'en' ? 'हिन्दी' : 'English'}
                    </button>
                </div>
            </div>

            {/* Logo and Title Section */}
            <div className="bg-hblue2 flex justify-between items-center p-5 ">

                <div style={{ fontSize: `${textSize}px` }} className='flex'>
                    <div className="mr-4">
                        <img
                            src={logo}
                            alt="AICTE Logo"
                            className="h-16"
                        />
                    </div>
                   <div className=' mt-1'>
                   <h1 className="m-0 text-white font-bold">
                        {language === 'en' ? 'Special Scholarship Scheme for J&K and Ladakh (PM-USPY)' : "प्रधानमंत्री विशेष छात्रवृत्ति योजना (पीएमएसएसएस) "}

                    </h1>
                    <p className="m-0 text-white font-semibold">
                        {language === 'en' ? 'All India Council for Technical Education'
                            : 'अखिल भारतीय तकनीकी शिक्षा परिषद'}
                    </p>
                   </div>
                </div>
                <div>
                    <nav className="flex flex-wrap gap-5 my-auto text-sm font-medium leading-loose text-right text-stone-100 max-md:max-w-full font-rubik">
                        {navItems.map((item, index) => (
                            <a
                                key={index}
                                href={`#${item.label.toLowerCase()}`}
                                className={`${active===index?" text-blue-300":"text-white"}` }
                                
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Header;
