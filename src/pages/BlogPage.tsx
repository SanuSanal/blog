import { useState, useEffect } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";
import { Link, useParams } from "react-router-dom";

import BlogPost from "../data/BlogPost";
import articleContents from "../data/blog-content";
import FileNotFoundPage from "./FileNotFoundPage";

const Blog = () => {
    const { articleKey } = useParams();
    const origin = window.location.origin + '/blog';

    const [htmlContent, setHtmlContent] = useState<string>("");

    let currentArticle: BlogPost | undefined;
    let nextArticle: BlogPost | undefined;
    let previousArticle: BlogPost | undefined;
    for (let index = 0; index < articleContents.length; index++) {
        const article = articleContents[index];

        if (article.key === articleKey) {
            currentArticle = article;
            nextArticle = index + 1 < articleContents.length ? articleContents[index + 1] : articleContents[0];
            previousArticle = index - 1 < 0 ? articleContents[articleContents.length - 1] : articleContents[index - 1];
            break;
        }
    }

    useEffect(() => {
        if (currentArticle) {
            const markdown = currentArticle.content;
            const updatedMarkdown = markdown.replace(/!\[([^\]]*)\]\((\/[^)]+)\)/g, (match, altText, url) => {
                return `![${altText}](${origin}${url})`;
            });

            const convertedHtml = marked(updatedMarkdown) as string;
            const sanitizedHtml = DOMPurify.sanitize(convertedHtml);

            setHtmlContent(sanitizedHtml);
        }
    }, [currentArticle, origin]);

    useEffect(() => {
        const codeBlocks = document.querySelectorAll("pre code");

        codeBlocks.forEach((block) => {
            const blockElement = block as HTMLElement;

            const button = document.createElement("button");
            button.innerText = "Copy";
            button.className = "copy-button";
            button.onclick = () => {
                copyCodeToClipboard(blockElement.innerText);
                button.innerText = "Copied!";
                setTimeout(() => {
                    button.innerText = "Copy";
                }, 2000);
            };

            const preElement = block.parentElement;
            if (preElement) {
                preElement.classList.add("code-block");
                preElement.style.position = "relative";
                preElement.appendChild(button);
            }
        });
    }, [htmlContent]);

    const copyCodeToClipboard = (code: string) => {
        navigator.clipboard.writeText(code).then(
            () => {
                console.log("Copied to clipboard successfully!");
            },
            (err) => {
                console.error("Failed to copy code to clipboard: ", err);
            }
        );
    };

    if (!currentArticle) {
        return <FileNotFoundPage />;
    }

    return (
        <section className="blog-single">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 order-2 order-lg-1">
                        <div className="share-now">
                            <a className="scrol">Share</a>
                            <div className="sociel-icon">
                                <ul>
                                    <li> <a href="https://github.com/SanuSanal" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
                                    <li> <a href="https://www.instagram.com/a_bad_code" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/sanalmachingal/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
                                    <li> <a><i className="fab fa-facebook"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-10 order-1 order-lg-2">
                        <article className="single-blog">
                            {/* <a href="#" className="tag">Travel</a> */}
                            <p className="title">{currentArticle?.title}</p>
                            <ul className="meta">
                                <li>By <Link to="/about">Sanal Machingal</Link></li>
                                <li>
                                    <i className="fa fa-clock-o"></i>&nbsp;
                                    {currentArticle?.date} - {currentArticle?.timeToRead}
                                </li>
                            </ul>
                            <img src={origin + currentArticle?.bannerImg} alt="banner" className="article-banner" />

                            <div className="article-content" dangerouslySetInnerHTML={{ __html: htmlContent }} />

                        </article>
                        <div className="blog-single-presentation">
                            <ul>
                                <li> <Link to={`/article/${previousArticle?.key}`} className="tag">PREVIOUS</Link>
                                    <Link to={`/article/${previousArticle?.key}`} className="title">{previousArticle?.title}</Link>
                                    <i className="fa fa-clock-o"></i>&nbsp;
                                    {previousArticle?.date} - {previousArticle?.timeToRead}
                                </li>
                                <li> <Link to={`/article/${nextArticle?.key}`} className="tag">Next</Link><Link to={`/article/${nextArticle?.key}`} className="title">{nextArticle?.title}</Link><i className="fa fa-clock-o"></i>&nbsp;
                                    {nextArticle?.date} - {nextArticle?.timeToRead}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
