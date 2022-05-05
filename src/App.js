import {
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from 'react'; // HOOKS

function App() {
  const _date = new Date();

  const [value, setValues] = useState({
    title: '',
    description: '',
  });

  const handleChange = (event) => {
    if (event.target.name === 'description') {
      setValues({
        ...value,
        description: event.target.value,
      });
    }

    if (event.target.name === 'title') {
      setValues({
        ...value,
        title: event.target.value,
      });
    }
  };

  const handleAdd = () => {
    alert(value.title + ' - ' + value.description);
  };

  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Todo App
          </Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth='sm'>
        <Stack spacing={2}>
          <Card sx={{ minWidth: 275, marginTop: 10 }}>
            <CardHeader title='Create a todo' subheader={`${_date}`} />
            <CardContent>
              <Stack spacing={2}>
                <TextField
                  label='Title'
                  id='title-id'
                  placeholder='Enter a title'
                  size='small'
                  fullWidth
                  autoFocus
                  name='title'
                  value={value.title}
                  onChange={handleChange}
                />

                <TextField
                  multiline
                  label='Description'
                  id='title-id'
                  placeholder='Enter a description'
                  size='small'
                  fullWidth
                  name='description'
                  value={value.description}
                  onChange={handleChange}
                />
              </Stack>
            </CardContent>
            <CardActions>
              <Button
                size='small'
                variant='contained'
                fullWidth
                onClick={handleAdd}
              >
                Add
              </Button>
            </CardActions>
          </Card>

          <Card>
            <CardContent>
              <List>
                {[1, 2, 3].map((_x, i) => (
                  <ListItem
                    secondaryAction={
                      <IconButton edge='end' aria-label='delete'>
                        <DeleteIcon />
                      </IconButton>
                    }
                  >
                    <ListItemText primary={_x} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </div>
  );
}

export default App;
