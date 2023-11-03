import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// NOTE: mock data will be delete once data connected to db
// mock data for app rows. 
const mockApplicationData = [
      {
        title: "Software Developer, Intern",
        company: "Wealthsimple",
        duration: "4-month Internship",
        location: "Remote",
        status: "Pending",
        logo: "https://images.ctfassets.net/v44fuld738we/3p54yem0uWnzJSPyCLdQgN/10e0569c130b369cf6b33e2f1a88acc7/_2019_Wealthsimple_Favicon_Black.png",
        date: "2023-10-21",
        action: "Complete",
        imageText:"Wealthsimple Logo"
      },
      {
        title: "Data Scientist, Intern",
        company: "Scotiabank",
        duration: "8-months Internship",
        location: "Toronto, ON",
        status: "Pending",
        logo: "https://seeklogo.com/images/S/scotiabank-logo-D2F1AF87B5-seeklogo.com.png",
        date: "2023-10-21",
        action: "pending",
        imageText:"Scotiabank Logo"
      },
      {
        title: "Software Engineer, Intern",
        company: "Amazon",
        duration: "New Grad",
        location: "Vancouver, BC",
        status: "Pending",
        logo: "https://seeklogo.com/images/A/amazon-icon-logo-8F577E5C31-seeklogo.com.png",
        date: "2023-10-21",
        action: "Complete",
        imageText:"Amazon Logo"
      },
      {
        title: "Software Engineer, Junior",
        company: "Microsoft",
        duration: "New Grad",
        location: "Toronto, ON",
        status: "Pending",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
        date: "2023-10-21",
        action: "Complete",
        imageText:"Logo",
        redirect:"app_link"
      },
]

