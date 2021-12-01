import Link from "next/link";
import fs from 'fs';
import grayMatter from 'gray-matter';
import { remark } from 'remark';
import remarkHTML from 'remark-html';
import Image from 'next/image';

const Projects = ({ projects }) => {
    return (
        <>
            <div>
                <div className="bannerSectionProjects">
                    <h1>Projetos</h1>
                </div>
                <div className="projectsContent">
                    <div className="titleProjects"><h2>Últimos Projetos</h2></div>
                    <div className="projectsList">
                        {projects.map((project) => {
                            return (
                                <Link href={`/projects/${project.metadata.slug}`} key={project.metadata.slug}>
                                    <a>
                                        <div className="project">
                                            <div className="projectMetadataImage" style={{
                                                backgroundImage: `url(${project.metadata.banner})`,
                                                backgroundSize: 'cover',
                                                backgroundRepeat: 'no-repeat'
                                            }}>
                                            </div>
                                            <div className="projectMetadata">
                                                <div className="titleProjectMini">{project.metadata.name}</div>
                                                <div className="resumeProjectMini">{project.metadata.excerpt}</div>
                                                <div className="dateProjectMini">{project.metadata.date}</div>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export async function getStaticProps() {
    const getAllProjects = () => {
        const allProjectsFileNames = fs.readdirSync('./projects');
        const projects = allProjectsFileNames.map((filename) => {
            const fileContent = fs.readFileSync(`./projects/${filename}`, 'utf-8');
            const { content, data: metadata } = grayMatter(fileContent);
            const htmlContent = remark()
                .use(remarkHTML)
                .processSync(content)
                .toString();
            return {
                metadata: {
                    ...metadata,
                    slug: filename.replace(".md", ""),
                },
                content: htmlContent
            }
        })

        return projects;
    }
    const projects = getAllProjects();

    return {
        props: {
            projects
        }
    };
}

export default Projects;