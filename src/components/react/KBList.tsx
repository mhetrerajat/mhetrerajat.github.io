'use client';

import React from 'react';
import type { Post } from '../types';
import { Table } from 'flowbite-react';

interface KBListProps {
    kbItems: [];
}

interface PostItemProps {
    post: Post
}



const KBList: React.FC<PostListProps> = ({ posts }) => {
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

export default KBList;