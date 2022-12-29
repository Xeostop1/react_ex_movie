function DetailMovie({coverImg, title, year, summary, genres}) {
   return (
    <div className="detailMovie">
        <img src={coverImg} alt={title}/>
        <h2>{title}</h2>
        <span>{year}</span>
        <ul>
            {genres.map((g)=><li key={g}>{g} </li>)}
        </ul>
        <p>{summary}</p>
    </div>
   );
}

export default DetailMovie;