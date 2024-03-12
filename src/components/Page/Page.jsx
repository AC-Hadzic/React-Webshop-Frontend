function Page({title, description})
{
    return (
        <>
            <div id={"sidebar"}>
                {title}
                <p>{description}</p>
            </div>
        </>
    )
}

export {Page};