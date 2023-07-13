const mysql=require("mysql");
const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());


const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'meetingDB',
  });
  
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL server');
  });
  
  const meeting = {
    event:'meeting.ended',
    accountid: 'Jc2D4fnjR1-TdrvukOqmxA',
    duration: 60,
    startTime: '2023-07-13 10:51:45',
    timeZone: 'Asia/Calcutta',
    endTime: '2023-07-13 10:52:11',
    topic: 'My Meeting',
    Meeting_id: '87344914526',
    type: 2,
    uuid: 'dsw3kV/vSBGTPcGoyb80Cw==',
    hostid: '21RWZDPWRhiGPmtWD1XYNQ',
    eventTs: 1689245531331,
  };
  
  connection.query('INSERT INTO meetingdetails SET ?', meeting, (error, results, fields) => {
    if (error) {
      console.error('Error inserting meeting:', error);
      return;
    }
    console.log('Meeting inserted successfully');
  });
  //ALTER TABLE meetingdetails ADD COLUMN accountid VARCHAR(255);  -----( Mysql query)
  
  app.post('/api/meetings', (req, res) => {
    const meeting = req.body;
    // Perform necessary operations to create a meeting
    console.log('Creating meeting:', meeting);
    res.status(201).json({ message: 'Meeting created successfully' });
  });

  
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});