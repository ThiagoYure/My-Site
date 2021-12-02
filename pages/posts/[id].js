import Link from "next/link";
import fs from 'fs';
import grayMatter from 'gray-matter';
import { remark } from 'remark';
import remarkHTML from 'remark-html';

const Post = ({ post }) => {
    return (
        <div>
            <div className="postBanner" style={{
                backgroundImage: `url(${post.metadata.banner})`,
                }}>
                <div className="postTitle">{post.metadata.title}</div>
                <div className="postDate">{post.metadata.date}</div>
            </div>
            <div className="postContent" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
    );
}

export async function getStaticPaths() {
    const allPostsFileNames = fs.readdirSync('./posts');

    const paths = allPostsFileNames.map((filename) => ({
        params: { id: filename.replace(".md", "") },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const fileContent = fs.readFileSync(`./posts/${params.id + ".md"}`, 'utf-8');
    const { content, data: metadata } = grayMatter(fileContent);
    const htmlContent = remark()
        .use(remarkHTML)
        .processSync(content)
        .toString();
    const post = {
        metadata: {
            ...metadata,
            slug: params.id,
        },
        content: htmlContent
    };

    return { props: { post } };
}

export default Post;