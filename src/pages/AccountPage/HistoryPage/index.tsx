import { getOrderUserLogged } from '@/api/order';
import StyledDataGrid from '@/components/StyledDataGrid';
import { Card, CardHeader, Grid } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import { useQuery } from '@tanstack/react-query';

const getStatus = (status: string): { color: 'warning' | 'success' | 'error' | 'info'; text: string } => {
  switch (status) {
    case 'PENDING':
      return { color: 'warning', text: 'Pending' };
    case 'CONFIRMED':
      return { color: 'success', text: 'Confirmed' };
    case 'CANCEL':
      return { color: 'error', text: 'Cancel' };
    default:
      return { color: 'info', text: 'Shipping' };
  }
};

interface Row {
  id: number;
  lastName: string;
  firstName?: string;
  age: number | null;
}

function index() {
  const { data, isLoading } = useQuery({
    queryKey: ['getorderuserlogged'],
    queryFn: getOrderUserLogged,
  });

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'firstName', headerName: 'First name', width: 150 },
    { field: 'lastName', headerName: 'Last name', width: 150 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
    },
  ];

  const initialRows: Row[] = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: '', age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Card elevation={0}>
          <CardHeader
            title="Order History"
            titleTypographyProps={{
              variant: 'h3',
            }}
          />
          <StyledDataGrid columns={columns} rows={initialRows} checkboxSelection />
        </Card>
      </Grid>
    </Grid>
  );
}

export default index;
