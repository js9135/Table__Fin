import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

function createData(name, DOCUMENT_TYPE, DOCUMENT_DATE, AMOUNT, BALANCE, PAYMENT_STATUS,) {
    return {
        name,
        DOCUMENT_TYPE,
        DOCUMENT_DATE,
        DOCUMENT_DATE,
        AMOUNT,
        BALANCE,
        PAYMENT_STATUS,

    };
}

const rows = [
    createData('2022C03R00000651', 'INVOICE', '31-Dec-2023', 'INR 25,450,92', 'INR 136,77', 'Unpaid'),
    createData('2022C03R00000652', 'INVOICE', '31-Dec-2023', 'INR 25,450,92', 'INR 136,77', 'Unpaid'),
    createData('2022C03R00000653', 'INVOICE', '31-Dec-2023', 'INR 25,450,92', 'INR 136,77', 'Unpaid'),
    createData('2022C03R00000654', 'INVOICE', '31-Dec-2023', 'INR 25,450,92', 'INR 136,77', 'Unpaid'),
    createData('2022C03R00000655', 'INVOICE', '31-Dec-2023', 'INR 25,450,92', 'INR 136,77', 'Unpaid'),
    createData('2022C03R00000656', 'INVOICE', '31-Dec-2023', 'INR 25,450,92', 'INR 136,77', 'Unpaid'),
    createData('2022C03R00000657', 'INVOICE', '31-Dec-2023', 'INR 25,450,92', 'INR 136,77', 'Unpaid'),
    createData('2022C03R00000658', 'INVOICE', '31-Dec-2023', 'INR 25,450,92', 'INR 136,77', 'Unpaid'),
    createData('2022C03R00000659', 'INVOICE', '31-Dec-2023', 'INR 25,450,92', 'INR 136,77', 'Unpaid'),
    createData('2022C03R00000660', 'INVOICE', '31-Dec-2023', 'INR 25,450,92', 'INR 136,77', 'Unpaid'),
    createData('2022C03R00000661', 'INVOICE', '31-Dec-2023', 'INR 25,450,92', 'INR 136,77', 'Unpaid'),
    createData('2022C03R00000662', 'INVOICE', '31-Dec-2023', 'INR 25,450,92', 'INR 136,77', 'Unpaid'),
    createData('2022C03R00000663', 'INVOICE', '31-Dec-2023', 'INR 25,450,92', 'INR 136,77', 'Unpaid'),
    createData('2022C03R00000664', 'INVOICE', '31-Dec-2023', 'INR 25,450,92', 'INR 136,77', 'Unpaid'),
    createData('2022C03R00000665', 'INVOICE', '31-Dec-2023', 'INR 25,450,92', 'INR 136,77', 'Unpaid'),
    createData('2022C03R00000666', 'INVOICE', '31-Dec-2023', 'INR 25,450,92', 'INR 136,77', 'Unpaid'),
    createData('2022C03R00000667', 'INVOICE', '31-Dec-2023', 'INR 25,450,92', 'INR 136,77', 'Unpaid'),
    createData('2022C03R00000668', 'INVOICE', '31-Dec-2023', 'INR 25,450,92', 'INR 136,77', 'Unpaid'),
    createData('2022C03R00000660', 'INVOICE', '31-Dec-2023', 'INR 25,450,92', 'INR 136,77', 'Unpaid'),
    createData('2022C03R00000670', 'INVOICE', '31-Dec-2023', 'INR 25,450,92', 'INR 136,77', 'Unpaid'),


];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}






const headCells = [
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'DOCUMENT NO',
    },
    {
        id: 'DOCUMENT_TYPE',
        numeric: true,
        disablePadding: false,
        label: 'DOCUMENT TYPE',
    },
    {
        id: 'DOCUMENT_DATE',
        numeric: true,
        disablePadding: false,
        label: 'DOCUMENT DATE',
    },

    {
        id: 'AMOUNT',
        numeric: true,
        disablePadding: false,
        label: 'AMOUNT',
    },
    {
        id: 'BALANCE',
        numeric: true,
        disablePadding: false,
        label: 'BALANCE',
    },
    {
        id: 'PAYMENT_STATUS',
        numeric: true,
        disablePadding: false,
        label: 'PAYMENT STATUS',
    },

];

