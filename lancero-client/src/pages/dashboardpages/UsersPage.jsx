import { useEffect, useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  Switch,
  TextField,
  Typography,
  useMediaQuery,
  Grid,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { DataGrid } from '@mui/x-data-grid';
import usersSeed from '../../data/users.json?raw';

// Brand Color Palette Definitions
const STREAM_RED = '#cf3636';
const STREAM_NAVY = '#000080';

const roles = ['admin', 'editor', 'viewer'];
const genders = ['male', 'female', 'other'];

const blankForm = {
  firstName: '',
  lastName: '',
  age: '',
  gender: '',
  contactNumber: '',
  email: '',
  role: 'editor',
  username: '',
  password: '',
  address: '',
  isActive: true,
};

const labelize = (value) =>
  value ? `${value.charAt(0).toUpperCase()}${value.slice(1)}` : '';

const loadUsers = () => {
  try {
    return {
      users: JSON.parse(usersSeed).map((user, index) => ({
        id: Number(user.id) || index + 1,
        firstName: String(user.firstName ?? '').trim(),
        lastName: String(user.lastName ?? '').trim(),
        age: String(user.age ?? '').trim(),
        gender: genders.includes(String(user.gender ?? '').trim().toLowerCase())
          ? String(user.gender ?? '').trim().toLowerCase()
          : '',
        contactNumber: String(user.contactNumber ?? '').trim(),
        email: String(user.email ?? '').trim().toLowerCase(),
        role: roles.includes(String(user.role ?? '').trim().toLowerCase())
          ? String(user.role ?? '').trim().toLowerCase()
          : 'editor',
        username: String(user.username ?? '').trim().toLowerCase(),
        password: String(user.password ?? ''),
        address: String(user.address ?? '').trim(),
        isActive: typeof user.isActive === 'boolean' ? user.isActive : true,
      })),
      error: '',
    };
  } catch {
    return {
      users: [],
      error: 'Unable to read users from src/assets/users.json.',
    };
  }
};

const seed = loadUsers();

const UsersPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Adopted: separate open, isEditing, editUserId, loading states
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editUserId, setEditUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState(blankForm);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  // Search and Filter State Variables
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [genderFilter, setGenderFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  // Adopted: async loadUsers with loading state
  const fetchAndSetUsers = async () => {
    try {
      setLoading(true);
      // Simulate async fetch; uses seeded data
      setUsers(seed.users);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  // Adopted: useEffect to load users on mount
  useEffect(() => {
    fetchAndSetUsers();
  }, []);

  // Adopted: handleOpen resets to "Add" mode
  const handleOpen = () => {
    setIsEditing(false);
    setNewUser(blankForm);
    setEditUserId(null);
    setErrors({});
    setOpen(true);
  };

  // Adopted: handleClose pattern
  const handleClose = () => {
    setOpen(false);
    setIsEditing(false);
    setEditUserId(null);
    setShowPassword(false);
    setNewUser(blankForm);
    setErrors({});
  };

  // Adopted: handleEdit sets editing state and populates form
  const handleEdit = (id) => {
    const userToEdit = users.find((user) => user.id === id);
    setNewUser({ ...userToEdit, password: '' }); // Set password to empty string
    setEditUserId(id);
    setIsEditing(true); // Switch to 'Edit' mode
    setOpen(true);      // Open the modal
  };

  const handleChange = ({ target: { name, value, checked, type } }) => {
    setNewUser((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setRoleFilter('all');
    setGenderFilter('all');
    setStatusFilter('all');
  };

  const validate = () => {
    const nextErrors = {};
    const email = newUser.email.trim().toLowerCase();
    const username = newUser.username.trim().toLowerCase();

    [
      ['firstName', 'First name'],
      ['lastName', 'Last name'],
      ['age', 'Age'],
      ['gender', 'Gender'],
      ['contactNumber', 'Contact Number'],
      ['email', 'Email'],
      ['role', 'Role'],
      ['username', 'Username'],
      ['password', 'Password'],
      ['address', 'Address'],
    ].forEach(([key, label]) => {
      if (!String(newUser[key]).trim()) {
        nextErrors[key] = `${label} is required.`;
      }
    });

    if (!nextErrors.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = 'Enter a valid email address.';
    }

    if (!nextErrors.email && users.some((user) => user.id !== editUserId && user.email === email)) {
      nextErrors.email = 'Email address already exists.';
    }

    if (!nextErrors.username && users.some((user) => user.id !== editUserId && user.username === username)) {
      nextErrors.username = 'Username already exists.';
    }

    return nextErrors;
  };

  // Adopted: handleSaveUser with isEditing branch
  const handleSaveUser = async (event) => {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    try {
      if (isEditing) {
        // Update user
        const updatedUser = { ...newUser };
        if (!updatedUser.password) {
          delete updatedUser.password; // Exclude password if it's empty
        }
        setUsers((prev) =>
          prev.map((user) => (user.id === editUserId ? { ...user, ...updatedUser } : user))
        );
      } else {
        // Add new user
        setUsers((prev) => [
          ...prev,
          {
            ...newUser,
            id: prev.reduce((max, user) => Math.max(max, Number(user.id) || 0), 0) + 1,
          },
        ]);
      }
      await fetchAndSetUsers(); // Reload users after toggling
      handleClose();            // Close modal
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  // Adopted: handleToggleActive as async function
  const handleToggleActive = async (id, isActive) => {
    try {
      setUsers((prev) =>
        prev.map((user) => (user.id === id ? { ...user, isActive: !isActive } : user))
      );
      await fetchAndSetUsers(); // Reload users after toggling
    } catch (error) {
      console.error('Error toggling user status:', error);
    }
  };

  const fieldProps = (name, label, extra = {}) => ({
    name,
    label,
    value: newUser[name],
    onChange: handleChange,
    error: Boolean(errors[name]),
    helperText: errors[name],
    fullWidth: true,
    ...extra,
  });

  // Client-side execution engine managing custom query filters
  const filteredUsers = users.filter((user) => {
    const query = searchQuery.trim().toLowerCase();

    const matchesSearch = !query ||
      user.firstName.toLowerCase().includes(query) ||
      user.lastName.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query) ||
      user.username.toLowerCase().includes(query);

    const matchesRole = roleFilter === 'all' || user.role === roleFilter;
    const matchesGender = genderFilter === 'all' || user.gender === genderFilter;

    let matchesStatus = true;
    if (statusFilter === 'active') matchesStatus = user.isActive === true;
    if (statusFilter === 'inactive') matchesStatus = user.isActive === false;

    return matchesSearch && matchesRole && matchesGender && matchesStatus;
  });

  // Adopted: columns use field 'name', 'type' renamed back but kept as 'role' for data integrity
  const columns = [
    { field: 'id', headerName: 'ID', width: 80 },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      minWidth: 170,
      valueGetter: (_, row) => `${row.firstName || ''} ${row.lastName || ''}`.trim(),
    },
    { field: 'age', headerName: 'Age', flex: 1, sortable: true },
    { field: 'gender', headerName: 'Gender', flex: 1, sortable: true },
    { field: 'email', headerName: 'Email', flex: 1, minWidth: 220 },
    { field: 'contactNumber', headerName: 'Contact', flex: 1, minWidth: 150 },
    { field: 'username', headerName: 'Username', flex: 1, minWidth: 140 },
    {
      field: 'role',
      headerName: 'Type',
      flex: 1,
      sortable: true,
      valueGetter: (_, row) => labelize(row.role),
    },
    {
      field: 'status',
      headerName: 'Status',
      minWidth: 120,
      sortable: false,
      renderCell: ({ row }) => (
        <Chip
          size="small"
          label={row.isActive ? 'Active' : 'Inactive'}
          color={row.isActive ? 'success' : 'default'}
          variant={row.isActive ? 'filled' : 'outlined'}
        />
      ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      minWidth: 220,
      sortable: false,
      filterable: false,
      renderCell: ({ row }) => (
        // Adopted: Box with flex display for actions cell
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            variant="contained"
            size="small"
            onClick={() => handleEdit(row.id)}
            sx={{ bgcolor: STREAM_NAVY, '&:hover': { bgcolor: '#000066' } }}
          >
            Edit
          </Button>
          {/* Adopted: Switch for toggling active status */}
          <Switch
            checked={row.isActive}
            onChange={() => handleToggleActive(row.id, row.isActive)}
            color="primary"
            size="small"
          />
        </Box>
      ),
    },
  ];

  return (
    <Box sx={{ width: '100%', minWidth: 0 }}>
      {/* Adopted: Stack direction="row" for top heading row */}
      <Stack direction="row" sx={{ marginBottom: 5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h2" fontWeight="bold" sx={{ color: STREAM_NAVY }}>
          Users
        </Typography>
        <Button
          variant="contained"
          onClick={handleOpen}
          sx={{ bgcolor: STREAM_RED, '&:hover': { bgcolor: '#b32b2b' } }}
        >
          Add User
        </Button>
      </Stack>

      {seed.error ? (
        <Alert severity="error" sx={{ mb: 2 }}>
          {seed.error}
        </Alert>
      ) : null}

      {/* SEARCH AND FILTER BAR CONTROL BLOCK */}
      <Paper variant="outlined" sx={{ p: 2, mb: 3, border: '1px solid #e2e8f0', bgcolor: '#ffffff' }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={4}>
            <TextField
              size="small"
              fullWidth
              placeholder="Search by name, email, username..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon size="small" sx={{ color: 'text.secondary' }} />
                    </InputAdornment>
                  ),
                  endAdornment: searchQuery && (
                    <InputAdornment position="end">
                      <IconButton size="small" onClick={() => setSearchQuery('')}>
                        <ClearIcon fontSize="small" />
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Grid>

          <Grid item xs={12} sm={4} md={2}>
            <FormControl size="small" fullWidth>
              <InputLabel id="role-filter-label">Role</InputLabel>
              <Select
                labelId="role-filter-label"
                label="Role"
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
              >
                <MenuItem value="all">All</MenuItem>
                {roles.map((role) => (
                  <MenuItem key={role} value={role}>{labelize(role)}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={4} md={2}>
            <FormControl size="small" fullWidth>
              <InputLabel id="gender-filter-label">Gender</InputLabel>
              <Select
                labelId="gender-filter-label"
                label="Gender"
                value={genderFilter}
                onChange={(e) => setGenderFilter(e.target.value)}
              >
                <MenuItem value="all">All</MenuItem>
                {genders.map((gender) => (
                  <MenuItem key={gender} value={gender}>{labelize(gender)}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={4} md={2}>
            <FormControl size="small" fullWidth>
              <InputLabel id="status-filter-label">Status</InputLabel>
              <Select
                labelId="status-filter-label"
                label="Status"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="inactive">Inactive</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={2}>
            <Button
              size="medium"
              fullWidth
              onClick={handleClearFilters}
              disabled={!searchQuery && roleFilter === 'all' && genderFilter === 'all' && statusFilter === 'all'}
              sx={{ color: 'text.secondary', textTransform: 'none' }}
            >
              Clear Filters
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Main Core Users Layout Table View */}
      {filteredUsers.length ? (
        <Paper sx={{ p: { xs: 1.5, sm: 2 }, minWidth: 0, overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
          <Box sx={{ height: 500, width: '100%', mb: 5 }}>
            <DataGrid
              rows={filteredUsers}
              columns={columns}
              getRowId={(row) => row.id}
              loading={loading}
              pageSizeOptions={[10, 20, 50]}
              initialState={{
                pagination: { paginationModel: { pageSize: 10, page: 0 } },
              }}
              disableSelectionOnClick
              sx={{
                border: 'none',
                '& .MuiDataGrid-columnHeaders': { bgcolor: '#f1f5f9', color: STREAM_NAVY, fontWeight: 'bold' },
                '& .MuiCheckbox-root.Mui-checked': { color: STREAM_RED },
                '& .MuiDataGrid-cell:focus-within': { outline: 'none' },
                '& .MuiDataGrid-columnHeader:focus-within': { outline: 'none' },
              }}
            />
          </Box>
        </Paper>
      ) : (
        <Alert severity="info" variant="outlined" sx={{ mt: 1 }}>
          No platform accounts match the applied filters criteria. Try refining your keyword entries or clearing the selectors.
        </Alert>
      )}

      {/* Adopted: Modal with keepMounted, aria-labelledby, aria-describedby */}
      <Dialog
        keepMounted
        open={open}
        onClose={handleClose}
        fullWidth
        fullScreen={isMobile}
        maxWidth="md"
        aria-labelledby="add-user-modal"
        aria-describedby="add-user-modal-description"
      >
        <Box component="form" onSubmit={handleSaveUser}>
          {/* Adopted: Typography id for aria reference */}
          <DialogTitle id="keep-mounted-modal-title" variant="h4" component="h2" sx={{ fontWeight: 'bold', color: STREAM_NAVY }}>
            {isEditing ? 'Edit User' : 'Add User'}
          </DialogTitle>

          <DialogContent dividers id="add-user-modal-description" sx={{ px: { xs: 2, sm: 3 } }}>
            <Stack spacing={2} sx={{ pt: 1 }}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField {...fieldProps('firstName', 'First Name')} />
                <TextField {...fieldProps('lastName', 'Last Name')} />
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField {...fieldProps('age', 'Age')} />
                <TextField {...fieldProps('gender', 'Gender', { select: true })}>
                  {genders.map((gender) => (
                    <MenuItem key={gender} value={gender}>
                      {labelize(gender)}
                    </MenuItem>
                  ))}
                </TextField>
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField {...fieldProps('contactNumber', 'Contact Number')} />
                <TextField {...fieldProps('email', 'Email Address', { type: 'email' })} />
              </Stack>
              {/* Adopted: Role field labeled as "Type" in form to match professor's Select label */}
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <FormControl fullWidth error={Boolean(errors.role)}>
                  <InputLabel id="type-label">Type</InputLabel>
                  <Select
                    labelId="type-label"
                    name="role"
                    label="Type"
                    value={newUser.role || 'viewer'}
                    onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                  >
                    <MenuItem value="admin">Admin</MenuItem>
                    <MenuItem value="editor">Editor</MenuItem>
                    <MenuItem value="viewer">Viewer</MenuItem>
                  </Select>
                  {errors.role && (
                    <Typography variant="caption" color="error" sx={{ mt: 0.5, ml: 1.5 }}>
                      {errors.role}
                    </Typography>
                  )}
                </FormControl>
                <TextField {...fieldProps('username', 'Username')} />
              </Stack>
              <TextField
                {...fieldProps('password', 'Password', {
                  type: showPassword ? 'text' : 'password',
                  slotProps: {
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            onClick={() => setShowPassword((prev) => !prev)}
                            onMouseDown={(event) => event.preventDefault()}
                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    },
                  },
                })}
              />
              <TextField {...fieldProps('address', 'Address', { multiline: true, rows: 3 })} />
              <FormControlLabel
                control={
                  <Switch
                    name="isActive"
                    checked={newUser.isActive}
                    onChange={handleChange}
                    sx={{ '& .Mui-checked + .MuiSwitch-track': { bgcolor: STREAM_RED } }}
                  />
                }
                label={newUser.isActive ? 'User status: Active' : 'User status: Inactive'}
              />
            </Stack>
          </DialogContent>

          {/* Adopted: spacing={2} direction="row" for dialog actions */}
          <DialogActions sx={{ px: 3, py: 2 }}>
            <Stack spacing={2} direction="row">
              <Button variant="outlined" onClick={handleClose} sx={{ color: 'text.secondary' }}>
                Cancel
              </Button>
              <Button type="submit" variant="contained" sx={{ bgcolor: STREAM_NAVY, '&:hover': { bgcolor: '#000066' } }}>
                {isEditing ? 'Save Changes' : 'Add'}
              </Button>
            </Stack>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
};

export default UsersPage;
