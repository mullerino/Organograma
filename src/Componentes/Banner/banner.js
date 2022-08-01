import './banner.css'

function Banner(){
    // JSX -- O react interpreta isso e transforma em elementos no DOM.
    return (
        <header className='banner'>
            <img src="/imagens/banner.png" alt="Banner principal da páginad do Organo"/>
        </header>
    )
}

export default Banner