export function Wrapper({title,children})
{
    return(
        <div>
            <h2>{title}</h2>
            <div>
            {children}

            
            </div>
        </div>
    );
}