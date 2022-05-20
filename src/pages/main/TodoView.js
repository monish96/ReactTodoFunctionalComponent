import React, { useState } from 'react';
import {
  Stack,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import Page from '../../components/Page';

export default function TodoView() {
  const [editValue, setEditValues] = useState({
    id: '',
    title: '',
    description: '',
  });

  const [openDialog, setOpenDialog] = useState(true);

  const handleEditChange = (event) => {
    setEditValues({
      ...editValue,
      [event.target.name]: event.target.value,
    });
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleUpdate = (e) => {};

  return (
    <Page titleName='Edit Todo'>
      <Dialog
        onClose={handleCloseDialog}
        open={openDialog}
        maxWidth='sm'
        fullWidth
      >
        <form onSubmit={handleUpdate}>
          <DialogTitle>Edit Todo</DialogTitle>
          <DialogContent>
            <Stack spacing={2}>
              <TextField
                label='Title'
                id='title-id'
                placeholder='Enter a title'
                size='small'
                fullWidth
                autoFocus
                name='title'
                value={editValue.title}
                onChange={handleEditChange}
              />

              <TextField
                multiline
                label='Description'
                id='title-id'
                placeholder='Enter a description'
                size='small'
                fullWidth
                name='description'
                value={editValue.description}
                onChange={handleEditChange}
              />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button size='small' variant='contained' fullWidth type='submit'>
              Update
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Page>
  );
}
