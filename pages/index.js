import React, { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import FileCard from './components/fileCard'
import DetailsCard from './components/detailsCard'
import { ThemeProvider } from '@mui/material/styles'
import theme from './../theme/MuiTheme'
import { AppBar } from '@mui/material'

export default function Home() {
	const [infoCupom, setInfoCupom] = useState()

	return (
		<ThemeProvider theme={theme}>
			<div className={styles.container}>
				<Head>
					<title>Leitor de cupom fiscal</title>
					<meta name='description' content='Leitor de cupom fiscal' />
					<link rel='icon' href='/favicon.ico' />
				</Head>
				<AppBar position='static' color='primary' enableColorOnDark>
					<h1 className={styles.title}>Solicitação de reembolso</h1>
				</AppBar>
				<main className={styles.main}>
					<FileCard setInfoCupom={setInfoCupom} />
					<DetailsCard infoCupom={infoCupom} setInfoCupom={setInfoCupom} />
				</main>
			</div>
		</ThemeProvider>
	)
}
