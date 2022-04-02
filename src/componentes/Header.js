import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEyeSlash, faEye} from '@fortawesome/free-solid-svg-icons';

const Header = ({mostrarCompletadas, cambiarMostrarCompletadas}) => {
	const toggleCompletadas = () => {
		cambiarMostrarCompletadas(!mostrarCompletadas);
	}

	return (
		<header className="header">
			{/* <h1 className="header__titulo">To do list</h1> */}
			{mostrarCompletadas ?
				<button 
					className="header__boton"
					onClick={() => toggleCompletadas()}
				>
					Hide finished tasks
					<FontAwesomeIcon icon={faEyeSlash} className="header__icono-boton" />
				</button>
			:
				<button 
					className="header__boton"
					onClick={() => toggleCompletadas()}
				>
					Show finished tasks
					<FontAwesomeIcon icon={faEye} className="header__icono-boton" />
				</button>
			}
		</header>
	);
}
 
export default Header;