import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BarChart } from '@mui/x-charts/BarChart';

import { DataGrid } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import { Gauge } from '@mui/x-charts/Gauge';
import { Typography, Card, CardContent, Paper, Grid } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import usersSeed from '../../data/users.json?raw'; 
import 'leaflet/dist/leaflet.css';

// Consistent Streaming Theme Palette
const STREAM_RED = '#cf3636'; 
const STREAM_NAVY = '#000080';
const CARD_BORDER = '#e2e8f0';

// Grid column matching structural layout
const columns = [
  { field: 'id', headerName: 'ID', width: 80 },
  {
    field: 'fullName',
    headerName: 'Subscriber Name',
    flex: 1,
    minWidth: 160,
    valueGetter: (_, row) => `${row.firstName || ''} ${row.lastName || ''}`.trim(),
  },
  { field: 'username', headerName: 'Username', minWidth: 120 },
  { field: 'role', headerName: 'Platform Role', width: 120 },
  { field: 'email', headerName: 'Email Address', flex: 1.1, minWidth: 180 },
  {
    field: 'status',
    headerName: 'Account Status',
    width: 120,
    valueGetter: (_, row) => row.isActive ? 'Active' : 'Inactive',
  },
];

// Exact seed safe loader structure cloned from your main files
const loadLiveDashboardUsers = () => {
  try {
    return JSON.parse(usersSeed).map((user, index) => ({
      id: Number(user.id) || index + 1,
      firstName: String(user.firstName ?? '').trim(),
      lastName: String(user.lastName ?? '').trim(),
      age: Number(user.age) || 0,
      email: String(user.email ?? '').trim().toLowerCase(),
      role: String(user.role ?? '').trim().toLowerCase(),
      username: String(user.username ?? '').trim().toLowerCase(),
      isActive: typeof user.isActive === 'boolean' ? user.isActive : true,
    }));
  } catch {
    return [];
  }
};