function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead sx={{ backgroundColor: '#E8E8E8' }}>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all desserts',
                        }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell

                        key={headCell.id}
                        align={headCell.numeric ? 'left' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            sx={{ fontWeight: '700' }}
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
    const { numSelected } = props;

    return (
        <Toolbar
            sx={{
                backgroundColor: '#BED8FF',
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    Selected
                </Typography>
            )}

            {numSelected > 0 ? (
                <Link to={'/paymentlist'}>
                <Button sx={{
                    backgroundColor: '#6E01B1',
                    minWidth: '120px',
                    textTransform: 'uppercase',
                    color: '#fff',
                    padding: '0.6rem 1rem',
                    '&:hover': {
                        backgroundColor: '#6E01B1',
                        color: '#fff'
                    }
                }} >Pay Now</Button>
                </Link>
            ) : (

                <Link to={'/paymentlist'}>
                <Button sx={{
                    backgroundColor: '#6E01B1',
                    minWidth: '120px',
                    textTransform: 'uppercase',
                    color: '#fff',
                    padding: '0.6rem 1rem',
                    '&:hover': {
                        backgroundColor: '#6E01B1',
                        color: '#fff'
                    }
                }} >Pay Now</Button>
                </Link>
            )}
        </Toolbar>
    );
}

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

export default function TableList() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.name);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const visibleRows = React.useMemo(
        () =>
            stableSort(rows, getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage,
            ),
        [order, orderBy, page, rowsPerPage],
    );

    return (
        <Box sx={{
            padding: '5rem 0rem',
            '@media(max-width : 1200px)': {
                padding: '1.5rem 0rem',
                '@media(max-width : 600px)': {
                    padding: '1rem 0rem'
                }
            }
        }}>
            <Container>
                <Box sx={{ width: '100%' }}>
                    <Paper sx={{ width: '100%', mb: 2, boxShadow: 'inherit' }}>
                        <EnhancedTableToolbar numSelected={selected.length} />
                        <TableContainer>
                            <Table
                                sx={{ minWidth: 750 }}
                                aria-labelledby="tableTitle"
                                size={dense ? 'small' : 'medium'}
                            >
                                <EnhancedTableHead

                                    numSelected={selected.length}
                                    order={order}
                                    orderBy={orderBy}
                                    onSelectAllClick={handleSelectAllClick}
                                    onRequestSort={handleRequestSort}
                                    rowCount={rows.length}
                                />
                                <TableBody>
                                    {visibleRows.map((row, index) => {
                                        const isItemSelected = isSelected(row.name);
                                        const labelId = `enhanced-table-checkbox-${index}`;

                                        return (
                                            <TableRow

                                                hover
                                                onClick={(event) => handleClick(event, row.name)}
                                                role="checkbox"
                                                aria-checked={isItemSelected}
                                                tabIndex={-1}
                                                key={row.name}
                                                selected={isItemSelected}
                                                sx={{
                                                    cursor: 'pointer', backgroundColor: '#F9F9F9', '&:hover': {
                                                        backgroundColor: '#E8E8E8 !important'
                                                    }
                                                }}
                                            >
                                                <TableCell padding="checkbox">
                                                    <Checkbox
                                                        color="primary"
                                                        checked={isItemSelected}
                                                        inputProps={{
                                                            'aria-labelledby': labelId,
                                                        }}
                                                    />
                                                </TableCell>
                                                <TableCell
                                                    component="th"
                                                    id={labelId}
                                                    scope="row"
                                                    padding="none"
                                                >
                                                    {row.name}
                                                </TableCell>
                                                <TableCell align="left">{row.DOCUMENT_TYPE}</TableCell>
                                                <TableCell align="left">{row.DOCUMENT_DATE}</TableCell>
                                                <TableCell align="left">{row.AMOUNT}</TableCell>
                                                <TableCell align="left">{row.BALANCE}</TableCell>
                                                <TableCell align="left">{row.PAYMENT_STATUS}</TableCell>
                                            </TableRow>
                                        );
                                    })}
                                    {emptyRows > 0 && (
                                        <TableRow
                                            style={{
                                                height: (dense ? 33 : 53) * emptyRows,
                                            }}
                                        >
                                            <TableCell colSpan={6} />
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        
                    </Paper>

                </Box>
            </Container>
        </Box>
    );
}
