import React from "react"
import { Button, CardActions, CardContent, TextField } from "@mui/material"
import { DetailsContent } from "./styles"

const detailsCard = ({infoCupom}) => {
  const submitForm = () => {}

  return (
    <>
      {infoCupom && (
        <CardContent>
          <h3>Detalhes</h3>
          <DetailsContent>
            <TextField
              id="estabelecimento"
              label="Estabelecimento"
              variant="standard"
            />
            <TextField id="consumidor" label="Consumidor" variant="standard" />
            <TextField id="produtos" label="Produtos" variant="standard" />
            <TextField
              id="valor-total"
              label="Valor total"
              variant="standard"
            />
          </DetailsContent>
          <CardActions>
            <Button
              variant="contained"
              onClick={submitForm}
              fullWidth
              disabled={!!infoCupom}
            >
              Solicitar reembolso
            </Button>
          </CardActions>
        </CardContent>
      )}
    </>
  )
}
export default detailsCard
