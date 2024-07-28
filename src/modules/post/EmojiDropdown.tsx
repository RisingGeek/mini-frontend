import { useEffect, useRef, useState } from 'react';

const emojis = ['😀', '😂', '😍', '😎', '😢', '😡'];

// Emoji dropdown to select emoji while creating post
const EmojiDropdown = () => {
    const [selectedEmoji, setSelectedEmoji] = useState(emojis[0]);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const selectEmoji = (emoji: string) => {
        setSelectedEmoji(emoji);
        setIsOpen(false);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
                className="flex items-center justify-center px-4 py-2 focus:outline-none"
                onClick={toggleDropdown}
                style={{ backgroundColor: 'transparent', border: 'none' }}
            >
                {selectedEmoji}
            </button>

            {isOpen && (
                <div className="absolute mt-2 w-32 bg-white border border-gray-300 rounded-md shadow-lg">
                    <div className="py-1">
                        {emojis.map((emoji, index) => (
                            <button
                                key={index}
                                className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 focus:outline-none"
                                onClick={() => selectEmoji(emoji)}
                                style={{ backgroundColor: 'transparent', border: 'none' }}
                            >
                                {emoji}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Hidden native select for form submission */}
            <select
                className="hidden"
                value={selectedEmoji}
                onChange={(e) => selectEmoji(e.target.value)}
            >
                {emojis.map((emoji, index) => (
                    <option key={index} value={emoji}>
                        {emoji}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default EmojiDropdown;
