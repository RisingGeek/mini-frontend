import Button, { ButtonType } from '@/components/Button';
import Image from 'next/image';

interface PostHeaderProps {
    name: string;
    img: string;
    date: string;
    isEdited?: boolean;
}

const PostHeader = (props: PostHeaderProps) => {
    const { name, img, date, isEdited } = props;
    const handlePostAction = () => { };

    const getPostTiming = (pastDate: Date) => {
        const now = new Date(); // Current date and time
        const past = new Date(pastDate); // Provided date and time
        const diffMs = now.getTime() - past.getTime(); // Difference in milliseconds

        // Calculate time differences
        const diffMinutes = Math.floor(diffMs / 60000); // Minutes
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
                    <p className="text-xs text-text-default">
                        {postTime}
                        {isEdited &&
                            <>
                                <span className="inline-block w-1 h-1 rounded-full bg-default align-middle mx-1"></span>
                                <span>Edited</span>
                            </>}
                    </p>
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
    );
};

export default PostHeader;
