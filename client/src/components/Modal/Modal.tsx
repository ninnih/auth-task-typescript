import React, { FC } from 'react'
import './Modal.scss';

type Props = {
	modalContent: any
}

const Modal: FC<Props> = ({ modalContent }) => {

	return (
		// <section className="modalWrapper">
			<section className="modal">
				{modalContent}
			</section>
		// </section>
	)
}

export default Modal;
