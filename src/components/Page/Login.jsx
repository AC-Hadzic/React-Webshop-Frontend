import { iconPack } from "../../assets/Icons/Icons";
import "./Login.css"

function Login()
{
    return (
        <div className="login_wrap">
            <h2><img className="icon" src={iconPack.login} alt="Login Icon" /> Prijavite se u svoj TeleProdaja korisnički račun:</h2>

            <div className="main">
                <div className="login_section">
                    <form action="" method="get">
                        <div className="user_input">
                            <div className="email_data">
                                <label for="email"> E-mail adresa: </label>
                                <input type="email" name="email" id="email" />
                            </div>
                                
                            <div className="pass_data">
                                <label for="lozinka"> Lozinka: </label>
                                <input type="password" name="lozinka" id="lozinka" />
                            </div>    
                        </div>
                        
                        <button type="submit"> Prijavi se </button>
                    </form>
                </div>

                <div className="register_recover">
                    <p>Ukoliko još nemate račun na TeleProdaji, kliknite na gumb ispod za registraciju!</p>

                    <button> Registriraj se! </button>

                    <div className="height">
                        <span>Zaboravljena lozinka? <a href=""> Klikni na ovaj link! </a></span>
                    </div>
                    
                </div>    
            </div>
        </div>
    )
}

export {Login};