import fs from 'fs';
import grayMatter from 'gray-matter';
import { remark } from 'remark';
import remarkHTML from 'remark-html';

const Project = ({ project }) => {
    console.log(project);
    return (
        <div>
            <div className="projectBanner" style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
                backgroundImage: `url(${project.metadata.banner})`,
                backgroundPosition: "center top",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                }}>
                <div className="postTitle">{project.metadata.name}</div>
                <div className="postDate">{project.metadata.date}</div>
            </div>
            <div class="postContent" dangerouslySetInnerHTML={{ __html: project.content }} />
        </div>
    );
}

export async function getStaticPaths() {
    const allProjectsFileNames = fs.readdirSync('./projects');

    const paths = allProjectsFileNames.map((filename) => ({
        params: { id: filename.replace(".md", "") },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const fileContent = fs.readFileSync(`./projects/${params.id + ".md"}`, 'utf-8');
    const { content, data: metadata } = grayMatter(fileContent);
    const htmlContent = remark()
        .use(remarkHTML)
        .processSync(content)
        .toString();
    const project = {
        metadata: {
            ...metadata,
            slug: params.id,
        },
        content: htmlContent
    };

    return { props: { project } };
}

export default Project;