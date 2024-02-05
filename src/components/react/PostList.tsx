'use client';

import React from 'react';
import type { Post } from '../types';
import { Table } from 'flowbite-react';

interface PostListProps {
    posts: Post[];
}

interface PostItemProps {
    post: Post
}


const PostItem: React.FC<PostItemProps> = ({ post }) => {
    return (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <a className="font-medium text-cyan-600 hover:underline dark:text-cyan-500" href={post.link}>{post.title}</a>
            </Table.Cell>
            <Table.Cell>{post.postDate}</Table.Cell>
        </Table.Row>
    );
}


const PostList: React.FC<PostListProps> = ({ posts }) => {
    return (
        <div className="overflow-x-auto">
            <Table>
                <Table.Body className="divide-y">
                    {posts.map((post, index) => (
                        <PostItem key={index} post={post} />
                    ))}
                </Table.Body>
            </Table>
        </div>
    );
}

export default PostList;
