import React, { FC } from 'react'
import './Modal.scss';

type Props = {
	modalContent: JSX.Element
}

const Modal: FC<Props> = ({ modalContent }) => {

	return (
			<section className="modal">
				{modalContent}
			</section>
	)
}

export default Modal;
