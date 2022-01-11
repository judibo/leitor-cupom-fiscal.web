import React from 'react'
import { Button, CardActions, CardContent } from '@mui/material'
import { DetailsContainer } from './styles'

const detailsCard = ({ infoCupom }) => {
	return (
		<>
			{infoCupom && (
				<DetailsContainer style={{ border: '1px solid #d6ebee' }}>
					<CardContent>
						<h3>Detalhes:</h3>
						{infoCupom.textoRecibo.split(/\n/).map((line) => (
							<>
								{line}
								<br />
							</>
						))}
					</CardContent>
					<CardContent>
						<h3>Cupom enviado:</h3>
						<img src={`./image/imagem_tratada.png?${Date.now()}`} alt='Cupom Fiscal tratado' style={{ maxWidth: 300 }} />
					</CardContent>
					<CardActions>
						<Button variant='contained' fullWidth disabled={!!infoCupom}>
							Solicitar reembolso
						</Button>
					</CardActions>
				</DetailsContainer>
			)}
		</>
	)
}
export default detailsCard
