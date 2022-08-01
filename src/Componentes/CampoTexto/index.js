import './CampoTexto.css'

function CampoTexto (props){
    const placeholderMod = `${props.placeholder}...`
    
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder={placeholderMod}/> 
        </div>
    )
}

export default CampoTexto


// O props puxa as propriedades relacionadas ao componentes, como no app.js chamamos o componentes com a label = "...", essa props retorna o que foi escrito em label.
// Logo, para utilizar ela como variável colocamos entre {}