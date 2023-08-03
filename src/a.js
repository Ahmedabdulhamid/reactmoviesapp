<div style={{display:"flex",justifyContent:"center"}}>
<Card bg='dark my-3' >

<Card.Body>
    <Card.Title className='text-light'>{series.original_name}</Card.Title>

    <Card.Text className='text-light'>
        {series.overview}
    </Card.Text>
    <div className='d-flex justify-content-center'>
    <Link to={series.homepage} ><Button>Play Trailer</Button></Link>
      
    </div>
    
    
    
</Card.Body>
</Card> 
</div>

{Math.floor(movie.runtime/60)}.