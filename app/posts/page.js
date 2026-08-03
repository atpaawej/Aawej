import React from 'react';
import { getSortedPostsData } from '@/lib/posts';
import PostsList from './PostsList';

export const metadata = {
  title: 'Writing | Aawej Pathan',
  description:
    'Writing on agents, AI tooling, and building in public by Aawej Pathan.',
};

export default function PostsPage() {
  const posts = getSortedPostsData();

  return <PostsList posts={posts} />;
}