// top banner
function UserApplicationsInfo(){
    return(
        <Card sx={{ ...MyApplicationStyles.cardMargin, paddingTop: '15px', paddingBottom: '15px' }}>
            <CardContent>
                <div style={{ marginBottom: '20px', marginLeft:'30px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                        <Typography variant="h6" component="div" style={{ fontSize: '18px', fontWeight: 'bold' }}>
                            Application Submitted
                        </Typography>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="h6" component="div" style={{ fontSize: '17px', marginRight: '520px', color: '#C1C1C1', fontWeight:'bold' }}>
                            60
                        </Typography>
                        </div>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid #ccc' }}></div>

                <div style={{ marginTop: '20px', marginLeft:'30px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                        <Typography variant="h6" component="div" style={{ fontSize: '18px', fontWeight: 'bold' }}>
                            Selected for Interview
                        </Typography>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="h6" component="div" style={{ fontSize: '17px', marginRight: '520px', color: '#C1C1C1',fontWeight:'bold'  }}>
                            5
                        </Typography>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

// bottom banner
function UserApplications(){
    const [savedExpanded, setSavedExpanded] = useState(false);

    return(
        <Card sx = {MyApplicationStyles.cardMargin}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx ={MyApplicationStyles.tableHeader}>Jobs</TableCell>
                            <TableCell sx ={MyApplicationStyles.tableHeader}  align="center">Company</TableCell>
                            <TableCell sx ={MyApplicationStyles.tableHeader}>Date of Application</TableCell>
                            <TableCell sx ={MyApplicationStyles.tableHeader}>Status</TableCell>
                            <TableCell sx ={MyApplicationStyles.tableHeader}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {mockApplicationData
                    .slice(0, savedExpanded ? mockApplicationData.length : 3)
                    .map((item) => (
                            <TableRow>
                            <TableCell>
                                <Typography style={MyApplicationStyles.jobTitle}>
                                    {item.title}
                                </Typography>
                                <Typography style={MyApplicationStyles.jobDescription}>
                                    {item.duration}
                                    <Typography variant = "span">
                                        , {item.location}
                                    </Typography>
                                </Typography>
                            
                            </TableCell>
                            <TableCell>
                                <Typography style={MyApplicationStyles.jobTitle} align="center">
                                    <img
                                        src={item.logo}
                                        height={"40px"}
                                        alt={item.imageText}
                                    ></img>
                                </Typography>
                                <Typography style={MyApplicationStyles.companyName} align="center">
                                    {item.company}
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography style={MyApplicationStyles.dateOfApplication}>
                                    {item.date}
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography style={MyApplicationStyles.status}>
                                    {item.status}
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography style={MyApplicationStyles.jobTitle}>
                                {item.action.toLowerCase() === "complete" ? (
                            <Button variant="contained" size="small" sx={MyApplicationStyles.actionButtonComplete} >
                            <Typography variant="p">
                                Complete
                                {/* TODO: add redirect */}
                            </Typography>
                            </Button>
                            ) : 
                            <Button variant="contained" size="small" sx={MyApplicationStyles.actionButtonPending} >
                                    <Typography variant="p">
                                    {/* TODO: add redirect */}
                                        Complete
                                    </Typography>
                                </Button>
                            }
                                </Typography>
                            </TableCell>
                        </TableRow>
                    ))}
                    <TableRow
                        key={"end"}
                        sx={{ "&:last-child td, &:last-child th": { border: 0} }}
                    >
                        <TableCell
                            colSpan={5}
                            sx={MyApplicationStyles.see_more}
                            onClick={() => setSavedExpanded(!savedExpanded)}
                        >
                            {savedExpanded ? "See Less" : "See More"}
                        </TableCell>
                    </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
    );
}

  export function MyApplicationItems() {
    return (
    <div style={MyApplicationStyles.pageContainer}>
        <Typography variant="h5" component="div" sx ={MyApplicationStyles.mainTitle}>
                    My Applications
        </Typography>
        <div style={{ margin: '40px' }}></div>
        <UserApplicationsInfo/>
        <div style={{ margin: '40px' }}></div>
        <Typography variant="h5" component="div" sx={MyApplicationStyles.subTitle}>
            Applications
        </Typography>
        <UserApplications/>
    </div>
);
}
        
// main export 
export function MyApplication() {
    return (
        <MyApplicationItems/>
    )
}

// styles
const MyApplicationStyles = {
    pageContainer: {
        width: '100%', 
        background: '#F7F7F7',
        minHeight: '100vh', 
        padding: '16px'

      },
    mainTitle: {
        color: '#000',
        fontFamily: 'League Spartan',
        fontSize: 38,
        fontWeight: 700,
        padding: '16px'
    },
    subTitle: {
        color: '#5E17EB',
        fontFamily: 'Roboto',
        fontSize: 32,
        fontWeight: 700,
        padding: '16px'
    },
    tableHeader :{
        color: '#5E17EB',
        fontSize: 20,
        fontWeight: 500,
        fontFamily: 'Roboto',
    },
    jobTitle: {
        color: '#000',
        fontSize: 16,
        fontWeight: 500,
        fontFamily: 'Roboto',
    },
    jobDescription: {
        color: '#000000',
        fontSize: 12,
        fontWeight: 500,
        fontFamily: 'Roboto',
        opacity: 0.4,
    },
    companyName: {
        color: '#5E17EB',
        fontSize: 14,
        fontWeight: 400,
        fontFamily: 'Roboto',
    },
    dateOfApplication: {
        background: "#000000;",
        fontSize: 14,
        opacity: 0.8,
        fontFamily: 'Roboto',
        fontWeight: 400,
    },
    status: {
        background: "#000000;",
        fontSize: 14,
        opacity: 0.8,
        fontFamily: 'Roboto',
        fontWeight: 400,
    },
    action: {
        background: "#000000;",
        fontSize: 14,
        opacity: 0.8,
        fontFamily: 'Roboto',
        fontWeight: 400,
    },
    actionButtonComplete: {
        background: "#5E17EB;",
        fontSize: 14,
        fontFamily: 'Roboto',
        fontWeight: 400,
        borderRadius: 10
    },
    actionButtonPending: {
        background: "#c1c1c1",
        opacity: 0.9,
        fontSize: 14,
        fontFamily: 'Roboto',
        fontWeight: 400,
        borderRadius: 10
    },
    searchIcon: {
        color: '#5E17EB',
    },
    selectDropDown: {
        borderRadius: 10, 
        minWidth: '120px', 
        height: "25px",
        color: '#5E17EB',
        marginLeft: "10px",
        width: "11vw",
      },
      see_more: {
        textAlign: "center",
        color: "White",
        fontSize: "12px",
        padding: 0.5,
        cursor: "pointer",
        backgroundColor: "#5E17EB",
        "&:hover": {
          backgroundColor: "#814AEF",
        },
        "&:focus": {
          backgroundColor: "#814AEF",
        },
      },
}
