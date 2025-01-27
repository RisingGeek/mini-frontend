import Button, { ButtonType } from '@/components/Button';
import Card from '@/components/Card';
import Input from '@/components/Input';
import { useState } from 'react';
import EmojiDropdown from './EmojiDropdown';

// Card for create post
const CreatePost = () => {
    const [postInput, setPostInput] = useState("");
    const handleCreatePost = () => {
        // do something when Post button is clicked
    };

    return (
        <Card
            cardHeader={<h3 className="text-white">Create post</h3>}
            cardFooter={<div className="text-right">
                <Button
                    type="submit"
                    btnType={ButtonType.PRIMARY}
                    className="px-8"
                    onClick={handleCreatePost}
                >
                    Post
                </Button>
            </div>}
            renderEmoji={<EmojiDropdown />}
        >
            <Input
                type="text"
                placeholder="How are you feeling today?"
                value={postInput}
                onChange={(e) => setPostInput(e.target.value)}
                inputContainerClassName="w-full"
                className="border-0"
            />
        </Card>
    );
};

export default CreatePost;
