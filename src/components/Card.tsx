import { ReactNode, useEffect, useState } from 'react';

interface CardProps {
    cardHeader: ReactNode;
    cardFooter: ReactNode;
    renderEmoji: ReactNode;
    children: ReactNode;
}

// Reusable Card component for posts and create post
const Card = (props: CardProps) => {
    const { cardHeader, cardFooter, renderEmoji, children } = props;
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);
    return (
        <div className="bg-cgray-100 rounded-md py-4 px-4 my-4">
            {cardHeader}
            <div className="flex gap-3 bg-cgray-200 p-4 rounded-md my-2">
                <div className="flex items-center justify-center w-12 h-12 bg-cgray-100 rounded-full flex-shrink-0">
                    {renderEmoji}
                </div>
                {children}
            </div>
            {cardFooter}
        </div>
    );
};

export default Card;
