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

  const [arr, setArr] = useState([]);

  const [count, setCount] = useState(0);

  const handleChange = (event) => {
    setValues({
      ...value,
      [event.target.name]: event.target.value,
    });
  };

  const handleAdd = () => {
    let temp = [...arr];
    let obj = {
      id: count,
      title: value.title,
      description: value.description,
    };
    temp.push(obj);
    setCount(count + 1);
    setArr(temp);
    setValues({
      title: '',
      description: '',
    });
  };

  const compareFnc = (obj1, obj2) => {
    return obj2.id - obj1.id;
  };

  const handleDelete = (todo) => {
    let temp = [...arr];
    let index = temp.findIndex((_x) => _x.id === todo.id);
    temp.splice(index, 1);
    setArr(temp);
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
                {arr.length === 0 && <span>No todo</span>}
                {arr.sort(compareFnc).map((todo) => (
                  <ListItem
                    key={todo.id}
                    secondaryAction={
                      <IconButton
                        edge='end'
                        aria-label='delete'
                        onClick={() => handleDelete(todo)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    }
                  >
                    <ListItemText
                      primary={todo.title}
                      secondary={todo.description}
                    />
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
