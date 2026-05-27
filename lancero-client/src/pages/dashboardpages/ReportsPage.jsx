import { useRef } from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid"; // Stable MUI v5 Grid
import Typography from "@mui/material/Typography";
import { BarChart } from "@mui/x-charts/BarChart";
import { Gauge } from "@mui/x-charts/Gauge";
import { PieChart } from "@mui/x-charts/PieChart";
import { DataGrid } from '@mui/x-data-grid';

// Theme Palette Configuration based on your choices
const ALBUM_RED = '#cf3636';    // Core primary (Vinyl accents, buttons)
const VINYL_NAVY = '#000080';   // Core secondary (Header text, deep accents)
const RETRO_GOLD = '#d4af37';   // Accent for top sales targets
const LIGHT_BG = '#f8f9fa';     // Crisp record store clean backing
const CARD_BORDER = '#e2e8f0';

// Album Data Store Table Columns
const columns = [
  { field: 'id', headerName: 'Catalog ID', width: 100 },
  { field: 'albumTitle', headerName: 'Album Title', flex: 1.2, minWidth: 180 },
  { field: 'artistName', headerName: 'Artist / Band', flex: 1, minWidth: 150 },
  { field: 'format', headerName: 'Format Type', width: 130 },
  { field: 'unitsSold', headerName: 'Units Sold', type: 'number', width: 120 },
  {
    field: 'revenue',
    headerName: 'Gross Revenue',
    width: 140,
    valueGetter: (_, row) => `$${(row.unitsSold * row.price).toFixed(2)}`,
  },
];

// Music Inventory Sales Dataset
const rows = [
  { id: 1, albumTitle: 'Rumours (Remastered)', artistName: 'Fleetwood Mac', format: 'Vinyl LP', unitsSold: 412, price: 34.99 },
  { id: 2, albumTitle: 'Abbey Road', artistName: 'The Beatles', format: 'Vinyl LP', unitsSold: 389, price: 38.50 },
  { id: 3, albumTitle: 'Dark Side of the Moon', artistName: 'Pink Floyd', format: 'Vinyl LP', unitsSold: 245, price: 42.00 },
  { id: 4, albumTitle: 'Random Access Memories', artistName: 'Daft Punk', format: 'Deluxe CD', unitsSold: 188, price: 18.99 },
  { id: 5, albumTitle: 'Midnights', artistName: 'Taylor Swift', format: 'Limited Vinyl', unitsSold: 560, price: 39.99 },
  { id: 6, albumTitle: 'Back to Black', artistName: 'Amy Winehouse', format: 'Vinyl LP', unitsSold: 142, price: 29.99 },
  { id: 7, albumTitle: 'Discovery', artistName: 'Daft Punk', format: 'Cassette Tape', unitsSold: 95, price: 14.95 },
];

