import React from 'react';
import { getSortedPostsData } from '@/lib/posts';
import PostsList from './PostsList';

export const metadata = {
  title: 'Writing | Aawej Pathan',
  description: 'Thoughts on artificial intelligence, software prototyping, and engineering.',
};

export default function PostsPage() {
  const posts = getSortedPostsData();

  return <PostsList posts={posts} />;
}
