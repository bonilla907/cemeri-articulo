import europa from '../assets/img/europa.png'
import facebook from '../assets/img/facebook.png'
import twitter from '../assets/img/twitter.png'
import linkedin from '../assets/img/linkedin.png'
import whatsapp from '../assets/img/whatsapp.png'
import correoicon from '../assets/img/correo-icon.png'
function Titulo() {
    return (
        <article>
            <div className="titulo">
                <h1>Geopolítica energética de Europa</h1>
                <br /><br />
                <div className="container">
                        <img className="imagen" src={europa} alt="" width="1120" height="600" />
                        <br/><br/>
                        </div>
                </div>

                <div className="iconos">
                    <section className="left">
                        <img src={facebook} alt="" width="25" height="25" />
                        <img src={twitter} alt="" width="25" height="25" />
                        <img src={linkedin} alt="" width="25" height="25" />
                        <img src={whatsapp} alt="" width="25" height="25" />
                        <img src={correoicon} alt="" width="25" height="25" />
                    </section>
                    <section className="center">
                        mayo 30, 2022
                    </section>

                    <br /><br /><br />
                </div>
        </article>

    )
}
export default Titulo;