const ReportsPage = () => {
  const printRef = useRef(null);

  const handlePrint = () => {
    const printContent = printRef.current;
    if (!printContent) return;

    const printWindow = window.open('', '_blank', 'width=1200,height=900');
    if (!printWindow) return;

    const headMarkup = Array.from(document.querySelectorAll('style, link[rel="stylesheet"]'))
      .map((node) => node.outerHTML)
      .join('');

    const exportedAt = new Intl.DateTimeFormat('en-US', {
      dateStyle: 'long',
      timeStyle: 'short',
    }).format(new Date());

    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Music Store Monthly Manifest</title>
        ${headMarkup}
        <style>
          @page { size: A4; margin: 12mm; }
          * { box-sizing: border-box; }
          body { margin: 0; font-family: sans-serif; background: #ffffff; color: #1e293b; }
          .report-shell { padding: 15px; }
          .report-header { margin-bottom: 24px; padding-bottom: 16px; border-bottom: 3px double #000080; }
          .report-header h1 { margin: 0 0 4px; font-size: 26px; color: #cf3636; text-transform: uppercase; }
          .report-header p { margin: 0; font-size: 13px; color: #475569; }
          .report-content .MuiCard-root { border: 1px solid #e2e8f0 !important; box-shadow: none !important; break-inside: avoid; page-break-inside: avoid; margin-bottom: 16px; }
        </style>
      </head>
      <body>
        <main class="report-shell">
          <header class="report-header">
            <h1>The Grooves Room — Retail Sales Manifest</h1>
            <p>Monthly performance breakdown across physical store inventory, streaming packages, and regional vinyl releases.</p>
            <p style="margin-top: 6px; font-weight: bold; color: #000080;">Report Generated: ${exportedAt}</p>
          </header>
          <section class="report-content">
            ${printContent.outerHTML}
          </section>
        </main>
      </body>
      </html>
    `);
    
    printWindow.document.close();
    setTimeout(() => {
      printWindow.focus();
      printWindow.print();
    }, 300);
  };

  return (
    <Box sx={{ width: '100%', pb: 4, bgcolor: LIGHT_BG, minHeight: '100vh', p: { xs: 2, md: 4 }, borderRadius: 2 }}>
      
      {/* Top Controls Header */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        spacing={2}
        sx={{ mb: 4 }}
      >
        <Box>
          <Typography variant="h4" fontWeight="900" sx={{ color: VINYL_NAVY, textTransform: 'uppercase', letterSpacing: -0.5 }}>
            Store Retail Ledger
          </Typography>
          <Typography variant="body1" sx={{ color: '#475569', fontStyle: 'italic' }}>
            Tracking physical vinyl crates, limited editions, and audio media revenue indexes.
          </Typography>
        </Box>
        
        <Stack direction="row" spacing={1.5} flexWrap="wrap">
          <Button variant="contained" disableElevation sx={{ bgcolor: ALBUM_RED, '&:hover': { bgcolor: '#b32b2b' } }}>
            Log New Shipments
          </Button>
          <Button variant="outlined" onClick={handlePrint} sx={{ color: VINYL_NAVY, borderColor: VINYL_NAVY, '&:hover': { borderColor: '#000066', bgcolor: 'rgba(0,0,128,0.04)' } }}>
            Print Manifest
          </Button>
        </Stack>
      </Stack>

      {/* Main Print Container Workspace */}
      <Stack ref={printRef} spacing={3}>
        
        {/* Retail Music Store KPI Grid */}
        <Grid container spacing={2}>
          {[
            { label: 'Total Albums Sold', value: '2,031 Units', desc: 'Physical LP + CD copies', color: ALBUM_RED },
            { label: 'Monthly Revenue', value: '$64,180.50', desc: '+18% vs last month', color: VINYL_NAVY },
            { label: 'Pending Pre-Orders', value: '412 Records', desc: 'Upcoming summer drops', color: RETRO_GOLD },
            { label: 'Stock Capacity', value: '88%', desc: 'Crate storage limit', color: '#10b981' }
          ].map((kpi, index) => (
            <Grid key={index} item xs={12} sm={6} md={3}>
              <Card sx={{ bgcolor: '#ffffff', border: `1px solid ${CARD_BORDER}`, borderTop: `4px solid ${kpi.color}`, boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                  <Typography variant="caption" fontWeight="bold" sx={{ color: '#64748b', textTransform: 'uppercase', letterSpacing: 0.5 }} display="block">
                    {kpi.label}
                  </Typography>
                  <Typography variant="h5" fontWeight="800" sx={{ my: 0.5, color: VINYL_NAVY }}>
                    {kpi.value}
                  </Typography>
                  <Typography variant="caption" sx={{ color: kpi.color, fontWeight: '500' }} display="block">
                    {kpi.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Sales Performance Monthly Comparison Chart */}
        <Card sx={{ bgcolor: '#ffffff', border: `1px solid ${CARD_BORDER}`, boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <CardContent sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight="800" sx={{ color: VINYL_NAVY, textTransform: 'uppercase' }} gutterBottom>
              Monthly Sales Medium Output
            </Typography>
            <Typography variant="body2" sx={{ color: '#64748b', mb: 4 }}>
              Tracking units sold across vintage vinyl re-issues versus classic standard CDs.
            </Typography>
            <Box sx={{ width: '100%', height: 320 }}>
              <BarChart
                series={[
                  { data: [340, 490, 410, 560], label: "Vinyl LPs", color: ALBUM_RED },
                  { data: [210, 180, 290, 240], label: "Compact Discs (CD)", color: VINYL_NAVY }
                ]}
                height={300}
                xAxis={[{
                  data: ["Jan Stock", "Feb Stock", "Mar Stock", "Apr Stock"],
                  scaleType: "band"
                }]}
                slotProps={{ 
                  legend: { direction: 'row', position: { vertical: 'top', horizontal: 'right' } } 
                }}
              />
            </Box>
          </CardContent>
        </Card>

        {/* Row Containing Custom Segment Charts */}
        <Grid container spacing={3}>
          {/* Genre Allocation Pie Chart */}
          <Grid item xs={12} md={6}>
            <Card sx={{ bgcolor: '#ffffff', border: `1px solid ${CARD_BORDER}`, height: '100%', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" fontWeight="800" sx={{ color: VINYL_NAVY, textTransform: 'uppercase' }} gutterBottom>
                  Genre Category Share
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748b', mb: 3 }}>
                  Store crate breakdown by listener demographic demand.
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: 'center', minHeight: 240 }}>
                  <PieChart
                    series={[{
                      data: [
                        { id: 0, value: 45, label: "Classic Rock", color: ALBUM_RED },
                        { id: 1, value: 25, label: "Jazz / Blues", color: VINYL_NAVY },
                        { id: 2, value: 18, label: "Pop Pop / HipHop", color: '#4f46e5' },
                        { id: 3, value: 12, label: "Electronic Indie", color: RETRO_GOLD },
                      ],
                      innerRadius: 20,
                      paddingAngle: 1,
                      cornerRadius: 2,
                    }]}
                    width={340}
                    height={220}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Monthly Sales Quote Target Gauge */}
          <Grid item xs={12} md={6}>
            <Card sx={{ bgcolor: '#ffffff', border: `1px solid ${CARD_BORDER}`, height: '100%', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" fontWeight="800" sx={{ color: VINYL_NAVY, textTransform: 'uppercase' }} gutterBottom>
                  Quarterly Gross Target
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748b', mb: 3 }}>
                  Store clearance performance matching baseline projections.
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: 240 }}>
                  <Gauge 
                    width={180} 
                    height={180} 
                    value={82}
                    innerRadius="80%"
                    outerRadius="100%"
                    sx={{
                      '& .MuiGauge-valueArc': { fill: ALBUM_RED },
                      '& .MuiGauge-referenceArc': { fill: '#e2e8f0' },
                      '& text': { fill: `${VINYL_NAVY} !important`, fontWeight: 'bold' }
                    }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Store Sales Data Table Grid */}
        <Card sx={{ bgcolor: '#ffffff', border: `1px solid ${CARD_BORDER}`, boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
            <Box sx={{ p: 3, pb: 1 }}>
              <Typography variant="h6" fontWeight="800" sx={{ color: VINYL_NAVY, textTransform: 'uppercase' }} gutterBottom>
                Crate Registry & Audited Transactions
              </Typography>
              <Typography variant="body2" sx={{ color: '#64748b' }}>
                Individual item transaction records parsed by catalog tracking IDs.
              </Typography>
            </Box>
            <Box sx={{ height: 380, width: '100%' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{ pagination: { paginationModel: { pageSize: 5 } } }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
                sx={{
                  border: 'none',
                  '& .MuiDataGrid-columnHeaders': { bgcolor: '#f1f5f9', color: VINYL_NAVY, fontWeight: 'bold', borderBottom: `2px solid ${CARD_BORDER}` },
                  '& .MuiDataGrid-cell': { borderBottom: `1px solid ${CARD_BORDER}` },
                  '& .MuiCheckbox-root.Mui-checked': { color: ALBUM_RED },
                  '& .MuiDataGrid-cell:focus-within': { outline: 'none' }
                }}
              />
            </Box>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
};

export default ReportsPage;