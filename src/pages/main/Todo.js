import React, { useState } from 'react';
import {
  Card,
  CardContent,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Page from '../../components/Page';

export default function Todo() {
  const [arr, setArr] = useState([]);

  const [openDialog, setOpenDialog] = useState(false);

  const [editValue, setEditValues] = useState({
    id: '',
    title: '',
    description: '',
  });

  const compareFnc = (obj1, obj2) => {
    return obj2.id - obj1.id;
  };

  const handleDelete = (todo) => {
    let temp = [...arr];
    let index = temp.findIndex((_x) => _x.id === todo.id);
    temp.splice(index, 1);
    setArr(temp);
  };

  const handleView = (todo) => {
    setEditValues({ ...todo });
    setOpenDialog(true);
  };

  return (
    <Page titleName='Todo Page'>
      <Card>
        <CardContent>
          <List>
            {arr.length === 0 && <span>No todo</span>}
            {arr.sort(compareFnc).map((todo) => (
              <ListItem
                key={todo.id}
                secondaryAction={
                  <>
                    <IconButton
                      edge='end'
                      aria-label='delete'
                      onClick={() => handleDelete(todo)}
                    >
                      <DeleteIcon />
                    </IconButton>{' '}
                    <IconButton
                      edge='end'
                      aria-label='view'
                      onClick={() => handleView(todo)}
                    >
                      <RemoveRedEyeIcon />
                    </IconButton>
                  </>
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
    </Page>
  );
}
