import React from 'react';
import Card from '@/components/Card';
import posts from "@/posts.json";
import PostFooter from './post/PostFooter';
import PostHeader from './post/PostHeader';
import CreatePost from './post/CreatePost';

const HomeContainer = () => {
  return (
    <div className="w-full sm:w-7/10 lg:w-2/3 xl:w-1/2 mx-auto px-4 mt-8">
      <h1 className="text-white text-3xl font-light">Hello Jane</h1>
      <p className="text-text-default mt-3">How are you doing today? Would you like to share something with the community 🤗</p>
      <CreatePost />
      {
        posts.map((post) => (
          <Card
            key={post.id}
            cardHeader={<PostHeader name={post.name} img={post.img} date={post.date} isEdited={post.isEdited} />}
            cardFooter={<PostFooter commentCount={post.commentCount} />}
            renderEmoji={post.emoji}
          >
            <p className="text-text-default">{post.content}</p>
            </Card>
        ))
      }

    </div>
  )
}

export default HomeContainer
