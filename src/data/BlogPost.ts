interface BlogPost {
    id: number;
    key: string;
    date: string;
    timeToRead: string;
    title: string;
    bannerImg: string,
    highlightedPostImg: string;
    articlePostImg: string;
    description: string;
    content: string;
    highlighted: boolean | false;
    trending: boolean | false;
    tags: string[];
}

export default BlogPost;