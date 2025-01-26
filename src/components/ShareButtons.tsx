function ShareButtons({ url, title }: { url: string, title: string }) {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(`Check out this amazing content: ${title}`);
    const whatsappMessage = encodeURIComponent(`Check out this amazing content: ${title} ${url}`);
    return (
        <ul>
            <li> <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a></li>
            <li> <a href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`} target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
            <li> <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
            <li> <a href={`https://wa.me/?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a></li>
        </ul>
    );

}

export default ShareButtons;