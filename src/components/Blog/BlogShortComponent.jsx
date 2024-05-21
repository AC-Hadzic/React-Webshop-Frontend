import "../../assets/CSS/blog-short.scss";

function BlogShortComponent({title1, image1, imageAlt1, text1, title2, image2, imageAlt2, text2}) {
    return (
        <article className="blog">
            <section>
                <h2> {title1} </h2>
                <p>
                    <img src={image1} alt={imageAlt1} />
                    {text1}
                </p>
            </section>
            <section>
                <h2> {title2} </h2>
                <p>
                    <img src={image2} alt={imageAlt2} />
                    {text2}
                </p>
            </section>                    
        </article>
    )
}

export { BlogShortComponent };