function DashboardPage() {
  const location = useLocation();
  const [dashboardUsers] = useState(loadLiveDashboardUsers());

  // Derived Dynamic Core Platform Analytics calculations
  const totalUsersCount = dashboardUsers.length;
  const activeCount = dashboardUsers.filter(u => u.isActive).length;
  const activePercentage = totalUsersCount > 0 ? Math.round((activeCount / totalUsersCount) * 100) : 0;
  
  const averageAge = totalUsersCount > 0 
    ? (dashboardUsers.reduce((sum, u) => sum + u.age, 0) / totalUsersCount).toFixed(1) 
    : "0.0";

  // Role Breakdown values for your pie chart component
  const adminsCount = dashboardUsers.filter(u => u.role === 'admin').length;
  const editorsCount = dashboardUsers.filter(u => u.role === 'editor').length;
  const viewersCount = dashboardUsers.filter(u => u.role === 'viewer').length;

  return (
    <Box sx={{ width: '100%', pb: 4 }}>
      {/* Dynamic Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight="900" sx={{ color: STREAM_NAVY, textTransform: 'uppercase', letterSpacing: -0.5 }} gutterBottom>
          System Hub Dashboard
        </Typography>
        <Typography variant="body1" sx={{ color: '#475569', fontStyle: 'italic' }}>
          Real-time network operational control panel synced directly with listener datasets.
        </Typography>
      </Box>

      {/* Dynamic Main KPI Block Section */}
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ mb: 4 }}>
        <Card sx={{ flex: 1, border: `1px solid ${CARD_BORDER}`, borderLeft: `4px solid ${STREAM_NAVY}`, boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
            <Typography variant="caption" fontWeight="bold" sx={{ color: '#64748b', textTransform: 'uppercase' }} display="block">
              Network Listeners
            </Typography>
            <Typography variant="h4" fontWeight="800" sx={{ my: 0.5, color: STREAM_NAVY }}>
              {totalUsersCount} Profiles
            </Typography>
            <Typography variant="caption" sx={{ color: '#64748b' }}>
              Live loaded database records
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ flex: 1, border: `1px solid ${CARD_BORDER}`, borderLeft: `4px solid ${STREAM_RED}`, boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
            <Typography variant="caption" fontWeight="bold" sx={{ color: '#64748b', textTransform: 'uppercase' }} display="block">
              Platform Age Average
            </Typography>
            <Typography variant="h4" fontWeight="800" sx={{ my: 0.5, color: STREAM_NAVY }}>
              {averageAge} Yrs
            </Typography>
            <Typography variant="caption" sx={{ color: '#64748b' }}>
              Active listener base metric
            </Typography>
          </CardContent>
        </Card>
      </Stack>

      {/* Modern High-Fi Audio Progress Gauges */}
      <Typography variant="h6" fontWeight="800" sx={{ color: STREAM_NAVY, textTransform: 'uppercase', mb: 2 }}>
        System Resource & Node Health
      </Typography>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ mb: 4, bgcolor: '#ffffff', p: 3, borderRadius: 1, border: `1px solid ${CARD_BORDER}`, justifyContent: 'space-around' }}>
        <Box sx={{ textAlign: 'center' }}>
          <Gauge 
            width={120} 
            height={120} 
            value={activePercentage}
            sx={{
              '& .MuiGauge-valueArc': { fill: STREAM_RED },
              '& text': { fill: `${STREAM_NAVY} !important`, fontWeight: 'bold' }
            }}
          />
          <Typography variant="body2" fontWeight="700" sx={{ color: STREAM_NAVY, mt: 1 }}>Account Status Health Ratio</Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Gauge 
            width={120} 
            height={120} 
            value={78} 
            sx={{
              '& .MuiGauge-valueArc': { fill: STREAM_NAVY },
              '& text': { fill: `${STREAM_NAVY} !important`, fontWeight: 'bold' }
            }}
          />
          <Typography variant="body2" fontWeight="700" sx={{ color: STREAM_NAVY, mt: 1 }}>Streaming Node Load Capacity</Typography>
        </Box>
      </Stack>

      {/* Real-time Dynamic Charts Visualization Block */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {/* Core Bar Chart Track Activity Output */}
        <Grid item xs={12} md={7}>
          <Card sx={{ bgcolor: '#ffffff', border: `1px solid ${CARD_BORDER}`, boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="subtitle1" fontWeight="800" sx={{ color: STREAM_NAVY, textTransform: 'uppercase', mb: 2 }}>
                Network Metric Output History
              </Typography>
              <Box sx={{ width: '100%', height: 300 }}>
                <BarChart
                  series={[
                    { data: [35, 42, 45, 51], label: 'Premium Plays', color: STREAM_RED },
                    { data: [30, 40, 38, 44], label: 'Ad-Supported', color: STREAM_NAVY },
                  ]}
                  height={280}
                  xAxis={[{ data: ['Q1 Tracks', 'Q2 Tracks', 'Q3 Tracks', 'Q4 Tracks'], scaleType: 'band' }]}
                  slotProps={{ legend: { direction: 'row', position: { vertical: 'top', horizontal: 'right' } } }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Core Pie Chart Role Access Allocation */}
        <Grid item xs={12} md={5}>
          <Card sx={{ bgcolor: '#ffffff', border: `1px solid ${CARD_BORDER}`, height: '100%', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="subtitle1" fontWeight="800" sx={{ color: STREAM_NAVY, textTransform: 'uppercase', mb: 2 }}>
                Registered Profiles Allocation
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 280 }}>
                <PieChart
                  series={[{
                    data: [
                      { id: 0, value: viewersCount || 1, label: 'Listeners', color: STREAM_NAVY },
                      { id: 1, value: editorsCount || 0, label: 'Curators', color: STREAM_RED },
                      { id: 2, value: adminsCount || 0, label: 'Admins', color: '#4f46e5' },
                    ],
                    innerRadius: 15,
                    paddingAngle: 1,
                  }]}
                  width={320}
                  height={240}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Main Core Users Layout Table View */}
      <Typography variant="h6" fontWeight="800" sx={{ color: STREAM_NAVY, textTransform: 'uppercase', mb: 2 }}>
        Synchronized User Directory
      </Typography>
      <Paper sx={{ p: { xs: 1.5, sm: 2 }, mb: 4, overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', border: `1px solid ${CARD_BORDER}` }}>
        <Box sx={{ height: 360, width: '100%' }}>
          <DataGrid
            rows={dashboardUsers}
            columns={columns}
            disableRowSelectionOnClick
            pageSizeOptions={[5]}
            initialState={{
              pagination: { paginationModel: { pageSize: 5, page: 0 } },
            }}
            checkboxSelection
            sx={{
              border: 'none',
              '& .MuiDataGrid-columnHeaders': { bgcolor: '#f1f5f9', color: STREAM_NAVY, fontWeight: 'bold' },
              '& .MuiCheckbox-root.Mui-checked': { color: STREAM_RED },
              '& .MuiDataGrid-cell:focus-within': { outline: 'none' }
            }}
          />
        </Box>
      </Paper>

      {/* Leaflet Network Map Node Section */}
      <Typography variant="h6" fontWeight="800" sx={{ color: STREAM_NAVY, textTransform: 'uppercase', mb: 2 }}>
        Broadcasting Base Operations Map
      </Typography>
      <Paper sx={{ p: 1, height: 400, width: '100%', border: `1px solid ${CARD_BORDER}`, overflow: 'hidden' }}>
        <MapContainer center={[14.604253, 120.994314]} zoom={14} style={{ height: '100%', width: '100%', borderRadius: '4px' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />  
          <Marker position={[14.604253, 120.994314]}>
            <Popup>
              <Box sx={{ pt: 0.5 }}>
                <Typography variant="subtitle2" fontWeight="bold" sx={{ color: STREAM_RED }}>SoundStream Broadcast Core HQ</Typography>
                <Typography variant="caption" color="text.secondary" display="block">Main Operational Server Hub Layer</Typography>
                <Typography variant="caption" sx={{ fontStyle: 'italic', mt: 0.5, display: 'block' }}>551 F Jhocson, Manila</Typography>
              </Box>
            </Popup>
          </Marker>
        </MapContainer>
      </Paper>
    </Box>
  );
}

export default DashboardPage;