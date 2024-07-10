import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function ProductList(props) {


    const rows = [ //retorna um json de array
        {
            id: 1,
            name: 'Teclado',
            price: '100,00',
            category: 'Informática'
        },
        {
            id: 2,
            name: 'mouse',
            price: '99,00',
            category: 'Informática'
        }
    ];


    return (
        <div>
            <h4>
                {props.text}
            </h4>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Nome</TableCell>
                            <TableCell align="right">Preço</TableCell>
                            <TableCell align="right">Categoria(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => ( //para cada row criado, retorna u TableRow a partir do id que é o name
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.id} </TableCell>
                                <TableCell component="th" scope="row">{row.name} </TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                <TableCell align="right">{row.category}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}


export default ProductList