import styled from 'styled-components'

export const Container = styled.div`
 h1 {
    text-align: center;
    margin: 4rem 0;
}

footer {
    margin-top: 5rem;
    text-align: center;
    font-size: 1.5rem;
}
`

export const MovieList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem
`

export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;

 img{
    width: 180px;
    border-radius: 0.8rem;
    margin-bottom: 2rem;
}

 span {
    font-weight: bold;
    font-size: 120%;
    text-align: center;
}

 a {
    transition: all 0.4s;
}

 a:hover {
    transform: scale(1.2);
    border: 3px solid;
}
`
