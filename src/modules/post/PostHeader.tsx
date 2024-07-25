import Button, { ButtonType } from '@/components/Button'
import Image from 'next/image';
import React from 'react'

interface PostHeaderProps {
    name: string;
    img: string;
    date: string;
}

const PostHeader = (props: PostHeaderProps) => {
    const { name, img, date } = props;
    const handlePostAction = () => { }

    const getPostTiming = (pastDate: Date) => {
        const now = new Date(); // Current date and time
        const past = new Date(pastDate); // Provided date and time
        const diffMs = now - past; // Difference in milliseconds

        // Calculate time differences
        const diffMinutes = Math.floor(diffMs / (1000 * 60)); // Minutes
        const diffHours = Math.floor(diffMinutes / 60); // Hours
        const diffDays = Math.floor(diffHours / 24); // Days

        // Determine the appropriate time unit to display
        if (diffDays > 0) {
            return `${diffDays}day${diffDays > 1 ? 's' : ''} ago`;
        } else if (diffHours > 0) {
            return `${diffHours}hour${diffHours > 1 ? 's' : ''} ago`;
        } else if (diffMinutes > 0) {
            return `${diffMinutes}min${diffMinutes > 1 ? 's' : ''} ago`;
        } else {
            return 'Just now'; // For cases where less than a minute has passed
        }
    };
    const postTime = getPostTiming(new Date(date));

    return (
        <div className="flex justify-between">
            <div className="flex items-center gap-3">
                <div>
                    <Image
                        src={img}
                        width={32}
                        height={32}
                        className="rounded-full"
                        alt="avatar"
                    />
                </div>
                <div>
                    <p className="text-white">{name}</p>
                    <p className="text-xs text-text-default">{postTime}</p>
                </div>
            </div>
            <Button
                type="button"
                btnType={ButtonType.TEXT}
                onClick={handlePostAction}
            >
                ...
            </Button>
        </div>
    )
}

export default PostHeader
