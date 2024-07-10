import React from "react";
import {CardContent,Card, Button,TextField} from '@mui/material';
function ProductRegister(props){
    return(
            <Card>
             <CardContent>
              <div style={{fontSize: '16px'}}> {props.text} </div>
              <div style={{display:'flex', flexDirection:'column', gap: '12px'}}>
                <TextField id="outlined-basic" label="Nome" variant="outlined" />
                <TextField id="outlined-basic" label="Preço" variant="outlined" />
                <TextField id="outlined-basic" label="Categoria" variant="outlined" />
                <div style={{display:'flex', justifyContent: 'end'}}>
                 <Button variant="contained">Salvar</Button>
                </div> 
              </div>
              
             </CardContent>
            </Card>
    )
}


export default ProductRegister